import { ChangeEventHandler } from "react";

export type ChangeHandler<T = HTMLInputElement> = ChangeEventHandler<T>

export type InputHandler = (value : string | number) => any;