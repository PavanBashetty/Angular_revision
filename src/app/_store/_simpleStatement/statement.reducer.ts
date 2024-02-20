import { createReducer, on } from "@ngrx/store";
import { updateData } from "./statement.actions";


export let initialState = 'Shared data coming from NgRx store';

export const statementReducer = createReducer(
    initialState,
    on(updateData, (state, action)=>state=action.newData)
)