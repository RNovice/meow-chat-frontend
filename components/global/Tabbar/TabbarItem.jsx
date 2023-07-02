import { cx } from '@emotion/css'
import React from 'react'

export default function TabbarItem({ children, className }) {
    return (
        <div className={cx(
            "w-full h-full",
            "flex justify-center items-center",
            "text-xl",
            className)}>
            {children}
        </div>
    )
}
