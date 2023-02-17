import handleRegisterData from "@lib/handlers/handleRegisterData";
import Link from "next/link";
import Router from "next/router";
import { FormEvent, FormEventHandler, useEffect } from "react";
import { connect } from "react-redux";
import User from "src/types/User";

interface IProps {
    user: User;
}

const RegisterForm = (props: IProps) => {
    const { user } = props;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        /* @ts-ignore */
        const insertUser = await handleRegisterData(form);
        if (insertUser) {
            Router.push('/?registered');
        } else {
            // setErrors(insertUser.errors);
        }
    };

    useEffect(() => {
        if (user?.email) {
            Router.push('/');
        }
        const registerForm = document.querySelector('#registerForm') as HTMLFormElement;
        registerForm?.addEventListener("submit", (e: any) => handleSubmit(e));

        return () => {
            registerForm?.removeEventListener("submit", (e: any) => handleSubmit(e));
        }
    }, []);

    return (
        <div className="w-[400px] rounded-[20px] p-8 bg-dark-blue-semi">
            <h1>Register</h1>
            <form id="registerForm" action="/api/user" method="POST" className="mt-10">
                {/* <fieldset name="loginInfo"> */}
                <input type="email" name="email" placeholder="Email address" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4" />
                <input type="password" name="password" placeholder="Password" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4 mt-6" />
                <input type="password" name="confirmPassword" placeholder="Repeat Password" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4 mt-6" />
                {/* </fieldset> */}
                <button type="submit" className="p-4 w-full bg-red rounded-[6px] mt-10 hover:bg-white hover:text-black">Create an account</button>
            </form>
            <p className="mt-8 text-center">Already have an account? <Link href="/auth/login" className="text-red">Login</Link></p>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user
});

export default connect(mapStateToProps)(RegisterForm);