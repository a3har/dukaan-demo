type Options = {
  headers?: any
}

const getBaseConfig = (options: Options = {}) => {
  const { headers } = options
  return {
    headers: {
      ...headers,
    },
  }
}

async function get(url: string, options: Options) {
  const baseConfig = getBaseConfig(options)
  const requestOptions: RequestInit = {
    method: "GET",
    ...baseConfig,
    ...options,
    headers: { ...baseConfig.headers, ...options?.headers },
  }
  return fetch(getUrl(url), requestOptions).then((res) =>
    handleResponse(res, options)
  )
}

async function post(url: string, params: any, options: Options) {
  const baseConfig = getBaseConfig(options)
  const { headers } = options
  const requestOptions: RequestInit = {
    method: "POST",
    ...baseConfig,
    ...options,
    headers: { ...baseConfig.headers, ...headers },
    body: typeof params === "object" ? JSON.stringify(params) : params,
  }

  return fetch(getUrl(url), requestOptions).then((res) =>
    handleResponse(res, options)
  )
}

//Helper Functions
async function handleResponse(response: Response, options: Options = {}) {
  try {
    const text = await response.text()
    let data: any = null
    try {
      data = text && JSON.parse(text)
    } catch (err) {
      console.log("ERROR CLIENT HANDLE RESPONSE: ", err)
    }

    if (!response.ok) {
      return Promise.reject({
        error: data || {},
        status: response.status,
        statusText: response.statusText,
      })
    }

    return data
  } catch (err) {
    console.log("ERROR CLIENT HANDLE RESPONSE: ", err)
    return Promise.reject(err)
  }
}

function getUrl(url: string) {
  if (
    url.startsWith("http") ||
    url.startsWith("/") ||
    url.startsWith("https")
  ) {
    return url
  }

  return `/${url}`
}

const api = {
  get,
  post,
}

export default api
