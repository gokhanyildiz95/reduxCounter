import {combineReducers} from "redux"
import counterReducer from './counterReducer'
const reducers = combineReducers({
    counterReducer // sadece counterReducer de yazılabilir js aynı isimde olanları 2 kere yazmaya gerek kalmadan atar
});

export default reducers;