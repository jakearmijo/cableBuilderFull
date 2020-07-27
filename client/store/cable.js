import axios from 'axios'
import chalk from 'chalk'

//ACTION TYPE
const SET_CABLES = 'SET_CABLES'
const ADD_NEW_CABLE = 'ADD_NEW_CABLE'
const REMOVE_CABLE = 'REMOVE_CABLE'
const UPDATE_CABLE = 'UPDATE_CABLE'

const cablesState = []

//ACTION CREATOR
export const setCables = cables => {
  return {
    type: SET_CABLES,
    cables: cables
  }
}

export const addNewCable = cable => {
  return {type: ADD_NEW_CABLE, cable}
}

export const removeCable = cableId => {
  return {
    type: REMOVE_CABLE,
    cableId
  }
}

export const updateCable = cable => {
  return {
    type: UPDATE_CABLE,
    cable
  }
}

//THUNKCREATORS
export const fetchCables = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cable')
    dispatch(setCables(data))
  } catch (error) {
    console.log('ERROR IN FETCH CABLES THUNK', error)
  }
}

export const addCable = cable => async dispatch => {
  try {
    const {data} = await axios.post('/api/cables', cable)
    dispatch(addNewCable(data))
  } catch (error) {
    console.log(chalk.redBright('ERROR IN ADD CABLES THUNK', error))
  }
}

export const deleteCable = cableId => async dispatch => {
  try {
    await axios.delete(`/api/cable/${cableId.id}`)
    dispatch(removeCable(cableId))
  } catch (error) {
    console.log(chalk.redBright('ERROR IN delete Cable THUNK', error))
  }
}

export const updateCableThunk = cable => async dispatch => {
  try {
    const {data} = await axios.put(`/api/cable/${cable.id}`, cable)
    dispatch(updateCable(data))
  } catch (error) {
    console.log(chalk.redBright('ERROR IN Update Cable Thunk', error))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function(state = cablesState, action) {
  switch (action.type) {
    case SET_CABLES:
      return action.cables
    case ADD_NEW_CABLE:
      return [...state, action.cables]
    case REMOVE_CABLE:
      return state.filter(cable => cable.id !== action.cableId.id)
    case UPDATE_CABLE:
      return action.cables
    default:
      return state
  }
}
