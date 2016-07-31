import test from 'ava'
import React from 'react'
import {createStore} from 'redux';
import { shallow, mount } from 'enzyme';
import {counterReducer} from '../../reducers/index.js';
import Counter from './index.js';

test('shallow', t => {
  let store=createStore(counterReducer);
  const value=store.getState()+"";
  const wrapper = shallow(<Counter value={value}/>);
  t.is(wrapper.contains(<h1>0</h1>), true)
});

