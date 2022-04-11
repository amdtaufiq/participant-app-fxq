import { combineReducers } from 'redux'
import participants from './participants'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    participants,
    form: formReducer
})