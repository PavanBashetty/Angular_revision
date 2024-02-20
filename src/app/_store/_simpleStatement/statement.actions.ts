import { createAction, props } from "@ngrx/store";


export const updateData = createAction('updateData', props<{newData:string}>())