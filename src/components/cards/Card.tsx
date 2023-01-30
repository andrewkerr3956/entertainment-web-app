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
}

export default function Card(props: IProps) {
    const { image, title, year, category, rating, isBookmarked } = props;
    return (
        <figure className="relative">
            <picture>         
                <img className="rounded-[8px]" src={image?.large ? image.large : ""} alt={title + " Thumbnail"} />
            </picture>
            <figcaption className="mt-2">
                <button type="button" className="rounded-full px-2 py-2 bg-dark-blue o-50 top-4 right-4 absolute"><img src={isBookmarked ? "./assets/icons/icon-bookmark-full.svg" : "./assets/icons/icon-bookmark-empty.svg"} alt={isBookmarked ? "Bookmarked" : "Not Bookmarked"}/></button>
                <ul role="contentinfo" className="flex gap-2 text-sm">
                    {year && <li className="inline">{year}</li>}
                    {category && <><span>•</span><li className="inline"><span></span><span>{category}</span></li></>}
                    {rating && <><span>•</span><li className="inline">{rating}</li></>}
                </ul>
                <h4>{title}</h4>
            </figcaption>
        </figure>
    )
}