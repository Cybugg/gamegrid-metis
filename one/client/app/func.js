
import Web3 from "web3";
import abiJSON from "../abi.json";

var contract = require("@truffle/contract");


export const load = async () =>{
    await loadWeb3();
   const {addressAccount} = await loadAccount();
   const {_ggContract} = await loadContract();
   return {addressAccount,_ggContract}
};
const loadTasks = async (contract) =>{

}
// Contract
const loadContract = async () =>{
     // Create a Web3 instance
     const web3 = new Web3(window.ethereum);
    const ggContract = contract(abiJSON);
    ggContract.setProvider(web3.eth.currentProvider);
    const _ggcontract = await ggContract.deployed();
    const tasks = await loadTasks(contract);

    return {_ggContract}
};

// Account
const loadAccount = async () => {

    // Create a Web3 instance
    const web3 = new Web3(window.ethereum);
    const addressAccount = await web3.eth.getCoinbase();
   return addressAccount;
};



// The web3
const loadWeb3 = async ()=>{


     // Modern dapp browsers...
     if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            Web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        Web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
};