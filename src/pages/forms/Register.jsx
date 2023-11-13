import { useState } from "react";
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // Form Submit Handler
    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (email.trim() === "") {
            return toast.error("Email is required");
        }

        if (password.trim() === "") {
            return toast.error("Username is required");
        }
        if (password.trim() === "") {
            return toast.error("Password is required");
        }
        if (password !== confirmPassword) {
            return toast.error("Password does not match");
        }

        console.log({ email, password, userName });
    };
    return (
        <div className="form-wrapper">
            <ToastContainer theme="colored" />
            <form onSubmit={formSubmitHandler} className="form">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    type="text"
                    placeholder="Username"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
                <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button className="form-btn">Register</button>
            </form>
        </div>

    )
}

export default Register;