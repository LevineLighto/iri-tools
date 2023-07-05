import { LooseObject } from "@/types/Object";
import { ProcessURLType } from "./types";

export const ProcessURL : ProcessURLType = ({
    url,
    page    = 1,
    limit   = 1,
    data    = {},
    method  = 'get',
}) => {
    let target: URL;

    if(url instanceof URL) {
        target = url;
    } else if (url.startsWith('http')) {
        target = new URL(url);
    } else {
        target = new URL(`${process.env.NEXT_PUBLIC_API_URL}/${url}`);
    }

    const Method = method.toLowerCase();

    if(Method == 'get') {
        if(page) {
            target.searchParams.append('page', page.toString());
        }

        if(limit) {
            target.searchParams.append('limit', limit.toString());
        }

        if(data instanceof FormData) {
            for (const [key, value] of data.entries()) {
                target.searchParams.append(key, <string> value);
            }

            return {
                url     : target.toString(),
                method  : 'get',
            }
        }

        if(data && Object.keys(data).length) {
            for(const key in data) {
                const item = data[key];

                if(Array.isArray(item)) {
                    item.forEach((element, index) => {
                        target.searchParams.append(`${key}[${index}]`, element);
                    });
                } else if (typeof item == 'object') {
                    for (const name in item) {
                        const value = item[name];
                        target.searchParams.append(`${key}[${name}]`, value);
                    }
                } else {
                    target.searchParams.append(key, item);
                }
            }

            return {
                url     : target.toString(),
                method  : 'get'
            }
        }

        return {
            url     : target.toString(),
            method  : 'get'
        }
    }
    
    let modified : LooseObject = {};

    if(data && !(data instanceof FormData)) {
        modified = {...data};
    }

    if(['put', 'delete'].includes(Method)) {
        if(data instanceof FormData) {
            data.append('_method', method);
        } else {
            modified['_method'] = method;
        }
    }

    if(data instanceof FormData) {
        return {
            url     : target.toString(),
            data    : data,
            dataType: 'FormData',
            method  : 'post',
        }
    }

    return {
        url     : target.toString(),
        data    : JSON.stringify(modified),
        dataType: 'Json',
        method  : 'post',
    }
}