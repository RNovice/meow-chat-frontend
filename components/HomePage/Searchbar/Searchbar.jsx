import { cx } from '@emotion/css'
import React from 'react'
import { BiSearch } from "react-icons/bi"

export default function Searchbar() {
    return (
        <div className={cx('w-full h-[36px]', "p-1.5",)}>
            <div className={cx('w-full h-full',"flex items-center", "bg-white", "px-1","gap-1")}>
                <BiSearch />
                <input type="text" className={cx("w-full h-full")} placeholder='查詢房間 id, 主題, 標籤 . . .'/>
            </div>
        </div>
    )
}
