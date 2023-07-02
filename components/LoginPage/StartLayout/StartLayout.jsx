import React from 'react'
import { css, cx } from "@emotion/css"
// import { tailwindConfig } from '../../config/tailwind.resolve'
// import testData from "../../dummy-data/test.json"
import png from "../images/icon.png";

export default function StartLayout() {

    console.log(png.src)

    return (

        <div className={cx("bg-m1", "w-screen h-screen", "flex flex-col items-center" )}>
          <img className={cx()} src={png.src} alt="Logo" />
          <button className={cx("min-w-[200px]", "bg-m3 ", "rounded", "p-2", "text-m1 text-sm tracking-[4px]")}>
            Start
          </button>
        </div>
    )
}


