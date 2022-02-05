const cont = {
  Status: String,
  HTTPCode: Number,
  ResponseTime: Number,
  QueryTimestamp: Number,
}

const bigCont = {
  EU_West: cont,
  EU_East: cont,
  US_West: cont,
  US_Central: cont,
  US_East: cont,
  SouthAmerica: cont,
  Asia: cont,
}

export const apexData = {
  Origin_login: bigCont,
  EA_novafusion: bigCont,
  EA_accounts: bigCont,
  ApexOauth_Crossplay: bigCont,
  // selfCoreTest: bigCont,
  otherPlatforms: {
    Playstation_Network: {
      Status: String,
      QueryTimestamp: Number,
    },
    XboxLive: {
      Status: String,
      QueryTimestamp: Number,
    },
  },
}

export const consArray = [
  'ApexOauth_Crossplay',
  'EA_accounts',
  'EA_novafusion',
  'Origin_login',
]

export const consArrayGoodName = [
  'Crossplay',
  'EA Accounts',
  'EA Novafusion',
  'Origin',
]

export const regionArray = [
  'Asia',
  'EU_East',
  'EU_West',
  'SouthAmerica',
  'US_Central',
  'US_East',
  'US_West',
]

export const regionArrayGoodName = [
  'Asia',
  'EU East',
  'EU West',
  'South America',
  'US Central',
  'US East',
  'US West',
]
