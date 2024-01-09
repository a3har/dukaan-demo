import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const requestParams = await request.json()
  const {
    pagination: { size, page },
    filters: { orderId },
  } = requestParams

  return NextResponse.json({
    transactions: DUMMY_TRANSACTIONS.filter((transaction) => {
      if (orderId) {
        return transaction.orderId.includes(orderId)
      } else {
        return true
      }
    }).slice((page - 1) * size, page * size),
    total: DUMMY_TRANSACTIONS.length,
  })
}

const DUMMY_TRANSACTIONS = [
  {
    orderId: "9876",
    orderDate: new Date("2022-10-01"),
    amount: 150,
    fees: 15,
  },
  {
    orderId: "7654",
    orderDate: new Date("2022-09-15"),
    amount: 200,
    fees: 20,
  },
  {
    orderId: "5432",
    orderDate: new Date("2022-08-20"),
    amount: 175,
    fees: 17.5,
  },
  {
    orderId: "3210",
    orderDate: new Date("2022-07-05"),
    amount: 125,
    fees: 12.5,
  },
  {
    orderId: "2468",
    orderDate: new Date("2022-06-10"),
    amount: 180,
    fees: 18,
  },
  {
    orderId: "1357",
    orderDate: new Date("2022-05-25"),
    amount: 220,
    fees: 22,
  },
  {
    orderId: "8642",
    orderDate: new Date("2022-04-30"),
    amount: 195,
    fees: 19.5,
  },
  {
    orderId: "7531",
    orderDate: new Date("2022-03-15"),
    amount: 135,
    fees: 13.5,
  },
  {
    orderId: "6420",
    orderDate: new Date("2022-02-20"),
    amount: 160,
    fees: 16,
  },
  {
    orderId: "4293",
    orderDate: new Date("2022-01-05"),
    amount: 145,
    fees: 14.5,
  },
  {
    orderId: "1111",
    orderDate: new Date("2022-10-01"),
    amount: 100,
    fees: 10,
  },
  {
    orderId: "2222",
    orderDate: new Date("2022-10-02"),
    amount: 200,
    fees: 20,
  },
  {
    orderId: "3333",
    orderDate: new Date("2022-10-03"),
    amount: 300,
    fees: 30,
  },
  {
    orderId: "4444",
    orderDate: new Date("2022-10-04"),
    amount: 400,
    fees: 40,
  },
  {
    orderId: "5555",
    orderDate: new Date("2022-10-05"),
    amount: 500,
    fees: 50,
  },
  {
    orderId: "6666",
    orderDate: new Date("2022-10-06"),
    amount: 600,
    fees: 60,
  },
  {
    orderId: "7777",
    orderDate: new Date("2022-10-07"),
    amount: 700,
    fees: 70,
  },
  {
    orderId: "8888",
    orderDate: new Date("2022-10-08"),
    amount: 800,
    fees: 80,
  },
  {
    orderId: "9999",
    orderDate: new Date("2022-10-09"),
    amount: 900,
    fees: 90,
  },
  {
    orderId: "1010",
    orderDate: new Date("2022-10-10"),
    amount: 1000,
    fees: 100,
  },
  {
    orderId: "1112",
    orderDate: new Date("2022-10-11"),
    amount: 1100,
    fees: 110,
  },
  {
    orderId: "1213",
    orderDate: new Date("2022-10-12"),
    amount: 1200,
    fees: 120,
  },
  {
    orderId: "1314",
    orderDate: new Date("2022-10-13"),
    amount: 1300,
    fees: 130,
  },
  {
    orderId: "1415",
    orderDate: new Date("2022-10-14"),
    amount: 1400,
    fees: 140,
  },
  {
    orderId: "1516",
    orderDate: new Date("2022-10-15"),
    amount: 1500,
    fees: 150,
  },
  {
    orderId: "1617",
    orderDate: new Date("2022-10-16"),
    amount: 1600,
    fees: 160,
  },
  {
    orderId: "1718",
    orderDate: new Date("2022-10-17"),
    amount: 1700,
    fees: 170,
  },
  {
    orderId: "1819",
    orderDate: new Date("2022-10-18"),
    amount: 1800,
    fees: 180,
  },
  {
    orderId: "1920",
    orderDate: new Date("2022-10-19"),
    amount: 1900,
    fees: 190,
  },
  {
    orderId: "2021",
    orderDate: new Date("2022-10-20"),
    amount: 2000,
    fees: 200,
  },
  {
    orderId: "2122",
    orderDate: new Date("2022-10-21"),
    amount: 2100,
    fees: 210,
  },
  {
    orderId: "2223",
    orderDate: new Date("2022-10-22"),
    amount: 2200,
    fees: 220,
  },
  {
    orderId: "2324",
    orderDate: new Date("2022-10-23"),
    amount: 2300,
    fees: 230,
  },
  {
    orderId: "2425",
    orderDate: new Date("2022-10-24"),
    amount: 2400,
    fees: 240,
  },
  {
    orderId: "2526",
    orderDate: new Date("2022-10-25"),
    amount: 2500,
    fees: 250,
  },
  {
    orderId: "2627",
    orderDate: new Date("2022-10-26"),
    amount: 2600,
    fees: 260,
  },
  {
    orderId: "2728",
    orderDate: new Date("2022-10-27"),
    amount: 2700,
    fees: 270,
  },
  {
    orderId: "2829",
    orderDate: new Date("2022-10-28"),
    amount: 2800,
    fees: 280,
  },
  {
    orderId: "2930",
    orderDate: new Date("2022-10-29"),
    amount: 2900,
    fees: 290,
  },
  {
    orderId: "3031",
    orderDate: new Date("2022-10-30"),
    amount: 3000,
    fees: 300,
  },
  {
    orderId: "3132",
    orderDate: new Date("2022-10-31"),
    amount: 3100,
    fees: 310,
  },
  {
    orderId: "3233",
    orderDate: new Date("2022-11-01"),
    amount: 3200,
    fees: 320,
  },
  {
    orderId: "3334",
    orderDate: new Date("2022-11-02"),
    amount: 3300,
    fees: 330,
  },
  {
    orderId: "3435",
    orderDate: new Date("2022-11-03"),
    amount: 3400,
    fees: 340,
  },
  {
    orderId: "3536",
    orderDate: new Date("2022-11-04"),
    amount: 3500,
    fees: 350,
  },
  {
    orderId: "3637",
    orderDate: new Date("2022-11-05"),
    amount: 3600,
    fees: 360,
  },
  {
    orderId: "3738",
    orderDate: new Date("2022-11-06"),
    amount: 3700,
    fees: 370,
  },
  {
    orderId: "3839",
    orderDate: new Date("2022-11-07"),
    amount: 3800,
    fees: 380,
  },
  {
    orderId: "3940",
    orderDate: new Date("2022-11-08"),
    amount: 3900,
    fees: 390,
  },
  {
    orderId: "4041",
    orderDate: new Date("2022-11-09"),
    amount: 4000,
    fees: 400,
  },
  {
    orderId: "4142",
    orderDate: new Date("2022-11-10"),
    amount: 4100,
    fees: 410,
  },
  {
    orderId: "4243",
    orderDate: new Date("2022-11-11"),
    amount: 4200,
    fees: 420,
  },
  {
    orderId: "4344",
    orderDate: new Date("2022-11-12"),
    amount: 4300,
    fees: 430,
  },
  {
    orderId: "4445",
    orderDate: new Date("2022-11-13"),
    amount: 4400,
    fees: 440,
  },
  {
    orderId: "4546",
    orderDate: new Date("2022-11-14"),
    amount: 4500,
    fees: 450,
  },
  {
    orderId: "4647",
    orderDate: new Date("2022-11-15"),
    amount: 4600,
    fees: 460,
  },
  {
    orderId: "4748",
    orderDate: new Date("2022-11-16"),
    amount: 4700,
    fees: 470,
  },
  {
    orderId: "4849",
    orderDate: new Date("2022-11-17"),
    amount: 4800,
    fees: 480,
  },
  {
    orderId: "4950",
    orderDate: new Date("2022-11-18"),
    amount: 4900,
    fees: 490,
  },
  {
    orderId: "5051",
    orderDate: new Date("2022-11-19"),
    amount: 5000,
    fees: 500,
  },
  {
    orderId: "5152",
    orderDate: new Date("2022-11-20"),
    amount: 5100,
    fees: 510,
  },
  {
    orderId: "5253",
    orderDate: new Date("2022-11-21"),
    amount: 5200,
    fees: 520,
  },
  {
    orderId: "5354",
    orderDate: new Date("2022-11-22"),
    amount: 5300,
    fees: 530,
  },
  {
    orderId: "5455",
    orderDate: new Date("2022-11-23"),
    amount: 5400,
    fees: 540,
  },
  {
    orderId: "5556",
    orderDate: new Date("2022-11-24"),
    amount: 5500,
    fees: 550,
  },
  {
    orderId: "5657",
    orderDate: new Date("2022-11-25"),
    amount: 5600,
    fees: 560,
  },
  {
    orderId: "5758",
    orderDate: new Date("2022-11-26"),
    amount: 5700,
    fees: 570,
  },
  {
    orderId: "5859",
    orderDate: new Date("2022-11-27"),
    amount: 5800,
    fees: 580,
  },
  {
    orderId: "5960",
    orderDate: new Date("2022-11-28"),
    amount: 5900,
    fees: 590,
  },
  {
    orderId: "6061",
    orderDate: new Date("2022-11-29"),
    amount: 6000,
    fees: 600,
  },
  {
    orderId: "6162",
    orderDate: new Date("2022-11-30"),
    amount: 6100,
    fees: 610,
  },
  {
    orderId: "6263",
    orderDate: new Date("2022-12-01"),
    amount: 6200,
    fees: 620,
  },
  {
    orderId: "6364",
    orderDate: new Date("2022-12-02"),
    amount: 6300,
    fees: 630,
  },
  {
    orderId: "6465",
    orderDate: new Date("2022-12-03"),
    amount: 6400,
    fees: 640,
  },
  {
    orderId: "6566",
    orderDate: new Date("2022-12-04"),
    amount: 6500,
    fees: 650,
  },
  {
    orderId: "6667",
    orderDate: new Date("2022-12-05"),
    amount: 6600,
    fees: 660,
  },
  {
    orderId: "6768",
    orderDate: new Date("2022-12-06"),
    amount: 6700,
    fees: 670,
  },
  {
    orderId: "6869",
    orderDate: new Date("2022-12-07"),
    amount: 6800,
    fees: 680,
  },
  {
    orderId: "6970",
    orderDate: new Date("2022-12-08"),
    amount: 6900,
    fees: 690,
  },
  {
    orderId: "7071",
    orderDate: new Date("2022-12-09"),
    amount: 7000,
    fees: 700,
  },
  {
    orderId: "7172",
    orderDate: new Date("2022-12-10"),
    amount: 7100,
    fees: 710,
  },
  {
    orderId: "7273",
    orderDate: new Date("2022-12-11"),
    amount: 7200,
    fees: 720,
  },
  {
    orderId: "7374",
    orderDate: new Date("2022-12-12"),
    amount: 7300,
    fees: 730,
  },
  {
    orderId: "7475",
    orderDate: new Date("2022-12-13"),
    amount: 7400,
    fees: 740,
  },
  {
    orderId: "7576",
    orderDate: new Date("2022-12-14"),
    amount: 7500,
    fees: 750,
  },
  {
    orderId: "7677",
    orderDate: new Date("2022-12-15"),
    amount: 7600,
    fees: 760,
  },
  {
    orderId: "7778",
    orderDate: new Date("2022-12-16"),
    amount: 7700,
    fees: 770,
  },
  {
    orderId: "7879",
    orderDate: new Date("2022-12-17"),
    amount: 7800,
    fees: 780,
  },
  {
    orderId: "7980",
    orderDate: new Date("2022-12-18"),
    amount: 7900,
    fees: 790,
  },
  {
    orderId: "8081",
    orderDate: new Date("2022-12-19"),
    amount: 8000,
    fees: 800,
  },
  {
    orderId: "8182",
    orderDate: new Date("2022-12-20"),
    amount: 8100,
    fees: 810,
  },
  {
    orderId: "8283",
    orderDate: new Date("2022-12-21"),
    amount: 8200,
    fees: 820,
  },
  {
    orderId: "8384",
    orderDate: new Date("2022-12-22"),
    amount: 8300,
    fees: 830,
  },
  {
    orderId: "8485",
    orderDate: new Date("2022-12-23"),
    amount: 8400,
    fees: 840,
  },
  {
    orderId: "8586",
    orderDate: new Date("2022-12-24"),
    amount: 8500,
    fees: 850,
  },
  {
    orderId: "8687",
    orderDate: new Date("2022-12-25"),
    amount: 8600,
    fees: 860,
  },
  {
    orderId: "8788",
    orderDate: new Date("2022-12-26"),
    amount: 8700,
    fees: 870,
  },
  {
    orderId: "8889",
    orderDate: new Date("2022-12-27"),
    amount: 8800,
    fees: 880,
  },
  {
    orderId: "8990",
    orderDate: new Date("2022-12-28"),
    amount: 8900,
    fees: 890,
  },
  {
    orderId: "9091",
    orderDate: new Date("2022-12-29"),
    amount: 9000,
    fees: 900,
  },
  {
    orderId: "9192",
    orderDate: new Date("2022-12-30"),
    amount: 9100,
    fees: 910,
  },
  {
    orderId: "9293",
    orderDate: new Date("2022-12-31"),
    amount: 9200,
    fees: 920,
  },
]
