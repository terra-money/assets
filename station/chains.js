module.exports = {
    mainnet: {
        'phoenix-1': {
            chainID: 'phoenix-1',
            lcd: 'https://phoenix-lcd.terra.dev',
            gasAdjustment: 1.75,
            gasPrices: { uluna: 0.015 },
            prefix: 'terra',
            baseAsset: 'uluna',
            name: 'Terra',
            icon: 'https://assets.terra.money/icon/svg/Terra.svg',
            // doesn't require IBC channels since it's already on all the other chains
        },
        'osmosis-1': {
            chainID: 'osmosis-1',
            lcd: 'https://lcd-osmosis.blockapsis.com/',
            gasAdjustment: 1.75,
            gasPrices: { uosmo: 0.025 },
            prefix: 'osmo',
            baseAsset: 'uosmo',
            name: 'Osmosis',
            icon: 'https://assets.terra.money/icon/svg/ibc/OSMO.svg',
            ibc: {
                toTerra: 'channel-251',
                fromTerra: 'channel-1'
            }
        },
    },
    testnet: {
        'pisco-1': {
            chainID: 'pisco-1',
            lcd: 'https://pisco-lcd.terra.dev',
            gasAdjustment: 1.75,
            gasPrices: { uluna: 0.015 },
            prefix: 'terra',
            baseAsset: 'uluna',
            name: 'Terra',
            icon: 'https://assets.terra.money/icon/svg/Terra.svg',
        },
        'ares-1': {
            chainID: 'ares-1',
            lcd: 'https://testnet-rest.marsprotocol.io',
            gasAdjustment: 1.75,
            gasPrices: { umars: 0.0 },
            prefix: 'mars',
            baseAsset: 'umars',
            name: 'Mars',
            icon: 'https://marsprotocol.io/mars_logo_colored.svg',
            ibc: {
                toTerra: 'channel-1',
                fromTerra: 'channel-66'
            }
        },
    }
}
