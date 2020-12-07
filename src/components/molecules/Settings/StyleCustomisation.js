import React from "react";
import HorizontalChooser from "../../atoms/HorizontalChooser";

export default function StyleCustomisation() {
    let fontOptions = [
        {
            name: "Serif",
        },
        {
            name: "Sans Serif",
        },
        {
            name: "Poppins",
        },
        {
            name: "Monospace",
        },
    ];

    let themeOptions = [
        {
            name: "Dark",
        },
        {
            name: "Light",
        },
    ];

    return (
        <div>
            {/* font customisation */}
            <h3 className="settings-style-customisation-subtitle">Font</h3>
            <HorizontalChooser
                buttons={fontOptions}
                buttonName="style-customisation-radio"
            />
            {/* theme customisation */}
            <h3 className="settings-style-customisation-subtitle">Theme</h3>
            <HorizontalChooser
                buttons={themeOptions}
                buttonName="style-customisation-radio"
            />
        </div>
    );
}
