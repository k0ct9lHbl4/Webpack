import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import CalendarSvg from "@/assets/calendar.svg";

import styles from "./App.module.scss";

const getTsError = (num: number) => {
  return num;
};
const baz = () => {
  console.log("bebra");
  throw new Error("bebra error");
};
const foo = () => baz();

export const App = () => {
  const [count, setCount] = useState(0);

  const incrementButtonClickHandler = () => {
    setCount((prev) => prev + 1);
    foo();
  };

  // getTsError("5");

  return (
    <div data-test-id={"AppDataTestaIdBabel"}>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        {avatarPng}
        <img src={avatarPng} width={50} height={50} alt="png" />
      </div>
      <div>
        {avatarJpg}
        <img src={avatarJpg} width={50} height={50} alt="jpg" />
      </div>
      <div>
        <CalendarSvg width={50} height={50} style={{ color: "green" }} />
      </div>
      <Link to="/">Go to home</Link>
      <br />
      <Link to="/about">Go to about</Link>
      <br />
      <Link to="/shop">Go to shop</Link>
      <h1> Hello World!</h1>
      <p>Clicked {count} times</p>
      <button
        type="button"
        onClick={incrementButtonClickHandler}
        className={styles.button}
      >
        <span>Click!</span>
      </button>
      <Outlet />
    </div>
  );
};
