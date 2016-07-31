import {Map,List} from 'immutable';

export const counterReducer=(state=0,action)=> {
  switch (action.type) {
    case 'INCREMENT':
      return ++state;
    case 'DECREMENT':
      return --state;
    default:
      return state;
  }
}


