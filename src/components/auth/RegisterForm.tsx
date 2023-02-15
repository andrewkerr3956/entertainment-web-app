import Link from "next/link";

const RegisterForm = () => {
    return (
        <div className="w-[400px] rounded-[20px] p-8 bg-dark-blue-semi">
            <h1>Register</h1>
            <form action="/api/user" method="POST" className="mt-10">
                <fieldset>
                    <input type="email" name="email" placeholder="Email address" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4" />
                    <input type="password" name="password" placeholder="Password" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4 mt-6" />
                    <input type="password" name="confirm-password" placeholder="Repeat Password" required aria-required className="w-full bg-transparent border-b border-dark-blue-grey border-solid block pb-4 mt-6" />
                </fieldset>
                <button type="submit" className="p-4 w-full bg-red rounded-[6px] mt-10 hover:bg-white hover:text-black">Create an account</button>
            </form>
            <p className="mt-8 text-center">Already have an account? <Link href="/auth/login" className="text-red">Login</Link></p>
        </div>
    )
}

export default RegisterForm;