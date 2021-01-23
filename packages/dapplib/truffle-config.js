require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift reflect sad arrow good end army genius'; 
let testAccounts = [
"0xa49a3ec4c9e7c7b50ffaa08c91aecbd263220cfcbd49c78f9bd1792020638158",
"0xa11d2b1d33c0a8799ccc294d534df416661b4acec530eab9eed77beee761bd7c",
"0x517b7bcf2086316a57f06e39008c846d225b8df8fcf40d6fa0caeb4faaf316f4",
"0xe1810806d685e187e2e0c82644f02db100c6e8f83f7020849a3667098fe2d353",
"0x40d32a3b4ee62754a81b165a7e19478ca2b01cbc0b4b65686e67c613f16e1fbe",
"0xc8c0d61bb52c0bc412b4b996293eb4d237840ecabe77e4d76039626a1d8bb57d",
"0xd833c2693148c34737fb50d3ea2c687d6b43fb6e0c54d9f94e34084e9880deb2",
"0x1906bfa59738b0dfb810ab3272f054013609f16800813b9612fc478e1b0aa2e5",
"0x5d0955101a93e66745edc9b73497563c90cae8bca2d77ae6deb03a91d9a1cbc0",
"0xf51c1c40ba1efab6a3a1b784f92d327e6c6825f26677836eeaf74002029cd102"
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
