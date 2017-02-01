const initialState = {
  checked: 'yo yo man'
};

export default function (state = initialState, action) {
  console.log( action, state ); 
  switch (action.type) {
    case 'CLICK_TAB': 
      return Object.assign( {}, state, {
        checked: 'clicked!!'
      } ) 
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state, displayType: action.displayType,
      };
    default:
  }
  return state;
}
