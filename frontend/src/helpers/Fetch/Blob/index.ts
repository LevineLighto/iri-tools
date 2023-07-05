import { FetcherKey } from "../Types"

export const BlobFetch = async (key: FetcherKey, signal? : AbortSignal) => {
    const response = await fetch(key[0], { ...key[1], signal: signal });

    if(response.ok) {
        return response.blob();
    }

    const error     = new Error();
    error.cause     = response.status;
    error.message   = (await response.json()).message;

    throw error;
}