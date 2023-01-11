import SearchInput from "@components/search/SearchInput";
import { NextPageContext } from "next"

interface IProps {
  data?: any | any[];
}

export default function HomePage(props: IProps) {
  const { data } = props;
  console.log(data);

  return (
    <article className="px-2 bg-dark-blue">
      <header>
        {/* Search bar */}
        <SearchInput />
      </header>
      <main className="grid grid-cols-4">
        {data && data?.length > 0 ? data.map((item: any, idx: any) => {
            const { small, medium, large } = item.thumbnail.regular;
            return (
            <figure key={`movie-${idx}`} role="feed">
              <picture>
                <img src={large} alt={`${item.title} Thumbnail`} loading="lazy" />
              </picture>
              <figcaption role="contentinfo">
                {item.title}
              </figcaption>
            </figure>
            )
          }) : <p>No data was found.</p>}
      </main>
    </article>
  )
}

export async function getStaticProps() {
  const data = require('@lib/data.json');

  return {
    props: {
      data: data
    }
  }
}