import { combineReducers } from 'redux';
import { isWalletConnect, coinbaseAddress, isCorrectNet, NFT_ID, TIMER, REWARD_RATES, STAKE_DATA, UNSTAKE_DATA, STAKE_STATUS } from './reducers';

const rootReducer = combineReducers({
	isWalletConnect,
    isCorrectNet,
    coinbaseAddress,
    NFT_ID,
    TIMER,
    REWARD_RATES,
    STAKE_DATA,
    UNSTAKE_DATA,
    STAKE_STATUS
})

export default rootReducer;