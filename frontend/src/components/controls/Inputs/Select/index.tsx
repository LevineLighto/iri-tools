'use client';

import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { SelectProps } from "./props";
import { ChangeHandler } from "@/types/EventHandlers";
import { Label } from "../Label";
import { BasicInputClasses as Classes } from "../classes";

export const Select : FC<SelectProps> = ({
    name,
    labels,
    label,
    values,
    value,
    onChange,
    id          = '',
    placeholder ='placeholder',
    className   = '',
    ...props
}) => {
    const [val, setVal] = useState(value);

    const handleChange = useCallback<ChangeHandler<HTMLSelectElement>>((event) => {
        const target = event.currentTarget as HTMLSelectElement;
        setVal(target.value);

        if(typeof onChange == 'function') {
            onChange(target.value);
        }
    }, [onChange]);

    const options = useMemo<ReactNode>(() => {
        if(!labels?.length || labels.length != values.length) {
            return (
                <>
                    {values.map((item, index)=>(
                        <option 
                            value={item}
                            key={`select-${name}-${id}-${index}`}
                        >
                            { item }
                        </option>
                    ))}
                </>
            )
        }

        return (
            <>
                {values.map((item, index)=>(
                    <option 
                        value={item}
                        key={`select-${name}-${id}-${index}`}
                    >
                        { labels[index] }
                    </option>
                ))}
            </>
        )
    }, [labels, values, id, name])

    return (
        <div className={Classes.container}>
            <select
                name={name}
                value={val}
                onChange={handleChange}
                id={`select-${name}-${id}`}
                placeholder={placeholder}
                className={`${
                    Classes.border
                } ${
                    Classes.display
                } ${
                    Classes.outline
                } ${
                    Classes.padding
                } ${
                    Classes.placeholder
                } ${
                    Classes.radius
                } ${
                    Classes.text
                } ${className}`}
                {...props}
            >
                { options }
            </select>
            {
                typeof label != 'undefined' && label != '' && (
                    <Label
                        label={label}
                        name={name as string}
                        type='select'
                        id={id}
                    />
                )
            }
        </div>
    )
}