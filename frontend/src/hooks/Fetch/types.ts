import { 
    FetchData, 
    FetchMethods, 
    FetchResult, 
    FetchUrl
} from "@/types/Fetch"

interface BasicFetchParams<T> {
    url         : FetchUrl,
    method?     : FetchMethods,
    data?       : FetchData,
    output?     : 'json' | 'blob',
    onSuccess?  : (data : FetchResult<T> | T) => any,
    onFailed?   : (error : Error) => any,
    onComplete? : () => any,
}
export type BasicFetch = <T = any> (params : BasicFetchParams<T>) => AbortController

interface PromiseFetchParams {
    url     : FetchUrl,
    method? : FetchMethods,
    data?   : FetchData
}
type PromiseFetchReturn     = ReturnType<typeof fetch>
export type PromiseFetch    = (params: PromiseFetchParams) => PromiseFetchReturn

export type useFetchType = () => {
    Basic   : BasicFetch
    Promise : PromiseFetch
}