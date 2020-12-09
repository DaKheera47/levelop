import React from "react";
import { motion } from "framer-motion";
import StyleCustomisation from "../molecules/Settings/StyleCustomisation";
import Notifications from "../molecules/Settings/Notifications";
import Integrations from "../molecules/Settings/Integrations";
import SettingsProfile from "../molecules/Settings/SettingsProfile";
import SettingsAdditionalLinks from "../molecules/Settings/SettingsAdditionalLinks";
import SettingsAccount from "../molecules/Settings/SettingsAccount";
import SettingsOccupation from "../molecules/Settings/SettingsOccupation";
import SettingsSecurity from "../molecules/Settings/SettingsSecurity";
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

            <h2 className="settings-style-customisation-title">Integrations</h2>
            <Integrations />

            <h2 className="settings-style-customisation-title">Profile</h2>
            <SettingsProfile />

            <h2 className="settings-style-customisation-title">
                Additional Links
            </h2>
            <SettingsAdditionalLinks />

            <h2 className="settings-style-customisation-title">Account</h2>
            <SettingsAccount />

            <h2 className="settings-style-customisation-title">Occupation</h2>
            <SettingsOccupation />

            <h2 className="settings-style-customisation-title">Security</h2>
            <SettingsSecurity />
        </motion.div>
    );
}
