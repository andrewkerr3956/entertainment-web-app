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

export default function FeaturedCard(props: IProps) {
    const { image, title, year, category, rating, isBookmarked } = props;
    return (
        <figure className="relative">
            <picture>         
                <img className="rounded-[8px]" src={image?.large ? image.large : ""} alt={title + " Thumbnail"} />
            </picture>
            <figcaption className="absolute bottom-0 left-6">
                <ul role="contentinfo" className="flex gap-2">
                    {year && <li className="inline">{year}</li>}
                    {category && <><span>•</span><li className="inline"><span></span><span>{category}</span></li></>}
                    {rating && <><span>•</span><li className="inline">{rating}</li></>}
                </ul>
                <h1>{title}</h1>
            </figcaption>
        </figure>
    )
}