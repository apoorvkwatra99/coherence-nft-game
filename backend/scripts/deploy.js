const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ['Em', 'Kevin', 'Lee', 'Mike', 'Beth', 'Hugh', 'Laurie', 'Amir'], // Names
        ['https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmXzxK7dGT6amCPTRyy7Lp1nxvN4qZ4mtuAr2eBx2G8tLn',
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmYntaaWnBRf5mMTdvN2L9smSTvxDSjqqc3GaibowhMeLh',
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmX2L1VuwhhrrKGE2AFJxYTQhKenUxeDtomeDQQ3N38JGq',
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmTSWQpkaa8AzJAvoLhn1DH7exinm5h8C9LeMxnxWNXUy7',
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmWTsZG2CtPkj7ziPkUuZ7ddTKK7hQdGR6Zt5Ub121Lk2J',
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmU1Ve1YskzgwcsbAC8U1W6Q8oEAKDzzgxJrS8NfpuGVQW',
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmQyQCpuBasvtcZTU6X4egjm1bFtJQMVSDck1DyYCrjv5S',
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmYkKQmiDvCaepRG15t8BQAV3etLWtuCR4sWJRJUYg141w'], // Images
        [400, 350, 300, 250, 200, 150, 100, 50], // HPs
        [20, 25, 30, 35, 30, 40, 45, 50], // Attack Damages
        'Miller\'s Comet', // Boss Name
        'https://copper-impressive-gecko-645.mypinata.cloud/ipfs/QmRnLwN84JtHyPZQTbue364WNcuxbUtGUCDWpP7mvLW5wA', // Boss Image
        10000, // Boss HP
        50 // Boss Attack Damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
};
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();