import { SET_THEME, SET_LANGUAGE } from './settingsActions';

const initialState = {
  theme: 'light',
  language: 'en'
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};

export default settingsReducer;
