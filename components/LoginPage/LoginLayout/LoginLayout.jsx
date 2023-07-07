import React, { useState } from 'react'
import { css, cx } from "@emotion/css"

export default function StartLayout(props) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

    return (
        <div className={cx("bg-m1", "w-screen h-screen", "flex items-center justify-center")}>
          <div className={cx("flex flex-col items-center", "text-m3")}>
            <label for="account">Account</label>
            <input className={cx("mb-2", "text-m1")} type="text" id="account" name="account" required 
              value={account} onChange={e=>setAccount(e.target.value)}
            />
            <label for="password">Password</label>
            <input className={cx("mb-5", "text-m1")} type="password" id="password" name="password" required
              value={password} onChange={e=>setPassword(e.target.value)}
            />
            <button className={cx("min-w-[200px]", "bg-m3 ", "rounded", "p-2 mb-2", "text-m1 text-sm font-extrabold tracking-[4px]")}>
              Login
            </button>
            <button className={cx("font-extrabold text-orange-500 underline")} onClick={() => props.setLayout('signup')}>Sign up</button>
          </div>
        </div>
    )
}


