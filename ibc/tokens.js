module.exports = {
  mainnet: {},
  classic: {
    '0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B': {
      denom: "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      path: "transfer/channel-1",
      base_denom: "uosmo",
      symbol: "OSMO",
      name: "Osmosis",
      icon: "https://assets.terra.money/icon/svg/ibc/OSMO.svg"
    },
    'EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09': {
      denom: "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09",
      path: "transfer/channel-16",
      base_denom: "uscrt",
      symbol: "SCRT",
      name: "Secret",
      icon: "https://assets.terra.money/icon/svg/ibc/SCRT.svg"
    },
    '18ABA66B791918D51D33415DA173632735D830E2E77E63C91C11D3008CFD5262': {
      denom: "ibc/18ABA66B791918D51D33415DA173632735D830E2E77E63C91C11D3008CFD5262",
      path: "transfer/channel-41",
      base_denom: "uatom",
      symbol: "ATOM",
      name: "Cosmos",
      icon: "https://assets.terra.money/icon/svg/ibc/ATOM.svg"
    },
  },
  testnet: {}
}
