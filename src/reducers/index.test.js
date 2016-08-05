import test from 'ava';
import {counterReducer,addCounter,incrementCounter} from './index.js';
import {createStore} from 'redux';
import sinon from 'sinon';
import {Map,List,is} from 'immutable';

const store=createStore(counterReducer);
var callback = sinon.spy();
store.subscribe(callback);

test('counterReducer works',t => {
  t.is(store.getState(),0);
  store.dispatch({type:'INCREMENT'});
  t.true(callback.calledOnce);
  t.is(store.getState(),1);
});


test('addCounter is immutable',t=>{
  const listBefore=List(['before']);
  t.is(is(listBefore,listBefore.push(['add'])),false);
  t.is(listBefore.last(),'before');
});


test('removeCounter is immutable',t=>{
  const listBefore=List(['before']);
  t.is(is(listBefore.delete(0),listBefore),false);
  t.is(listBefore.last(),'before');
});

test('increment counter',t=> {
  let listBefore = List([1, 3, 5]);
  t.is(incrementCounter(listBefore,1).get(1),4);
});