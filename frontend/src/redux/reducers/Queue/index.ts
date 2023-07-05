import { QueueSlice } from "./slice";
import {
    getQueue,
    isProcessing,
    isQueueExpired,
    isQueueFull,
    queueNumber,
} from "./selectors";

export const {
    clearQueue,
    setMaxQueue,
    setQueueCompleted,
    queue,
} = QueueSlice.actions;

export {
    getQueue,
    isProcessing,
    isQueueExpired,
    isQueueFull,
    queueNumber,
}

const QueueReducer = QueueSlice.reducer;

export default QueueReducer;