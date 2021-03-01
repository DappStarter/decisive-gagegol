require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain umbrella guess clinic swift suit'; 
let testAccounts = [
"0x5d71b70b598939c6dfddebd7d5521c67196bddf9f57ad40118bbda823e57c46e",
"0xe3d115d3f96a88f17eb1244a7fd97b09d04de007e2cafadb31c2c2f11b46562e",
"0x093128bf20b29b25f811ee3f17cc74de51c87e23649b01d43bc68234c6016969",
"0x5d49d54b25e14221738f394524126ca7f2baded67d45d10826d7b243de4b1bb3",
"0xfd3d760c24dc98e262709a30fc30288872d035d2d3f3f7309f29ef33265bc926",
"0xe71126328996d46b6df8730ebda9d1b0a7fd9579b46b96ff68c7a9b906359169",
"0xa3f180a13e5a829b37e4344b924737cef2892773be1f79c31f6962261cda3a81",
"0xa3ae523be99442a369fda00c80ba9ffd47592c0fac7050581de9141a27aadaf8",
"0x548184626c17c30fb3d9d61abf8edcfb3c402d28ce6569aa67b7cd5c1b4126c0",
"0x8a6f6e9dff7a075ccb1aafb425a00df33fad9ad0308e054ab8c772c836818f53"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
