import { NextPageContext } from "next";
import Router from "next/router";
import { useEffect } from "react";
import Movie from "src/types/Movie";

interface IProps {
    data: Movie;
}

export default function MoviesDetailsPage(props: IProps) {
    const { data } = props;
    console.log(data);

    return (
        <article className="px-2 bg-dark-blue w-full min-h-screen">
            <header>
                <h1>{data?.title ? data.title : "N/A"}</h1>
                <h2>{data?.year ? data.year : "N/A"}</h2>
            </header>
            <main>
                <section id="movie-carousel">
                    <picture>
                        <img src={data?.thumbnail?.regular?.large ? data.thumbnail.regular.large : data?.thumbnail?.regular?.medium ? data.thumbnail.regular.medium : data?.thumbnail?.regular?.small ? data.thumbnail.regular.small : "#"} alt={data?.title ? data.title : ""} />
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
            let result = null;
            const req = await fetch(`${process.env.DOMAIN}/api/media/movies/${query}`);
            result = await req.json();
            return {
                props: {
                    data: result.results
                }
            }
        } catch (e: any) {
            throw new Error(e);
        }
    } else {
        return {
            notFound: true
        }
    }
}