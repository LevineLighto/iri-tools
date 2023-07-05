import { ReducerAction } from "../Types"

export interface QueueObject {
    max         : number,
    expire      : number,
    processing? : number,
    queued      : {
        completed   : boolean,
        id          : number,
    } []
}

export type ClearQueueAction = ReducerAction<undefined>

export type SetMaxQueueAction = ReducerAction<number>

export type QueueAction = ReducerAction<number>

export type SetQueueCompleted = ReducerAction<number>