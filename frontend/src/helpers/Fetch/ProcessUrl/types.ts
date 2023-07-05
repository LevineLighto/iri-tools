import { FetchMethods } from "@/types/Fetch";
import { LooseObject } from "@/types/Object";

interface ProcessURLParams {
    url     : string | URL,
    page?   : number,
    limit?  : number,
    data?   : LooseObject | FormData
    method? : FetchMethods
}

interface ProcessURLReturn {
    url         : string,
    data?       : FormData | string,
    dataType?   : 'FormData' | 'Json',
    method      : 'get' | 'post'
}

export type ProcessURLType = (
    params: ProcessURLParams
) => ProcessURLReturn