import { isMobile } from "react-device-detect";
import Web3 from "web3";
import { config } from "../../const";
import CloverDarkSeedController from "../../const/abis/clover_dark_seed_controller_abi.json";
import CloverDarkSeedNFT from "../../const/abis/clover_dark_seed_nft_abi.json";
import CloverDarkSeedStake from "../../const/abis/clover_dark_seed_stake_abi.json";
import CloverDarkSeedToken from "../../const/abis/clover_dark_seed_token_abi.json";
import CloverDarkSeedPotion from "../../const/abis/clover_dark_seed_potion_abi.json";

let { web3 } = window
// Function to get Accounts
export const getCoinbase = async () => {
    //  Get Accounts
    const accounts = isMobile? await web3.eth.getAccounts() : await window.ethereum.request({ method: 'eth_requestAccounts' })
    //  Get Chain Id
    // const chainId = await web3.eth.chainId();
    //  Get Network Id
    // const networkId = await web3.eth.net.getId();
    return accounts.length > 0 ? accounts[0] : ""
}

// Function to get Contract
export const getContract = async (key) => {
    let ABI, address
    if (key === "CloverDarkSeedToken") {
        ABI = CloverDarkSeedToken.abi
        address = CloverDarkSeedToken.contractAddress
    } else if (key === "CloverDarkSeedStake") {
        ABI = CloverDarkSeedStake.abi
        address = CloverDarkSeedStake.contractAddress
    } else if (key === "CloverDarkSeedNFT") {
        ABI = CloverDarkSeedNFT.abi
        address = CloverDarkSeedNFT.contractAddress
    } else if (key === "CloverDarkSeedController") {
        ABI = CloverDarkSeedController.abi
        address = CloverDarkSeedController.contractAddress
    } else if (key === "CloverDarkSeedPotion") {
        ABI = CloverDarkSeedPotion.abi
        address = CloverDarkSeedPotion.contractAddress
    }
    
    web3 = new Web3(window.ethereum)
    let contract = new web3.eth.Contract(ABI, address, {from: await getCoinbase()})
    return contract;
}

class CloverDarkSeedTokenContract {
    async transfer(to, amount) {
        let contract = await getContract("CloverDarkSeedToken")
        return (await contract?.methods.transfer(to, amount).send({
            from: await getCoinbase(),
            gasPrice: config.default_gasprice_gwei*1e9,
            gas: config.default_gas_amount,
        }))
    }
    async totalSupply() {
        let contract = await getContract("CloverDarkSeedToken")
        return (await contract?.methods.totalSupply().call())
    }
    async approve(spender, amount) {
        let contract = await getContract("CloverDarkSeedToken")
        return (await contract?.methods.approve(spender, amount).send({
            from: await getCoinbase(),
            gasPrice: config.default_gasprice_gwei*1e9,
            gas: config.default_gas_amount,
        }))
    }
    async balanceOf(address) {
        let contract = await getContract("CloverDarkSeedToken")
        return (await contract?.methods.balanceOf(address).call())
    }
}

class CloverDarkSeedStakeContract {
	constructor() {
		CloverDarkSeedStake.callFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedStake")
				return (await contract?.methods[fn_name](...args).call())
			}
		});

		CloverDarkSeedStake.transactionFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedStake")
				return (await contract?.methods[fn_name](...args).send({
                    from: await getCoinbase(),
                    gasPrice: config.default_gasprice_gwei*1e9,
                    gas: config.default_gas_amount,
                }))
			}
		});
	}
}

class CloverDarkSeedNFTContract {
	constructor() {
		CloverDarkSeedNFT.callFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedNFT")
				return (await contract?.methods[fn_name](...args).call())
			}
		});

		CloverDarkSeedNFT.transactionFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedNFT")
				return (await contract?.methods[fn_name](...args).send({
                    from: await getCoinbase(),
                    gasPrice: config.default_gasprice_gwei*1e9,
                    gas: config.default_gas_amount,
                }))
			}
		});
	}
}

class CloverDarkSeedControllerContract {
	constructor() {
		CloverDarkSeedController.callFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedController")
				return (await contract?.methods[fn_name](...args).call())
			}
		});

		CloverDarkSeedController.transactionFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedController")
				return (await contract?.methods[fn_name](...args).send({
                    from: await getCoinbase(),
                    gasPrice: config.default_gasprice_gwei*1e9,
                    gas: config.default_gas_amount,
                }))
			}
		});
	}
}

class CloverDarkSeedPotionContract {
	constructor() {
		CloverDarkSeedPotion.callFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedPotion")
				return (await contract?.methods[fn_name](...args).call())
			}
		});

		CloverDarkSeedPotion.transactionFunctions.forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("CloverDarkSeedPotion")
				return (await contract?.methods[fn_name](...args).send({
                    from: await getCoinbase(),
                    gasPrice: config.default_gasprice_gwei*1e9,
                    gas: config.default_gas_amount,
                }))
			}
		});
	}
}

window.seeds_token = new CloverDarkSeedTokenContract()
window.seeds_nft = new CloverDarkSeedNFTContract()
window.seeds_controller = new CloverDarkSeedControllerContract()
window.seeds_stake = new CloverDarkSeedStakeContract()
window.seeds_potion = new CloverDarkSeedPotionContract()