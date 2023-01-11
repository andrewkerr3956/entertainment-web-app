export default function Navbar() {
    return (
        <div className="h-full max-h-[960px] py-8">
            <div className="h-full bg-dark-blue-semi rounded-navbar py-9">
                <nav className="h-full px-8 flex flex-col items-center">
                    <img src="/assets/icons/logo.svg" alt="Movies Logo" className="text-center mb-[75px]" />
                    <ul className="h-full flex flex-col items-center gap-10">
                        <li title="Home"><img src="/assets/icons/icon-nav-home.svg" alt="Home Icon" /></li>
                        <li title="Movies"><img src="/assets/icons/icon-nav-movies.svg" alt="Movies Icon" /></li>
                        <li title="TV Shows"><img src="/assets/icons/icon-nav-tv-series.svg" alt="TV Shows Icon" /></li>
                        <li title="Bookmarks"><img src="/assets/icons/icon-nav-bookmark.svg" alt="Bookmarks Icon" /></li>
                    </ul>
                    <img src="/assets/images/image-avatar.png" alt="My Account Picture" className="rounded-full border border-white border-solid" />
                </nav>
            </div>
        </div>
    )
}