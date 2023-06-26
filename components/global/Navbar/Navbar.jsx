import { cx, css } from "@emotion/css";
import { IconButton } from "@mui/material";
import { BiUserCircle, BiSearch } from "react-icons/bi"

export default function Navbar() {
    return (
        <div className={cx(
            // height
            "h-[48px]",
            // bg-color
            "bg-m5",
            // layout
            "flex justify-between items-center",
            "px-2"
        )}>
            {/* Logo */}
            <div className={cx(
                // color
                "text-white",
                // font
                "text-2xl",
                "font-bold"
            )}>
                <span className="text-3xl">M</span>eow Chat
            </div>
            {/* Options */}
            <div>

                {/* <IconButton size="medium">
                    <BiSearch className="text-white" />
                </IconButton> */}
                {/* User */}
                <IconButton size="medium">
                    <BiUserCircle className="text-white" />
                </IconButton>
            </div>
        </div>
    )
}
