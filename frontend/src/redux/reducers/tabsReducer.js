import * as actionTypes from "../actions/types";


const tabReducers = (state = actionTypes.ALL_TODOS , action) =>{

    switch (action.type) {
        case actionTypes.TOGGLE_TABS:
            return action.selected;
    
        default:
            return state;
    }

}

export default tabReducers;