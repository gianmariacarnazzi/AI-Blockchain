# AI & Blockchain Integration Using Chainlink Functions

This is a basic integration of AI into Smart Contracts using Chainlink Technologies. The key dependency used is the [Chainlink Functions Toolkit NPM Package](https://github.com/smartcontractkit/functions-toolkit)

There are many possible applications of AI systems in Blockchain. I started with a basic API call to a text-to-image model that could be used in NFT ecosystems. For example, a TCG game could leverage this to let users create their own card whenever they got some badges or by spending their token rewards.
Another implementation can be based on a model that performs sentiment analysis on X with respect to a specific token passed by the smart contract user. Possible use-cases regard Defi protocols like lending ones that could leverage this technology to get an alert for tokens that are more likely to decline in value leading to collateral liquidations (LTV monitoring system).

The source code that will be executed by Chainlink Functions is in `./source.js`. This is the code that gets sent on-chain and then onto the Chainlink Decentralized Oracle Network for decentralized execution.

## Prerequisites

1. Metamask funded with LINK tokens - [fund here.](faucets.chain.link). Also ensure you have enough test Mumbai Matic or Sepolia Eth. Network-specific configs are in `./networks.js` but we set the `NETWORK` variable each of the files in `./scripts` so that you can choose which one you want to use.

2. Install NPM and Node > v 17. If you wish to simulate the execution of your Chainlink Functions Locally using the in-built simulator (done in the `./scripts/simulateScript.ts` script) you will also need to install [Deno](https://deno.land/manual/getting_started/installation).

3. The following environment variables should be readily available (check the `networks.js` file to see which ones you will need and what name they are given):

```
The following ENV VARIABLE values
GPT_API_KEY --> get from https://platform.openai.com and then https://platform.openai.com/account/api-keys.
PRIVATE_KEY --> Wallet private key

POLYGON_MUMBAI_RPC_URL
## OR ##
ETHEREUM_SEPOLIA_RPC_URL
```

Set your environment variables using the `env-enc` package included.  
1. Set password with `npx env-enc set-pw`. Remember this password otherwise you will have to set the env vars each time!
2. Set the above-mentioned env vars with `npx env-enc set`...and then follow the prompts.
3. After you set all the env vars, you can view the decrypted, human-readable version by running `npx env-enc view`

**Note** each time you open a fresh terminal or restart a terminal session you will need to run `npx env-enc set-pw` but not the other steps.

## Steps

1.  Go to the [Functions Subscriptions App](https://functions.chain.link). This is the subscription management UI for functions. Connect your wallet to Polygon Mumbai/Sepolia on the Functions web app.

        Create your first subscription. This include two transactions:
            - one to accept the Terms of Service that adds your wallet address to the Allowlist, and
            - the other to create your Functions Subscription on-chain.

        Take a note of your Subscription Id as you will need it when using Chainlink Functions programmatically.

        Once a Functions Subscription is created you can manage it from the UI.

    </br>

2.  Please add at least 3 LINK to your subscription to run this project's code. This can be done from the ACTIONS button when your wallet is connected.
    </br>
