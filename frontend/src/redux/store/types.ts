import { store } from ".";

export type Store       = ReturnType<typeof store.getState>

export type Dispatch    = typeof store.dispatch