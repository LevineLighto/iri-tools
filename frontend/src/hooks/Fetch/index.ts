import { useCallback } from "react";
import { BasicFetch, PromiseFetch, useFetchType } from "./types";
import { ProcessURL } from "@/helpers/Fetch/ProcessUrl";
import { BlobFetch, JsonFetch } from "@/helpers/Fetch";
import { FetcherKey } from "@/helpers/Fetch/Types";
import { FetchResult } from "@/types/Fetch";

export const useFetch : useFetchType = () => {
    const Promise = useCallback<PromiseFetch>(({
        url,
        method = 'get',
        data
    }) => {
        const {
            url     : target,
            data    : body,
            method  : Method
        } = ProcessURL({
            url     : url,
            data    : data,
            method  : method
        });

        return fetch(target, {
            method  : Method,
            body    : body,
            headers : {
                accept  : 'application/json'
            },
            cache       : 'reload',
            credentials : 'include'
        });
    }, []);

    const Basic = useCallback<BasicFetch>(({
        url ,
        method      = 'get',
        data,
        output      = 'json',
        onSuccess,
        onFailed,
        onComplete,
    }) => {
        const {
            url     : target,
            data    : body,
            method  : Method
        } = ProcessURL({
            url     : url,
            data    : data,
            method  : method
        });

        const aborter = new AbortController();

        let fetcher : any;
        const fetcherParams : FetcherKey = [
            target, {
                method  : Method,
                body    : body,
                headers : {
                    accept  : 'application/json'
                },
                cache       : 'reload',
                credentials : 'include'
            }
        ]
        if(output == 'blob') {
            fetcher = BlobFetch(fetcherParams, aborter.signal);
        } else {
            fetcher = JsonFetch(fetcherParams, aborter.signal);
        }

        fetcher.then((data : FetchResult<any>) => {
            if(typeof onComplete == 'function') {
                onComplete();
            }

            if(!data) {
                return;
            }

            // toast.success(data.message);

            if(typeof onSuccess == 'function') {
                onSuccess(data);
            }
        }).catch((error : Error) => {
            console.error(error);
            // toast.failed(error.message);

            if(typeof onFailed == 'function') {
                onFailed(error);
            }
        });

        return aborter;
    }, []);

    return {
        Basic,
        Promise,
    }
}