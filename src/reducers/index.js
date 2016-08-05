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
};

export const addCounter=(list)=>{
  return list.push(["Hello"]);
};

export const removeCounter=(list,index)=>{
  return list.delete(index);
};


