import { SET_WALLET_CONNECTION_STATUS
        , SET_COINBASE_ADDRESS
        , SET_NET_STATUS
        , SET_NFT_ID
        , SET_TIMER
        , SET_REWARD
        , SET_STAKE_DATA
        , SET_UNSTAKE_DATA
        , SET_STAKE_STATUS} from "../types";

export const isWalletConnect = ( state = false, action ) => {
    switch (action.type) {
        case SET_WALLET_CONNECTION_STATUS:
            return action.payload;
    
        default:
            return state;
    }
}

export const isCorrectNet = ( state = false, action ) => {
    switch (action.type) {
        case SET_NET_STATUS:
            return action.payload;
    
        default:
            return state;
    }
}

export const coinbaseAddress = (state = '', action) => {
    switch (action.type) {
        case SET_COINBASE_ADDRESS:
            return action.payload
    
        default:
            return state
    }
}

export const NFT_ID = (state = [], action) => {
    switch (action.type) {
        case SET_NFT_ID:
            return action.payload
        default:
            return state
    }
}

export const TIMER = (state = {}, action) => {
    switch (action.type) {
        case SET_TIMER:
            return action.payload
        default:
            return state
    }
}

export const REWARD_RATES = (state = [], action) => {
    switch (action.type) {
        case SET_REWARD:
            return action.payload
        default:
            return state
    }
}

export const STAKE_DATA = (state = [], action) => {
    switch (action.type) {
        case SET_STAKE_DATA:
            return action.payload
        default:
            return state
    }
}

export const UNSTAKE_DATA = (state = [], action) => {
    switch (action.type) {
        case SET_UNSTAKE_DATA:
            return action.payload
        default:
            return state
    }
}

export const STAKE_STATUS = (state = [], action) => {
    switch (action.type) {
        case SET_STAKE_STATUS:
            return action.payload
        default:
            return state
    }
}