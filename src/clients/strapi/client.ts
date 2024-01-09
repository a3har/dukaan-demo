import humps from 'humps'

import { CMS_URL } from '@/constants/urls'

export async function getData(url: string, includeMeta = false) {
  const ENDPOINT = `${CMS_URL}/api/${url}`
  const response = await fetch(ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      console.error('Error while getching data from CMS', e)
    })

  if (response?.data) {
    if (includeMeta) {
      return {
        data: humps.camelizeKeys(response.data),
        meta: humps.camelizeKeys(response.meta),
      }
    } else {
      return humps.camelizeKeys(response.data)
    }
  }

  return null
}

export async function postData(url:string, payload:object) {
  const ENDPOINT = `${CMS_URL}/api/${url}`
  return fetch(ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  })
    .then((data) => data.json())
    .catch((e) => {
      console.error('error while sening data cms waitlist', e)
    })
}
export async function putData(url:string, payload:object) {
  const ENDPOINT = `${CMS_URL}/api/${url}`
  return fetch(ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(payload),
  })
    .then((data) => data.json())
    .catch((e) => {
      throw new Error(e)
    })
}
