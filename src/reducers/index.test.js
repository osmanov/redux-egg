import test from 'ava';
import {counterReducer} from './index.js';
import {createStore} from 'redux';
import sinon from 'sinon';

const store=createStore(counterReducer);
var callback = sinon.spy();
store.subscribe(callback);

test(t => {
  t.is(store.getState(),0);
  store.dispatch({type:'INCREMENT'});
  t.true(callback.calledOnce);
  t.is(store.getState(),1);
});
