import axios from 'axios'

const SET_SINGLE_CABLE = 'SET_SINGLE_CABLE'

export const setSingleCable = cable => {
  return {
    type: SET_SINGLE_CABLE,
    cable: cable
  }
}

export const fetchSingleCable = cableId => async dispatch => {
  try {
    const response = await axios.get(`/api/cable/${cableId}`)
    const singleCable = response.data
    dispatch(setSingleCable(singleCable))
  } catch (error) {
    console.log('THIS IS ERROR IN FETCH SINGLE CAble', error)
  }
}

export default function singleCableReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_CABLE:
      return action.cable
    default:
      return state
  }
}
