const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ['Em', 'Kevin', 'Lee', 'Mike', 'Beth', 'Hugh', 'Laurie', 'Amir'], // Names
        ['https://www.coherencethemovie.com/wp-content/uploads/2018/09/foxler.jpg',
        'https://www.coherencethemovie.com/wp-content/uploads/2018/09/sterling.jpg',
        'https://www.coherencethemovie.com/wp-content/uploads/2018/09/scafaria.jpg',
        'https://www.coherencethemovie.com/wp-content/uploads/2018/09/brendon.jpg',
        'https://www.coherencethemovie.com/wp-content/uploads/2018/09/gracen.jpg',
        'https://www.coherencethemovie.com/wp-content/uploads/2018/09/armstrong.jpg',
        'https://www.coherencethemovie.com/wp-content/uploads/2018/09/maher.jpg',
        'https://www.coherencethemovie.com/wp-content/uploads/2018/09/manufian.jpg'], // Images
        [400, 350, 300, 250, 200, 150, 100, 50], // HPs
        [20, 25, 30, 35, 30, 40, 45, 50], // Attack Damages
        'Miller\'s Comet', // Boss Name
        'https://cdn.mos.cms.futurecdn.net/zzCKzkAndgXbTKNoKCUqu9-480-80.jpg', // Boss Image
        10000, // Boss HP
        50 // Boss Attack Damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log('Done!');
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