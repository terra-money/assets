module.exports = {
    mainnet: {
        'phoenix-1': {
            chainID: 'phoenix-1',
            lcd: 'https://phoenix-lcd.terra.dev',
            gasAdjustment: 1.75,
            gasPrices: { uluna: 0.015 },
            prefix: 'terra',
            coinType: '330',
            baseAsset: 'uluna',
            name: 'Terra',
            icon: 'https://assets.terra.money/icon/svg/Terra.svg',
            // doesn't require IBC channels since it's already on all the other chains
        },
        'osmosis-1': {
            chainID: 'osmosis-1',
            lcd: 'https://osmosis.feather.network',
            gasAdjustment: 1.75,
            gasPrices: { uosmo: 0.025 },
            prefix: 'osmo',
            coinType: '118',
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
            coinType: '330',
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
            coinType: '118',
            baseAsset: 'umars',
            name: 'Mars',
            icon: 'https://marsprotocol.io/mars_logo_colored.svg',
            ibc: {
                toTerra: 'channel-1',
                fromTerra: 'channel-66'
            }
        },
        'feath-1': {
            chainID: 'feath-1',
            lcd: 'https://b854b4ab09a35575934ded7ebe73e8bbf97b8169.lcd.feather.network',
            gasAdjustment: 1.75,
            gasPrices: { stake: 0.0 },
            prefix: 'feath',
            coinType: '330',
            baseAsset: 'stake',
            name: 'Feather',
            icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/319/feather_1fab6.png',
        },
        'candled-testnet-1': {
            baseAsset: 'stake',
            chainID: 'candled-testnet-1',
            coinType: '118',
            gasAdjustment: 1.75,
            gasPrices: { stake: 0.015 },
            stake: 0.015,
            icon: 'https://purepng.com/public/uploads/large/candle-s9b.png',
            lcd: 'http://3.73.32.56:1317',
            name: 'Candled Testnet',
            prefix: 'candle'
        },
        'uni-5': {
            baseAsset: 'ujunox',
            chainID: 'uni-5',
            coinType: '118',
            gasAdjustment: 1.75,
            gasPrices: { ujunox: 0.015 },
            ujunox: 0.015,
            icon: 'https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg',
            lcd: 'https://juno-testnet-api.polkachu.com',
            name: 'Juno Testnet',
            prefix: 'juno'
        },
    }
}
