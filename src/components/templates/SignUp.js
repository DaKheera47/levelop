import React, { useContext, useState } from "react";
import "./Login.sass";
import CustomInputField from "../molecules/CustomInputField/CustomInputField";
import { ApiContext } from "../contexts/ApiContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");

    const { SignUp } = useContext(ApiContext);

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    const handleSignUp = (evt) => {
        evt.preventDefault();
        SignUp(email, password, username, fullName);
    };

    return (
        <div className="login-page">
            <div className="login-info-container">
                <h1 className="login-info">Register</h1>
            </div>

            <form className="login-form" onSubmit={handleSignUp}>
                <div className="login-input-field-container">
                    <CustomInputField
                        placeholder="Your full name"
                        label="Full Name"
                        onChange={(evt) => {
                            handleChange(evt, setFullName);
                        }}
                    />
                </div>

                <div className="login-input-field-container">
                    <CustomInputField
                        placeholder="@Username"
                        label="Username"
                        type="text"
                        onChange={(evt) => {
                            handleChange(evt, setUsername);
                        }}
                    />
                </div>

                <div className="login-input-field-container">
                    <CustomInputField
                        placeholder="example@example.com"
                        label="Email"
                        onChange={(evt) => {
                            handleChange(evt, setEmail);
                        }}
                    />
                </div>

                <div className="login-input-field-container">
                    <CustomInputField
                        placeholder="Your password here"
                        label="Password"
                        type="password"
                        onChange={(evt) => {
                            handleChange(evt, setPassword);
                        }}
                    />
                </div>

                <button type="submit" className="login-btn">
                    Register
                </button>

                <h3
                    style={{
                        textAlign: "center",
                        fontWeight: 300,
                        color: "#505050",
                    }}
                >
                    OR
                </h3>

                <button className="google-btn">
                    <svg
                        className="logo"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H16C17.1046 20 18 19.1046 18 18V2C18 0.89543 17.1046 0 16 0Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.64 10.2001C17.6404 9.5828 17.5855 8.96668 17.476 8.35913H9V11.8401H13.844C13.7433 12.3911 13.5318 12.9158 13.2224 13.3827C12.913 13.8495 12.5121 14.2487 12.044 14.5561V16.8141H14.953C15.8393 15.9615 16.5364 14.9321 16.9993 13.7927C17.4622 12.6533 17.6805 11.4293 17.64 10.2001Z"
                            fill="#4285F4"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00003 19.0002C11.1909 19.0594 13.3215 18.2792 14.956 16.8192L12.047 14.5612C11.3512 15.0077 10.5627 15.2893 9.74148 15.3848C8.92029 15.4802 8.08815 15.3868 7.30851 15.1118C6.52888 14.8369 5.82232 14.3875 5.24272 13.798C4.66312 13.2085 4.22577 12.4944 3.96403 11.7102H0.957031V14.0422C1.70635 15.5329 2.85531 16.786 4.27559 17.6615C5.69588 18.537 7.33158 19.0005 9.00003 19.0002Z"
                            fill="#34A853"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.96392 11.71C3.58758 10.6011 3.58758 9.39895 3.96392 8.29001V5.95801H0.956919C0.327357 7.21239 -0.000488281 8.5965 -0.000488281 10C-0.000488281 11.4035 0.327357 12.7876 0.956919 14.042L3.96392 11.71Z"
                            fill="#FBBC05"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00003 4.58009C10.2795 4.55846 11.5158 5.04209 12.441 5.92609L15.022 3.34509C13.3931 1.81468 11.235 0.974289 9.00003 1.00009C7.33158 0.99977 5.69588 1.46325 4.27559 2.33876C2.85531 3.21428 1.70635 4.46737 0.957031 5.95809L3.96403 8.29009C4.30994 7.22266 4.98188 6.29058 5.88528 5.62505C6.78868 4.95952 7.87804 4.59405 9.00003 4.58009Z"
                            fill="#EA4335"
                        />
                    </svg>
                    Sign Up with Google
                </button>

                <button className="fb-btn">
                    <svg
                        className="logo"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.8396 0H1.15902C0.519347 0 0 0.518318 0 1.15904V19.8399C0 20.4806 0.519347 20.9997 1.15902 20.9997H11.2161V12.8674H8.47966V9.69763H11.2161V7.36018C11.2161 4.64826 12.872 3.17076 15.2917 3.17076C16.4517 3.17076 17.4465 3.25755 17.7366 3.29524V6.12991L16.0583 6.13061C14.7426 6.13061 14.4888 6.75611 14.4888 7.67346V9.69659H17.6277L17.2173 12.866H14.4885V20.9986H19.8392C20.4796 20.9986 20.9993 20.4789 20.9993 19.8399V1.15835C20.999 0.518318 20.48 0 19.8396 0Z"
                            fill="white"
                        />
                    </svg>
                    Sign Up with Facebook
                </button>
            </form>
        </div>
    );
}
