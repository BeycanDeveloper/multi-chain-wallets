const ethBaseds = [
    'ethereum',
    'bsc',
    'polygon',
    'fantom',
    'xdai',
    'heco',
    'avalanche',
    'arbitrum',
    'celo'
];


class MultiChainWallets {

    provider;

    static instance = (config) => {

        if (!config.network) {
            throw new Error('Network a required paramater!');
        }

        if (typeof config.network == 'object' || ethBaseds.includes(config.network)) {
            let EthWallets = require('@beycandeveloper/eth-wallets');
            this.provider = EthWallets.instance(config);
        } 

        this.provider.detectWallets();

        return this;
    }

    static connectWallet = (adapter) => {
        return this.provider.connectWallet(adapter);
    }

    static getDetectedWallets = (filter) => {
        return this.provider.getDetectedWallets(filter);
    }

    static getSelectedNetwork = () => {
        return this.provider.selectedNetwork;
    }

    static getConnectedWallet = () => {
        return this.provider.connectedWallet;
    }

    static getConnectedAccount = () => {
        return this.provider.connectedAccount;
    }
}

module.exports = MultiChainWallets;