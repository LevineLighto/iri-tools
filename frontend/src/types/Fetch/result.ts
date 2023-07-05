import { LooseObject } from "../Object"

export type FetchResult<Type> = {
    message : string,
    content?: Type
}

export type FetchError = {
    message : string
}

export type Paginated<T = LooseObject> = {
    pages  : number,
    data   : T[],
}