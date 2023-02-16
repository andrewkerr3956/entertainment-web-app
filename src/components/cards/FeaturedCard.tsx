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
        <figure className="featured-item relative">
            <picture>         
                <img className="rounded-[8px]" src={image?.large ? image.large : ""} alt={title + " Thumbnail"} />
            </picture>
            <figcaption className="absolute bottom-0 left-6">
                <ul role="contentinfo" className="flex gap-2">
                    {year && <li className="inline">{year}</li>}
                    {category && <><span>•</span><li className="inline"><span style={{ marginRight: '0.375rem', fontSize: '1em' }}><img className="inline" src={category === "Movie" ? "./assets/icons/icon-category-movie.svg" : "./assets/icons/icon-category-tv.svg"} alt={`${category} icon`} /></span><span>{category}</span></li></>}
                    {rating && <><span>•</span><li className="inline">{rating}</li></>}
                </ul>
                <h1>{title}</h1>
            </figcaption>
        </figure>
    )
}