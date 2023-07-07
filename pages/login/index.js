import React, {useState} from 'react'
import { css, cx } from "@emotion/css"
import Test from "../../components/LoginPage/Test";
import StartLayout from "../../components/LoginPage/StartLayout/StartLayout";
import LoginLayout from "../../components/LoginPage/LoginLayout/LoginLayout";
import SignUpLayout from "../../components/LoginPage/SignUpLayout/SignUpLayout";

export default function index() {
  const [layout, setLayout] = useState("start")
  return (
    <div>
      {
        layout === "signup" ?
          <SignUpLayout setLayout={setLayout}/> :
        layout === "login" ? 
          <LoginLayout setLayout={setLayout}/> :
          <StartLayout setLayout={setLayout}/>
      }
    </div>
  );
}
