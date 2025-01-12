# Coherence NFT Game

The project can be viewed here: [https://coherence-nft-game.apoorvk.repl.co/](https://coherence-nft-game.replit.app/)

This Buildspace project runs on the Sepolia Test Network. A Metamask wallet with some Ethereum on this test network is all that is needed to test it out! Once a user clicks the link, they can connect their Metamask wallet and then mint a character NFT from the Coherence NFT Collection. Once the NFT has been minted, an alert will provide the user with a link to view their NFT on OpenSea. The user can then use their character NFT to attack the main boss. The different character NFTs have different starting HP and attack damage, and each user is only allowed to mint one character NFT. Users have to work together to defeat the main boss.

# Backend
The backend folder is where all the smart contract code lives. `contracts/MyEpicNFT.sol` contains the contract `MyEpicGame` and has several helper functions like `mintCharacterNFT` and `attackBoss`. This contract mints a character NFT to the relevant user and allows users to attack the main boss. The `scripts/run.js` script was mainly used for testing, and the `scripts/deploy.js` script was used to actually deploy the contract.

# Frontend

The frontend folder contains all the code written on Replit. It builds out the actual web page that is linked at the top of this file and calls the contract in the backend. `src/App.jsx` contains most of the main code to render the page along with some relevant helper functions, and `utils/constants.jsx` contains some important constants. `src/Components/Arena/index.jsx`, `src/Components/LoadingIndicator/index.jsx`, and `src/Components/SelectCharacter/index.jsx` contain code to help render the arena view, the loading indicator, and the select character view, respectively.
