import test from 'ava'
import React from 'react'
import {createStore} from 'redux';
import {shallow, mount} from 'enzyme';
import {counterReducer} from '../../reducers/index.js';
import Counter from './index.js';

test('init value should be 0', t => {
  let store = createStore(counterReducer);
  const wrapper = mount(<Counter value={store.getState()}/>);
  wrapper.setProps({value: store.getState()});
  t.is(wrapper.props().value, 0);
});


test('simulates increment click', t => {
  let store = createStore(counterReducer);
  const wrapper = mount(<Counter value={store.getState()} onIncrement={()=>store.dispatch({type:'INCREMENT'})}/>);
  wrapper.find('button').first().simulate('click');
  wrapper.setProps({value: store.getState()});
  t.is(wrapper.props().value, 1);
});

test('simulates decrement click', t => {
  let store = createStore(counterReducer, 1);
  const wrapper = mount(<Counter value={store.getState()} onDecrement={()=>store.dispatch({type:'DECREMENT'})}/>);
  wrapper.find('button').last().simulate('click');
  wrapper.setProps({value: store.getState()});
  t.is(wrapper.props().value, 0);
});




