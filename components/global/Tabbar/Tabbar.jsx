import { cx } from '@emotion/css'
import React from 'react'
import TabbarItem from './TabbarItem'
import { FaCat } from "react-icons/fa"

export default function Tabbar() {
    return (
        <div className={cx("w-screen h-[48px]", "text-m5", "flex justify-between items-center")}>
            <TabbarItem >
                <FaCat />
            </TabbarItem>
            <TabbarItem>
                <FaCat />
            </TabbarItem>
            <TabbarItem>
                <FaCat />
            </TabbarItem>
            <TabbarItem>
                <FaCat />
            </TabbarItem>
            <TabbarItem>
                <FaCat />
            </TabbarItem>
        </div >
    )
}
