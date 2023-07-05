import { ComponentPropsWithoutRef } from "react";

export interface HeadingsProps extends ComponentPropsWithoutRef<'h1'> {
    level?  : 1 | 2 | 3 | 4 | 5 | 6 | 'title',
}