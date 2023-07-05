namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_API_URL : string,
        NEXT_PUBLIC_CREDENTIALS : 'include' | 'omit' | 'same-origin',
        NEXT_PUBLIC_PERSIST_KEY : string,
    }
}