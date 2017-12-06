import {combineReducers} from'redux';
import CarsReducers from './car';
import ModelReducers from'./model';

const allReducers = combineReducers({
    carse:CarsReducers,
    model: ModelReducers,

});

export default allReducers