const ApexReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SERVERS':
      return {
        ...state,
        servers: action.payload,
        loading: false,
      }
    case 'GET_PLAYER':
      return {
        ...state,
        player: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'CLEAR_PLAYER':
      return {
        ...state,
        player: {},
      }
    default:
      return state
  }
}

export default ApexReducer
