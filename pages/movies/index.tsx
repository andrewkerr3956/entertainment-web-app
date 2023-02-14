import Card from "@components/cards/Card";
import FeaturedCard from "@components/cards/FeaturedCard";
import SearchInput from "@components/search/SearchInput";
import { NextPageContext } from "next"
import { useEffect, useRef, useState } from "react";
import Movie from "src/types/Movie";

// interface IProps {
//   data?: any | any[];
// }

export default function MoviesPage(props: any) {
  const [initData, setInitData] = useState([]) as Array<Movie>;
  const [data, setData] = useState([]) as Array<Movie>;
  const [searchInput, setSearchInput] = useState("");

  const effectCounter = useRef(0);
  const effectTotal = useRef(process.env.NODE_ENV === 'development' ? 2 : 1);

  console.log(effectTotal);

  useEffect(() => {
    if (effectCounter.current >= effectTotal.current) {
      (async function filterData() {
        if (searchInput.length > 0) {
          let filteredData = [...data];
          filteredData = filteredData.filter((item: Movie) => { return item.title.toLowerCase().includes(searchInput.toLowerCase()) ? item : null });
          setData(filteredData);
        } else {
          setData(initData);
        }
      })();
    } else {
      const showData = require('@lib/data.json');
      setInitData(showData);
      setData(showData);
      effectCounter.current++;
    }
  }, [searchInput]);


  return (
    <article className="px-2 bg-dark-blue w-full min-h-screen">
      <header className="mb-8">
        {/* Search bar */}
        <div className="w-full flex gap-6">
          <img src="/assets/icons/icon-search.svg" alt="Search" className="block" />
          <input placeholder="Search for movies or TV series" value={searchInput} onChange={e => setSearchInput(e.target.value)}
            className="bg-transparent [placeholder]:text-dark-blue-grey text-white relative before:height-[32px] text-[1.5rem] w-full" />
        </div>
      </header>
      <main id="movies-content">
        <h1 className="leading-none mb-8">Movies</h1>
        <div className="grid grid-cols-4 gap-10 max-w-recommended">
          {data && data?.length > 0 ? data.map((item: any, idx: any) => {
            const { small, medium, large } = item.thumbnail.regular;
            if (item.category === "Movie") {
              return (
                <Card key={idx} title={item.title} image={{ small: small, medium: medium, large: large }} category={item.category} year={item.year} rating={item.rating} />
              )
            }
          }) : <p>No results were found.</p>}
        </div>
      </main>
    </article>
  )
}

// export async function getStaticProps() {
//   const data = require('@lib/data.json');

//   return {
//     props: {
//       data: data
//     }
//   }
// }