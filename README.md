# Terra Assets 

This repository contains contract addresses for many different use-cases. 

## Layout

```
assets
│
└───cw20
│   │   contracts.js # Generic smart contracts on Terra.
│   │   pairs.js # Terraswap pairs used mostly by Terra Station.
│   │   tokens.js # Individual cw20 tokens.
│
└───cw721
│   │   contracts.js # NFTs collections for display in Station.
│   │   marketplace.js # List of open NFT marketplaces on Terra.
│
└───ibc
    │   tokens.js # Tokens bridged to Terra through IBC.
```

There are other lists that are used less often so I've left them out of this walkthrough.

## Process for adding a new contract

1. Fork this repository so you can make changes. 
1. Make the desired changes in your own fork, then create a pull request for each file changed. Pairs can take longer to review than individual tokens for example, so this will allow us to merge updates quicker. 
1. Make sure to include a trailing comma on the item you are adding. This helps prevent merge conflicts in the future.
1. Please add your contract to the end of the list, our build process will sort the list alphabetically by either protocol name, or name depending on the list.
