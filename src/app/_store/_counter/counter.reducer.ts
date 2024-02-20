import { createReducer, on } from "@ngrx/store";
import { customValueChange, decrement, increment, reset } from "./counter.actions";
// import { initialState } from "./counter.state";}

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state)=>state+1),
    on(decrement, (state)=>state-1),
    on(reset, (state)=>0),
    on(customValueChange, (state, action)=> action.actionType == 'add' ? state+action.value : state-action.value)
)