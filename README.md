# 🌙 CAW Frontend 
<p align="center">
  <a href="https://caw.is">
      <img src="public/assets/tokens/caw.png" height="128">
  </a>  
<br>
<br>
</p>

# About CAW - A Hunters Dream


## 📦 Environments
| Name            | Link                                |
| --------------- | ----------------------------------- |
| Mainnet         | Not yet                 |
| Alpha Test UI         | https://teh-eyes.vercel.app/         |

## Getting Started

Create an .env file (be aware that this file is not tracked by git) and add the following:

```bash
ALCHEMY_API_KEY=SOME-STRING-OF-CHARS
INFURA_API_KEY=SOME-STRING-OF-CHARS
JSON_RPC_URL="https://rpc.builder0x69.io"
NETWORK="goerli"

```
> INFURA_API_KEY : Make sure to create a WEB3 API (Formely Ethereum) project on Infura and add the API key here.

then run the following commands:

```sh
yarn install

# Development
yarn dev

# Production
yarn build
yarn start
```
and visit http://localhost:8082

## Contributing
Would you like to contribute to this project?

This project is open source and welcomes contributions. We focus layer on the CAW Manifesto. We are in the early stages of a Social Clearing house; read more about it [here](https://caw.is/).

We are looking for people who want to contribute to the project, not just the code. Join us on [Telegram](https://t.me/cawbuilders)


Regarding the code, we invite you to read this project's [CONTRIBUTING](docs/CONTRIBUTING.md) guidelines.

## Recommended extensions
 - [BetterComments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
 - [GitLents](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
 - [ENV](https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env)

## Built with
 - [TypeScript](https://www.typescriptlang.org/)
 - [Next.js](https://nextjs.org/)
 - [Chakra UI](https://chakra-ui.com/)
 - [Ethers.js](https://docs.ethers.io/v5/)
 - [Wagmi](https://wagmi.sh/)
 - [RainbowKit](https://www.rainbowkit.com/)

## Next Steps
- [ ] Add more documentation
- [ ] Add other guidelines
