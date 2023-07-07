import React from 'react'
import { css, cx } from "@emotion/css"
// import { tailwindConfig } from '../../config/tailwind.resolve'
// import testData from "../../dummy-data/test.json"
import png from "../images/icon.png";

export default function StartLayout(props) {

    console.log(png.src)

    return (

        <div className={cx("bg-m1", "w-screen h-screen", "flex items-center justify-center")}>
          <div className={cx("flex flex-col items-center" )}>
            <img className={cx("h-[250px]")} src={png.src} alt="Logo" />
            <button 
              className={cx("min-w-[200px]", "bg-m3 ", "rounded", "p-2", "text-m1 text-sm font-extrabold tracking-[4px]")}
              onClick={() => props.setLayout('login')}
            >
              Start
            </button>
          </div>
        </div>
    )
}


