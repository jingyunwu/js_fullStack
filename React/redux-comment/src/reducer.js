/**
 * [
 * {userName: '', conent: ''}
 * ]
 */
export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      const { userName, conent } = action;
      return [{ userName, conent }, ...state]
     default: 
      return state; 
  }
}