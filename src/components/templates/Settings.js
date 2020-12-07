import React from "react";
import { motion } from "framer-motion";
import StyleCustomisation from "../molecules/Settings/StyleCustomisation";
import Notifications from "../molecules/Settings/Notifications";
import Integrations from "../molecules/Settings/Integrations";
import "./settingsStyle.sass";

export default function Settings() {
    return (
        <motion.div
            className="settings-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="settings-style-customisation-title">
                Style Customisation
            </h2>
            <StyleCustomisation />

            <h2 className="settings-style-customisation-title">
                Notifications
            </h2>
            <Notifications />

            <h2 className="settings-style-customisation-title">
                Integrations
            </h2>
            <Integrations />
        </motion.div>
    );
}
