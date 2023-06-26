import { cx } from "@emotion/css";
import Navbar from "../../components/global/Navbar/Navbar";
import Tabbar from "../../components/global/Tabbar/Tabbar";
import Searchbar from "../../components/HomePage/Searchbar/Searchbar";

export default function index() {
  return (
    <div className={cx("w-screen h-screen", "bg-m3")}>
      <Navbar />
      <Searchbar />
      <div className={cx("fixed bottom-0")}>
        <Tabbar />
      </div>
    </div>
  );
}
