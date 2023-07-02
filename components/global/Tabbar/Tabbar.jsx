import { cx } from '@emotion/css'
import React from 'react'
import TabbarItem from './TabbarItem'
import { FaCat, FaPlus } from "react-icons/fa"

export default function Tabbar() {
    return (
        <div className={cx(
            "w-screen h-[48px]",
            "text-m3",
            "flex justify-between items-center")}>
            <TabbarItem>
                <FaCat />
            </TabbarItem>
            <TabbarItem>
                <FaCat />
            </TabbarItem>
            {/* Plus */}
            <TabbarItem className={cx()}>
                <div className={cx(
                    "border border-m3 rounded-full", "p-2")}>
                    <FaPlus />
                </div>
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
