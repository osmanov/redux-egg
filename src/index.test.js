import test from 'ava';
import {counter} from './index.js';

test(t => {
  t.is(counter(0,{type:'INCREMENT'}),1);
  t.is(counter(1,{type:'INCREMENT'}),2);
});
