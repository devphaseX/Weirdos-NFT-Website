export default [
  [
    {
      name: 'Somthing',
      img: '/img/Nfts/bighead-1.svg',
      price: 0.6,
      number: 152,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'wrong',
      img: '/img/Nfts/bighead-2.svg',
      price: 1.0,
      number: 312,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'Somthing',
      img: '/img/Nfts/bighead-3.svg',
      price: 0.4,
      number: 102,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'wrong',
      img: '/img/Nfts/bighead-4.svg',
      price: 1.2,
      number: 182,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'Somthing',
      img: '/img/Nfts/bighead-6.svg',
      price: 0.69,
      number: 624,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'wrong',
      img: '/img/Nfts/bighead-5.svg',
      price: 0.67,
      number: 514,
      priceTypeImg: '/icon/Ethereum.svg',
    },
  ],
  [
    {
      name: 'with',
      img: '/img/Nfts/bighead-10.svg',
      price: 2.5,
      number: 158,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'you',
      img: '/img/Nfts/bighead-7.svg',
      price: 0.7,
      number: 424,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'Somthing',
      img: '/img/Nfts/bighead-9.svg',
      price: 0.2,
      number: 186,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'wrong',
      img: '/img/Nfts/bighead-5.svg',
      price: 1.7,
      number: 150,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'Somthing',
      img: '/img/Nfts/bighead-8.svg',
      price: 0.99,
      number: 802,
      priceTypeImg: '/icon/Ethereum.svg',
    },
    {
      name: 'wrong',
      img: '/img/Nfts/bighead-7.svg',
      price: 1.0,
      number: 152,
      priceTypeImg: '/icon/Ethereum.svg',
    },
  ],
];

export type ShowCaseRowsDataList = typeof import('./showcaseData.js').default;

export type ShowCaseDataRow = ShowCaseRowsDataList[number];

export type ShowCaseItemData = ShowCaseDataRow[number];
