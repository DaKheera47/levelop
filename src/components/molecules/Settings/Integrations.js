import React from "react";
import ButtonSelector from "../../atoms/ButtonSelector";

export default function Integrations() {
    const customHr = (
        <hr
            style={{
                color: "#E9E9E9",
                backgroundColor: "#E9E9E9",
                border: "none",
                height: 1,
            }}
        />
    );

    return (
        <div>
            <ButtonSelector text="GitHub" isActivated={false} />
            {customHr}
            <ButtonSelector text="Facebook" isActivated={true} />
            {customHr}
            <ButtonSelector text="Google" isActivated={true} />
        </div>
    );
}
