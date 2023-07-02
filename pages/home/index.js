import { cx } from "@emotion/css";
import Navbar from "../../components/global/Navbar/Navbar";
import Tabbar from "../../components/global/Tabbar/Tabbar";
import Searchbar from "../../components/HomePage/Searchbar/Searchbar";
import { useEffect, useState } from "react";

export default function index() {

  const [test, setTest] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:1314/api/helloworld")
      .then((res) => res.json())
      .then((json) => {
        setTest(json);
      });
  });

  return (
    <div className={cx("w-screen h-screen", "bg-m1")}>
      <Navbar />
      <Searchbar />
      <div className="text-white">{test?.hello}</div>
      <div className={cx("fixed bottom-0")}>
        <Tabbar />
      </div>
    </div>
  );
}
