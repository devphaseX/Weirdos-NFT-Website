import { randomNaiveId } from '../../../../utils';

interface TeamMember {
  _id: string;
  name: string;
  profileImg: string;
  workPosition: string;
}

const team: Array<TeamMember> = [
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-1.svg',
    workPosition: 'founder',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-2.svg',
    workPosition: 'founder',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-3.svg',
    workPosition: 'co-founder',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-4.svg',
    workPosition: 'ceo',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-5.svg',
    workPosition: 'cfo',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-6.svg',
    workPosition: 'engineer manager',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-7.svg',
    workPosition: 'frontend engineer',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-8.svg',
    workPosition: 'mobile engineer',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-9.svg',
    workPosition: 'backend engineer',
  },
  {
    _id: randomNaiveId(),
    name: 'samuel',
    profileImg: '/img/Nfts/bighead-10.svg',
    workPosition: 'designer',
  },
];

export default team;
export type { TeamMember };
