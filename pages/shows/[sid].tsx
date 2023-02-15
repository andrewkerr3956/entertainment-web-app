import DecodeDescription from "@lib/DecodeDescription";
import { NextPageContext } from "next";
import Show from "src/types/Show";

interface IProps {
  data: Show;
}

export default function ShowsDetailsPage(props: IProps) {
  const { data } = props;
  console.log(data);

  return (
    <article className="px-2 bg-dark-blue w-full min-h-screen">
      <header>
        <h1>{data?.title ? data.title : "N/A"}</h1>
        <h2>{data?.year ? data.year : "N/A"}</h2>
      </header>
      <main>
        <section id="show-carousel">
          <picture>
            <img src={data?.thumbnail?.regular?.large ? data.thumbnail.regular.large : data?.thumbnail?.regular?.medium ? data.thumbnail.regular.medium : data?.thumbnail?.regular?.small ? data.thumbnail.regular.small : "#"} alt={data?.title ? data.title : ""} />
          </picture>
        </section>
        <section>
          <DecodeDescription description={data.description} />
        </section>
      </main>
      <footer>

      </footer>
    </article>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const query = ctx?.query?.sid as string;
  if (query && parseInt(query)) {
    try {
      const data = await require('@lib/shows.json');
      return {
        props: {
          data: data[query + 1] ? data[query + 1] : null
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