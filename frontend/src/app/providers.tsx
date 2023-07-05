'use client';

import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

export const Providers : FC<{
    children: ReactNode
}> = ({
    children
}) => (
    <Provider
        store={store}
    >
        {children}
    </Provider>
)