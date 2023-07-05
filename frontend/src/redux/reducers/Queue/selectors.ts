import { Store } from "@/redux/store/types";
import { QueueObject } from "./types";

export const getQueue = (state: Store) : QueueObject => state.Queue

export const isProcessing = (state : Store, id : number | undefined) => typeof id != 'undefined' && state.Queue.processing == id;

export const isQueueFull = (state : Store) : boolean => state.Queue.queued.length >= state.Queue.max;

export const isQueueExpired = (state : Store) : boolean => {
    const incomplete = state.Queue.queued.filter(item => !item.completed).length;
    const now = (new Date()).getTime();

    return (
        incomplete > 0
        &&
        now > state.Queue.expire
    )
}

export const queueNumber = (state : Store) : number => {
    const queue = state.Queue.queued;
    
    if(!queue.length) {
        return 0;
    }

    const index = queue.length - 1;

    return queue[index].id + 1;
}