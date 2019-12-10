import {ActionTypes} from './actions'

const uiState = {
    drawerOpen: false,
    pageTitle: "Today",
    showProgress: false,
    date: null
}


const uiReducer = (state = uiState, action) => {
    switch(action.type) {
        case ActionTypes.OPEN_DRAWER:
            return {
                ...state,
                drawerOpen: true
            };
        case ActionTypes.CLOSE_DRAWER:
            return {
                ...state,
                drawerOpen: false
            };
        case ActionTypes.CHANGE_PAGE_TITLE:
            return {
                ...state,
                pageTitle: action.title
            }
        case ActionTypes.SHOW_PROGRESS:
            return {
                ...state,
                showProgress: true
            }
        case ActionTypes.CLOSE_PROGRESS:
            return {
                ...state,
                showProgress: false
            }
        case ActionTypes.SET_DATE:
            return {
                ...state,
                date: action.date
            }
        default:
            return state
        
    }
}

export default uiReducer;



