const chains = {
    // mainnet
    terra: 'phoenix-1',
    osmosis: 'osmosis-1',
    // testnet
    terraTest: 'pisco-1',
}

module.exports = {
    uluna: {
        token: 'uluna',
        symbol: 'Luna',
        name: 'Terra Luna',
        icon: 'https://assets.terra.money/icon/svg/Luna.svg',
        chains: [chains.terra, chains.terraTest],
        decimals: 6,
    },
    uosmo: {
        token: 'uosmo',
        symbol: 'Osmo',
        name: 'Osmosis',
        icon: 'https://assets.terra.money/icon/svg/ibc/OSMO.svg',
        chains: [chains.osmosis],
        decimals: 6,
    },
    // Luna on Osmosis
    'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9': {
        token: 'uluna',
        symbol: 'Luna',
        name: 'Terra Luna',
        icon: 'https://assets.terra.money/icon/svg/Luna.svg',
        chains: [chains.osmosis],
        decimals: 6,
    },
    // Osmo on Terra
    'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B': {
        token: 'uosmo',
        symbol: 'Osmo',
        name: 'Osmosis',
        icon: 'https://assets.terra.money/icon/svg/ibc/OSMO.svg',
        chains: [chains.terra],
        decimals: 6,
    }
}