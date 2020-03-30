import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from '../action/action'

function Redux ()   {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
        return (
        <div>
         <hr/>
         <h2>This is Redux page</h2>
         <hr/>
            <h4>Counter {counter}</h4>
            <button onClick={() => dispatch(increment())}>+</button>  &nbsp; 
            <button onClick={() => dispatch(decrement())}>-</button> 
        <hr/>
           {isLogged ? <h3>Value</h3> : ''}
         </div>
        );
    
}
export default Redux;