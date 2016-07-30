import {Map,List} from 'immutable';

export function counter(state,action){
  if(action.type=='INCREMENT'){
    state++;
  }else if(action.type=='DECREMENT'){
     state--;
  }
  return state;
}

