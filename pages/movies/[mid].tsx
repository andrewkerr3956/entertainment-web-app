import { NextPageContext } from "next";
import Movie from "src/types/Movie";

interface IProps {
    data: Movie;
}

export default function MoviesDetailsPage(props: IProps) {
    const { data } = props;
    return (
        <article className="px-2 bg-dark-blue w-full">
            <header>
                <h1>{data?.title ? data.title : "N/A"}</h1>
                <h2>{data?.year ? data.year : "N/A"}</h2>
            </header>
            <main>
                <section id="movie-carousel">
                    <picture>
                        <img src="#" alt="" />
                    </picture>
                </section>
                <section>
                    <p>
                        {data?.description ? data.description : "No description available"}
                    </p>
                </section>
            </main>
            <footer>

            </footer>
        </article>
    )
}

export async function getServerSideProps(ctx: NextPageContext) {
    const query = ctx?.query?.mid as string;
    if (query && parseInt(query)) {
        try {
            const data = await require('@lib/data.json');
            return {
                props: {
                    data: data[query + 1]
                }
            }
        } catch (e) {
            return {
                notFound: true
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}