import React from 'react'
import { css, cx } from "@emotion/css"
import { tailwindConfig } from '../../config/tailwind.resolve'
import testData from "../../dummy-data/test.json"
import png from "./images/icon.png";

export default function Test() {

    console.log(testData)
    console.log(png.src)

    return (

        <div className={
            cx("bg-m1",
                "w-[40px] h-[50px]",
            )}>Test
            <img src={png.src} alt="" />
        </div>
    )
}


