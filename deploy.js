const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode, } = require('./compile');

const provider = new HDWalletProvider('canvas evidence raise battle wish syrup amount merry top winner seek bicycle','https://rinkeby.infura.io/YdAPNjKPMKeg39J3uLI2');
const web3 = new Web3(provider);

async function deploy() {
    let accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, })
        .send({ gas: '1000000', from: accounts[0]})
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
}
deploy();