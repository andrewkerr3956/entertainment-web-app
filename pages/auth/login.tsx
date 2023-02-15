import LoginForm from "@components/auth/LoginForm";

export default function LoginPage() {
    return (
        <article className="bg-dark-blue w-full min-h-screen flex flex-1 flex-col justify-start items-center gap-20">
            <header className="pt-4">  {/* Only 4 because we need 20 total, and the main already has a padding-top of 16 */}
                <picture>
                    <img src="/assets/icons/logo.svg" alt="Logo" className="w-8" />
                </picture>
            </header>
            <main>
                <LoginForm />
            </main>
        </article>
    );
}