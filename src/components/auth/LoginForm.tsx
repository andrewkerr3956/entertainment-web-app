import Link from "next/link";

const LoginForm = () => {
    return (
        <div className="bg-dark-blue-semi w-[400px] rounded-[20px] h-[400px] flex flex-1 flex-col gap-2 p-8">
            <h2>Login</h2>
            <form>
                <fieldset>
                    <label htmlFor="username" className="block">
                        Username
                        <input type="text" className="bg-transparent border-b-2 border-white block" />
                    </label>
                    <label htmlFor="password" className="block">
                        Password
                        <input type="password" className="bg-transparent border-b-2 border-white block" />
                    </label>
                </fieldset>
                <button type="submit" className="p-4 bg-red rounded-[6px] self-center">Login to your account</button>
            </form>
            <p>Don't have an account <Link href="/auth/register" className="text-red">Sign Up</Link></p>
        </div>
    )
}

export default LoginForm;