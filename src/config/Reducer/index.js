import {combineReducers} from 'redux';

const initialState = {
  contacts: null,
  refresh: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        contacts: action.contacts,
      };
    case 'REFRESH':
      return {
        ...state,
        refresh: action.refresh,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  contactsReducer,
});

export default reducer;
