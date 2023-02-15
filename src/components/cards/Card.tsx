import Link from "next/link";
import { connect } from "react-redux";
import User from "src/types/User";

interface IProps {
    image?: {
        small?: string;
        medium?: string;
        large?: string;
    };
    title: string;
    year?: string;
    category?: "Movie" | "TV Series";
    rating?: "E" | "PG" | "18+";
    isBookmarked?: boolean;
    user: User;
}

const Card = (props: IProps) => {
    const { image, title, year, category, rating, isBookmarked, user } = props;
    return (
        <figure className="relative">
            <Link href={`/${category === "Movie" ? "movies" : "shows"}/1`}>
                <picture>
                    <img className="rounded-[8px]" src={image?.large ? image.large : ""} alt={title + " Thumbnail"} />
                </picture>
                <figcaption className="mt-2">
                    {user.username ? <button type="button" className="rounded-full px-2 py-2 bg-dark-blue o-50 top-4 right-4 absolute"><img src={isBookmarked ? "./assets/icons/icon-bookmark-full.svg" : "./assets/icons/icon-bookmark-empty.svg"} alt={isBookmarked ? "Bookmarked" : "Not Bookmarked"} /></button> : null}
                    <ul role="contentinfo" className="flex gap-2 text-sm">
                        {year && <li className="inline">{year}</li>}
                        {category && <><span>•</span><li className="inline"><span style={{ marginRight: '0.375rem', fontSize: '1em' }}><img className="inline" src={category === "Movie" ? "./assets/icons/icon-category-movie.svg" : "./assets/icons/icon-category-tv.svg"} alt={`${category} icon`} /></span><span>{category}</span></li></>}
                        {rating && <><span>•</span><li className="inline">{rating}</li></>}
                    </ul>
                    <h4>{title}</h4>
                </figcaption>
            </Link>
        </figure>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user
});

export default connect(mapStateToProps)(Card);