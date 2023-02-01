import "./DarkMode.css";
import { ChangeEventHandler } from "react";
import React from "react";

// 1
const setDark = () => {

    // 2
    localStorage.setItem("theme", "dark");

    // 3
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
    setDark();
}

// 5
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
        setDark();
    } else {
        setLight();
    }
};

const DarkMode = () => {
    return (
        <div className="toggle-theme-wrapper">
            <span><img alt="light mode" src="./images/light-mode.svg"></img></span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"

                    // 6
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                />
                <div className="slider round"></div>
            </label>
            <span><img alt="dark mode" src="./images/dark-mode.svg"></img></span>
        </div>
    );
};

export default DarkMode;