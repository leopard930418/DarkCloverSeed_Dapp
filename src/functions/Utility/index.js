import { setNftID, setRewardRates, setStakeData, setUnStakeData, setStakeStatus } from '../../store/actions';

const axios = require("axios");

export const initRateRewards = async (dispatch) => {
    const rewardData = await window.seeds_stake.readRewardRates()
    const data = {
        fieldCarbon: rewardData.fieldCarbon / 10 ** 18,
        fieldDiamond: rewardData.fieldDiamond / 10 ** 18,
        fieldPearl: rewardData.fieldPearl / 10 ** 18,
        fieldRuby: rewardData.fieldRuby / 10 ** 18,
        yardCarbon: rewardData.yardCarbon / 10 ** 18,
        yardDiamond: rewardData.yardDiamond / 10 ** 18,
        yardPearl: rewardData.yardPearl / 10 ** 18,
        yardRuby: rewardData.yardRuby / 10 ** 18,
        potCarbon: rewardData.potCarbon / 10 ** 18,
        potDiamond: rewardData.potDiamond / 10 ** 18,
        potPearl: rewardData.potPearl / 10 ** 18,
        potRuby: rewardData.potRuby / 10 ** 18,
    }

    dispatch(setRewardRates(data))
}

export const getMintedTokenURI = async () => {
    const uri = await window.seeds_controller.readMintedTokenURI()
    let image = ''
    await axios.get(uri)
        .then(function(res) {
             image = res.data.image
        }).catch((err)=>{
            console.log( err, "err" )
        })
    return image
}
export const getTokenInfos = async (address, isStaked, dispatch, rewardData) => {
    let result = [];
    let fieldNFT = [];
    let yardNFT = [];
    let potNFT = [];
    let ids = [];
    if (isStaked) {
        ids = await window.seeds_stake.stakedTokensByOwner(address);
    } else {
        ids = await window.seeds_nft.getCSNFTsByOwner(address);
    }

    dispatch(setNftID(ids))    

    let metadata = [];

    for (let id of ids) {
        var tokenUri = await window.seeds_nft.tokenURI(id);
        await axios.get(tokenUri)
            .then(function (response) {
                metadata.push({info: response.data, tokenId: id});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    var fieldNFTData = [];
    for (let data of metadata) {
        const tname = data.info.name;
        if (tname.indexOf("Field") > -1) {
            fieldNFT.push(data);
        } else if (tname.indexOf("Yard") > -1) {
            yardNFT.push(data);
        } else if (tname.indexOf("Pot") > -1) {
            potNFT.push(data);
        } else {
            console.log(tname);
        }
    }

    for (let field of fieldNFT) {
        let price1 = ''
        let price2 = ''
        if (field.info.price == "Diamond") {
            price1 = `${rewardData.fieldDiamond}% DAILY REWARDS`
            price2 = `${rewardData.fieldDiamond} DSEED$`
        } else if (field.info.price == "Carbon") {
            price1 = `${rewardData.fieldCarbon}% DAILY REWARDS`
            price2 = `${rewardData.fieldCarbon} DSEED$`
        } else if (field.info.price == "Pearl") {
            price1 = `${rewardData.fieldPearl}% DAILY REWARDS`
            price2 = `${rewardData.fieldPearl} DSEED$`
        } else if (field.info.price == "Ruby") {
            price1 = `${rewardData.fieldRuby}% DAILY REWARDS`
            price2 = `${rewardData.fieldRuby} DSEED$`
        }
        
        fieldNFTData.push({tokenId: field.tokenId, picture: field.info.image, price1: price1, price2: price2 })
    }
    let fieldData = { title: "DARKFIELD",
                     color: "red", 
                     quant: fieldNFT.length,
                     data: fieldNFTData
                    };

    var yardNFTData = [];
    for (let yard of yardNFT) {
        let price1 = ''
        let price2 = ''
        if (yard.info.price == "Diamond") {
            price1 = `${rewardData.yardDiamond * 10}% DAILY REWARDS`
            price2 = `${rewardData.yardDiamond} DSEED$`
        } else if (yard.info.price == "Carbon") {
            price1 = `${rewardData.yardCarbon * 10}% DAILY REWARDS`
            price2 = `${rewardData.yardCarbon} DSEED$`
        } else if (yard.info.price == "Pearl") {
            price1 = `${rewardData.yardPearl * 10}% DAILY REWARDS`
            price2 = `${rewardData.yardPearl} DSEED$`
        } else if (yard.info.price == "Ruby") {
            price1 = `${rewardData.yardRuby * 10}% DAILY REWARDS`
            price2 = `${rewardData.yardRuby} DSEED$`
        }
        yardNFTData.push({tokenId: yard.tokenId, picture: yard.info.image, price1: price1, price2: price2 })
    }
    let yardData = { title: "DARKYARD",
                        color: "gray", 
                        quant: yardNFTData.length,
                        data: yardNFTData
                    };

    var potNFTData = [];
    for (let pot of potNFT) {
        let price1 = ''
        let price2 = ''
        if (pot.info.price == "Diamond") {
            price1 = `${rewardData.potDiamond * 100}% DAILY REWARDS`
            price2 = `${rewardData.potDiamond} DSEED$`
        } else if (pot.info.price == "Carbon") {
            price1 = `${rewardData.potCarbon * 100}% DAILY REWARDS`
            price2 = `${rewardData.potCarbon} DSEED$`
        } else if (pot.info.price == "Pearl") {
            price1 = `${rewardData.potPearl * 100}% DAILY REWARDS`
            price2 = `${rewardData.potPearl} DSEED$`
        } else if (pot.info.price == "Ruby") {
            price1 = `${rewardData.potRuby * 100}% DAILY REWARDS`
            price2 = `${rewardData.potRuby} DSEED$`
        }
        potNFTData.push({tokenId: pot.tokenId, picture: pot.info.image, price1: price1, price2: price2 })
    }
    let potData = { title: "DARKPOT",
                        color: "white", 
                        quant: potNFTData.length,
                        data: potNFTData
                    };


    result.push(fieldData)
    result.push(yardData)
    result.push(potData)

    if (isStaked) {
        dispatch(setStakeData(result))    
    } else {
        dispatch(setUnStakeData(result))
    }

    return result;
}


export const getStatusInfos = async (dispatch) => {
    let result = []
    let totalCloverFieldMinted = await window.seeds_controller.totalCloverFieldMinted();
    let totalCloverYardMinted = await window.seeds_controller.totalCloverYardMinted();
    let totalCloverPotMinted = await window.seeds_controller.totalCloverPotMinted();

    let totalCloverFieldsStaked = await window.seeds_stake.totalStakedCloverFields();
    let totalCloverYardsStaked = await window.seeds_stake.totalStakedCloverYards();
    let totalCloverPotsStaked = await window.seeds_stake.totalStakedCloverPots();

    let fieldStatusData = { title: `DARK `,
                            subTitle: "FIELD",
                            minted: totalCloverFieldMinted,
                            mintedSlash: "/1,000",
                            STAKED: totalCloverFieldsStaked,
                        };

    let yardStatusData = { title: `DARK `,
                            subTitle: "YARD",
                            minted: totalCloverYardMinted,
                            mintedSlash: "/10,000",
                            STAKED: totalCloverYardsStaked,
                        };

    let potStatusData = { title: `DARK `,
                            subTitle: "POT",
                            minted: totalCloverPotMinted,
                            mintedSlash: "/100,000",
                            STAKED: totalCloverPotsStaked,
                        };

    result.push(fieldStatusData);
    result.push(yardStatusData);
    result.push(potStatusData);

    dispatch(setStakeStatus(result))    
                           
    return result;
}


export const getStakedNum = async(address) => {
    let stakedNum = await window.seeds_stake.totalDepositedTokens(address);
    return stakedNum;
}

export const getUnStakedNum = async(address) => {

    let unStakedNum = await window.seeds_nft.balanceOf(address);

    return unStakedNum;
}

export const waterLandFunc = async () => {
    await window.seeds_stake.water();
}

export const harvestFunc = async () => {
    await window.seeds_stake.claimDivs();
}

export const unstakeFunc = async (ids) => {
    await window.seeds_stake.unstake(ids);
}

export const stakeFunc = async (ids) => {
    await window.seeds_stake.stake(ids);
}

export const getPassedTime = async (acc) => {
    const passedTime = await window.seeds_stake.passedTime(acc)
    return passedTime
}

export const getRewardEstimate = async (acc) => {
    let rewardArray = []
    let reward = await window.seeds_stake.estimateRewards(acc)
    console.log("reward", reward);
    reward = parseInt(reward /(10 ** 15))
    for (let i = 0; i < 7; i++){
        rewardArray[i] = reward % 10
        reward = parseInt(reward/10)
    }
    return rewardArray
}

export const getBalance = async (acc) => {
    let balanceArray = []
    let balance = await window.seeds_token.balanceOf(acc)
    balance = parseInt(balance /(10 ** 18))
    for (let i = 0; i < 8; i++){
        balanceArray[i] = balance % 10
        balance = parseInt(balance/10)
    }
    return balanceArray
}

export const getMintedPotionURI = async() => {
    const uri = await window.seeds_potion.readMintedPotionURI()
    let image = ''
    await axios.get(uri)
        .then(function(res) {
             image = res.data.image
        }).catch((err)=>{
            console.log( err, "err" )
        })
    return image
}

//function for Alchemist
export const darkPotionAmount = async(acc) => {
    let amtArray = []
    let amt = await window.seeds_potion.normalPotionAmount(acc);
    for (let i = 0; i < 3; i++){
        amtArray[i] = amt % 10
        amt = parseInt(amt/10)
    }
    return amtArray;
}

export const poorPotionAmount = async(acc) => {
    let amtArray = []
    let amt = await window.seeds_potion.poorPotionAmount(acc);
    for (let i = 0; i < 3; i++){
        amtArray[i] = amt % 10
        amt = parseInt(amt/10)
    }
    return amtArray;
}
