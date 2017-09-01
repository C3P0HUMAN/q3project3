import consoles from './consoles';
import games from './games';
import reviews from './Reviews';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    consoles,
    games,
    reviews,
    form: formReducer
});
export default rootReducer;
