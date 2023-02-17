import store from "@lib/redux/store";
import { loginUser } from "@lib/redux/user/slice";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import User from "src/types/User";

interface IProps {
    error?: string;
    user: User;
    loginUser: Function;
}

const LoginForm = (props: IProps) => {
    const { error, user, loginUser } = props;

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // const state = useSelector((state: any) => state.user)
    // const dispatch = useDispatch();

    useEffect(() => {
        if(user?.email) {
            Router.push("/");
        }
    }, []);

    return (
        <div className="w-[400px] rounded-[20px] h-[400px] p-8 bg-dark-blue-semi">
            <h1>Login</h1>
            <form action="/api/user" method="GET" className="mt-10">
                <fieldset>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4" />
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4 mt-6" />
                </fieldset>
                <button type="submit" className="p-4 w-full bg-red rounded-[6px] mt-10 hover:bg-white hover:text-black">Login to your account</button>
            </form>
            {error && <p className="text-red" aria-label="error-message">{error}</p>}
            <p className="mt-8 text-center">Don't have an account? <Link href="/auth/register" className="text-red">Sign Up</Link></p>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user
})

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);