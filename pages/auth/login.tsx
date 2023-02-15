import LoginForm from "@components/auth/LoginForm";

export default function LoginPage() {
    return (
        <article className="bg-dark-blue w-full min-h-screen flex justify-center items-center">
            <header>
                <picture>
                    <img src="#" alt="" />
                </picture>
            </header>
            <main>
                <LoginForm />
            </main>
        </article>
    );
}