import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-full max-h-[960px] py-8">
            <div className="h-full bg-dark-blue-semi rounded-navbar py-9">
                <nav className="h-full px-8 flex flex-col items-center">
                    <img src="/assets/icons/logo.svg" alt="Movies Logo" className="text-center mb-[75px]" />
                    <ul className="h-full flex flex-col items-center gap-10">
                        <li title="Home"><Link href="/"><img src="/assets/icons/icon-nav-home.svg" alt="Home Icon" /></Link></li>
                        <li title="Movies"><Link href="/movies"><img src="/assets/icons/icon-nav-movies.svg" alt="Movies Icon" /></Link></li>
                        <li title="TV Shows"><Link href="/shows"><img src="/assets/icons/icon-nav-tv-series.svg" alt="TV Shows Icon" /></Link></li>
                        <li title="Bookmarks"><Link href="/bookmarks"><img src="/assets/icons/icon-nav-bookmark.svg" alt="Bookmarks Icon" /></Link></li>
                    </ul>
                    <img src="/assets/images/no-avatar.svg" alt="My Account Picture" className="rounded-full border border-white border-solid" />
                </nav>
            </div>
        </div>
    )
}