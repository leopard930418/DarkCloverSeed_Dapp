const logger = store => next => action => {
    // console.info('dispatching', action)
    let result = next(action)
    // console.log('next state', store.getState())
    return result
  }
  
  export default logger