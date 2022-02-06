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
    case 'SET_PLAYER':
      return {
        ...state,
        currentPlayer: action.payload,
      }
    case 'CLEAR_PLAYER':
      return {
        ...state,
        player: {},
        currentPlayer: '',
      }
    case 'GET_MAP':
      return {
        ...state,
        mapRotation: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default ApexReducer
