import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
 
 //  Create WalletConnect Provider
 const providerOptions = {
    /* See Provider Options Section */
    // Example with injected providers
    injected: {
      display: {
        name: "MetaMask",
      },
      package: null
    },
    // Example with WalletConnect provider
    walletconnect: {
      display: {
        name: "Mobile",
      },
      package: WalletConnectProvider, // required
      options: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
      }
    },
    binancechainwallet: {
      package: true
    }
  };

  let web3Modal
  if (typeof window !== 'undefined')
    web3Modal = new Web3Modal({
        network: "testnet", // optional
        // network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
  });

  export default web3Modal