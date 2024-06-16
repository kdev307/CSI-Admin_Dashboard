import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Settings = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Settings</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Settings;
