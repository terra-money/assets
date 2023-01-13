const chains = {
    // mainnet
    terra: 'phoenix-1',
    osmosis: 'osmosis-1',
    // testnet
    terraTest: 'pisco-1',
    marsTest: 'ares-1',
    featherTest: 'feath-1',
    // classic
    classic: 'columbus-5'
}

module.exports = {
    uluna: {
        token: 'uluna',
        symbol: 'Luna',
        name: 'Terra Luna',
        icon: 'https://assets.terra.money/icon/svg/Luna.svg',
        chains: [chains.terra, chains.terraTest, chains.classic],
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
    },
    // CRE on Terra
    'ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5': {
        token: 'ucre',
        symbol: 'CRE',
        name: 'Crescent Network',
        icon: 'https://assets.terra.money/icon/svg/ibc/CRE.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    // Juno on Terra
    'ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04': {
        token: 'ujuno',
        symbol: 'JUNO',
        name: 'Juno',
        icon: 'https://assets.terra.money/icon/svg/ibc/JUNO.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    // Secret on Terra
    'ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD': {
        token: 'uscrt',
        symbol: 'SCRT',
        name: 'Secret',
        icon: 'https://assets.terra.money/icon/svg/ibc/SCRT.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    // Atom on Terra
    'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2': {
        token: 'uatom',
        symbol: 'ATOM',
        name: 'Cosmos',
        icon: 'https://assets.terra.money/icon/svg/ibc/ATOM.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    // Grav on Terra
    'ibc/64B3EFE08A6A3EF5D2A7F1D3AF033DDC951DA51F92E06CC31D3F9AF8E8368860': {
        token: 'ugraviton',
        symbol: 'GRAV',
        name: 'Graviton',
        icon: 'https://assets.terra.money/icon/svg/ibc/GRAV.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    // USK on Terra
    'ibc/14ACCAD1750327C74BB35978AD0C3E97B184DAB9F0BF4BD876FBD1F782B57110': {
        token: 'factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk',
        symbol: 'USK',
        name: 'USK',
        icon: 'https://assets.terra.money/icon/svg/ibc/USK.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    // KUJI on Terra
    'ibc/B22B4DD21586965DAEF42A7600BA371EA77C02E90FC8A7F2330BF9F9DE129B07': {
        token: 'ukuji',
        symbol: 'KUJI',
        name: 'Kujira',
        icon: 'https://assets.terra.money/icon/svg/ibc/KUJI.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    // axelar tokens on Terra
    'ibc/2E435CEEEBA18CCB2719E0182BC5D142A364D6CCE9957DE6E1AC4D62127D2913': {
        token: 'frax-wei',
        symbol: 'axlFRAX',
        name: 'Axelar Frax',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlFRAX.svg',
        chains: [chains.terra],
        decimals: 18,
    },
    'ibc/6EFF21F9E65C9101370C38AA53049E4D1FF2B206A7C350B45F0ED3660E57AC75': {
        token: 'uni-wei',
        symbol: 'axlUNI',
        name: 'Axelar Uniswap',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlUNI.svg',
        chains: [chains.terra],
        decimals: 18,
    },
    'ibc/1FD62537E1FBE67DF7574E0234112B4FE417B20AADC2F574026CB664EA9492C7': {
        token: 'link-wei',
        symbol: 'axlLINK',
        name: 'Axelar ChainLink',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlLINK.svg',
        chains: [chains.terra],
        decimals: 18,
    },
    'ibc/2E9CD07D7A6572A4CDAABBF0FBB89F69A9A362818132221182654819E277220A': {
        token: 'aave-wei',
        symbol: 'axlAAVE',
        name: 'Axelar AAVE',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlAAVE.svg',
        chains: [chains.terra],
        decimals: 18,
    },
    'ibc/14E4FD1AB72DE9BF1D6725CBA18373C406CB9A7DA17955299F3F4DC5C6131A4E': {
        token: 'wmatic-wei',
        symbol: 'axlMATIC',
        name: 'Axelar Matic',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlMATIC.svg',
        chains: [chains.terra],
        decimals: 18,
    },
    'ibc/E46EF5449878F6B81219163F211E7329CC0729AA99DA8A589A865F82F754ADE8': {
        token: 'dai-wei',
        symbol: 'axlDAI',
        name: 'Axelar DAI',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlDAI.svg',
        chains: [chains.terra],
        decimals: 18,
    },
    'ibc/BC8A77AFBD872FDC32A348D3FB10CC09277C266CFE52081DE341C7EC6752E674': {
        token: 'weth-wei',
        symbol: 'axlWETH',
        name: 'Axelar Wrapped Ethereum',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlETH.svg',
        chains: [chains.terra],
        decimals: 18,
    },
    'ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4': {
        token: 'uusdc',
        symbol: 'axlUSDC',
        name: 'Axelar USD Coin',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlUSDC.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    'ibc/CBF67A2BCF6CAE343FDF251E510C8E18C361FC02B23430C121116E0811835DEF': {
        token: 'uusdt',
        symbol: 'axlUSDT',
        name: 'Axelar USD Tether',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlUSDT.svg',
        chains: [chains.terra],
        decimals: 6,
    },
    'ibc/05D299885B07905B6886F554B39346EA6761246076A1120B1950049B92B922DD': {
        token: 'wbtc-satoshi',
        symbol: 'axlWBTC',
        name: 'Axelar Wrapped Bitcoin',
        icon: 'https://assets.terra.money/icon/svg/ibc/axlWBTC.svg',
        chains: [chains.terra],
        decimals: 8,
    },
    'umars': {
        token: 'umars',
        symbol: 'Mars',
        name: 'Mars',
        icon: 'https://marsprotocol.io/MARSTokenMini.svg',
        chains: [chains.marsTest],
        decimals: 6,
    },
    'ibc/A91A7FDF128104F0A49B96E9EC8D8D739F878796B33104F70478CDE60B6401D5': {
        token: 'umars',
        symbol: 'Mars',
        name: 'Mars',
        icon: 'https://marsprotocol.io/MARSTokenMini.svg',
        chains: [chains.terraTest],
        decimals: 6,
    },
    'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8': {
        token: 'uluna',
        symbol: 'Luna',
        name: 'Terra Luna',
        icon: 'https://assets.terra.money/icon/svg/Luna.svg',
        chains: [chains.marsTest],
        decimals: 6,
    },
    'stake': {
        token: 'ufeath',
        symbol: 'Feath',
        name: 'Feather',
        icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/319/feather_1fab6.png',
        chains: [chains.featherTest],
        decimals: 6,
    },
}