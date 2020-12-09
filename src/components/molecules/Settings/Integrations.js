import React from "react";
import ButtonSelector from "../../atoms/ButtonSelector";
import CustomLine from "../../atoms/CustomLine";

export default function Integrations() {
    return (
        <div>
            <ButtonSelector text="GitHub" isActivated={false} />
            <CustomLine />
            <ButtonSelector text="Facebook" isActivated={true} />
            <CustomLine />
            <ButtonSelector text="Google" isActivated={false} />
            <CustomLine />
            <ButtonSelector text="Twitter" isActivated={true} />
        </div>
    );
}
