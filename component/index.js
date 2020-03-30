import count from './counter'
import logged from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers ({
    counter: count,
    isLogged: logged
})

export default allReducers