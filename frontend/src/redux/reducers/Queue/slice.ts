import { createSlice } from "@reduxjs/toolkit";
import { ClearQueueAction, QueueAction, QueueObject, SetMaxQueueAction, SetQueueCompleted } from "./types";

export const initialState : QueueObject = {
    max     : 5,
    expire  : 0,
    queued  : [],
}

export const QueueSlice = createSlice({
    name        : 'Queue',
    initialState: initialState,
    reducers    : {
        clearQueue : (state, action : ClearQueueAction) => {
            console.log('clear');
            return {
                ...state,
                queued  : [],
                expire  : 0,
            }
        },
        setMaxQueue : (state, action : SetMaxQueueAction) => {
            return {
                ...state,
                max : action.payload
            }
        },
        setQueueCompleted : (state, action: SetQueueCompleted) => {
            const modified = [...state.queued];

            if(!modified.length) {
                return {
                    ...state
                }
            }

            const index = modified.findIndex(item => item.id == action.payload);
            modified[index].completed = true;

            if(index != modified.length - 1) {
                state.processing    = modified[index + 1].id;
            } 
            
            state.queued = modified;
        },
        queue: (state, action : QueueAction) => {
            const modified  = [...state.queued];
            let expire      = state.expire;
            let processing  = state.processing;

            if(!modified.length) {
                const time  = new Date;
                time.setMinutes(time.getMinutes() + 1);
                expire      = time.getTime();
                processing  = action.payload;
            }

            modified.push({
                completed   : false,
                id          : action.payload
            });

            return {
                ...state,
                expire      : expire,
                processing  : processing,
                queued      : modified
            }
        },
    }
})