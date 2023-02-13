import Card from "@components/cards/Card";
import FeaturedCard from "@components/cards/FeaturedCard";
import SearchInput from "@components/search/SearchInput";
import { NextPageContext } from "next"
import { useEffect, useRef, useState } from "react";

export default function HomePage(props: any) {

  const [searchInput, setSearchInput] = useState("");
  const [initData, setInitData] = useState([]);
  const [data, setData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);

  const effectCounter = useRef(0);
  const effectTotal = useRef(process.env.NODE_ENV === 'development' ? 2 : 1);

  const carouselPosition = useRef(0);

  useEffect(() => {
    if (effectCounter.current >= effectTotal.current) {
      (async function filterData() {
        if (searchInput.length > 0) {
          let filteredData = [...data];
          filteredData = filteredData.filter((item: any) => { return item.title.toLowerCase().includes(searchInput.toLowerCase()) ? item : null });
          setData(filteredData);
        } else {
          setData(initData);
        }
      })();
    } else {
      const showData = require('@lib/data.json');
      setInitData(showData);
      setData(showData);
      const featured = [] as any;
      showData.forEach((item: any) => {
        item.isTrending ? featured.push(item) : null;
      })
      setFeaturedData(featured);
      effectCounter.current++;
    }
  }, [searchInput]);

  useEffect(() => {
    const scrollCarousel = () => {
      const carousel = document?.querySelector("div[role='presentation'] > #featured-carousel");
      const featuredItem = document?.querySelector("div[role='presentation'] > #featured-carousel > figure.featured-item");
      // const carouselWidth = carousel?.clientWidth ? carousel.clientWidth : 0;
      console.log(featuredItem?.getBoundingClientRect().width);
      setInterval(() => {
        carousel?.setAttribute("style", `transform: translateX(${carouselPosition.current}px); -webkit-transform: translateX(${carouselPosition.current}px); -moz-transform: translateX(${carouselPosition.current}px); -o-transform: translateX(${carouselPosition.current}px);`);
        carouselPosition.current -= featuredItem?.getBoundingClientRect().width ? featuredItem?.getBoundingClientRect().width : 300;
        const newFeatured = Object.create(featuredData);
        let shiftFeatured = newFeatured.shift();
        newFeatured.push(shiftFeatured)
        setFeaturedData(newFeatured);
      }, 2000);
    };

    window?.addEventListener("load", scrollCarousel() as any);

    return () => {
      window?.removeEventListener("load", scrollCarousel);
    }
  }, []);

  return (
    <article className="px-2 bg-dark-blue w-full">
      <header className="mb-8">
        {/* Search bar */}
        <div className="w-full flex gap-6">
          <img src="/assets/icons/icon-search.svg" alt="Search" className="block" />
          <input placeholder="Search for movies or TV series" value={searchInput} onChange={e => setSearchInput(e.target.value)}
            className="bg-transparent [placeholder]:text-dark-blue-grey text-white relative before:height-[32px] font-[1.5rem]" />
        </div>
      </header>
      <main id="media-content">
        <h1 className="leading-none mb-8">Trending</h1>
        <div className="relative overflow-x-auto" role="presentation" aria-roledescription="Holds the trending media carousel">
          <div id="featured-carousel" className="flex flex-1 gap-10 w-max">
            {featuredData && featuredData?.length > 0 ? featuredData.map((item: any, idx: any) => {
              return (
                <FeaturedCard title={item?.title} image={{ small: item?.thumbnail?.regular?.small, medium: item?.thumbnail?.regular?.medium, large: item?.thumbnail?.regular?.large }} category={item?.category} year={item?.year} rating={item?.rating} />
              )
            }) : <p>No data was found.</p>}
          </div>
        </div>
        <h1 className="leading-none mt-10 mb-8">Recommended for you</h1>
        <div className="grid grid-cols-4 gap-10 max-w-recommended">
          {data && data?.length > 0 ? data.map((item: any, idx: any) => {
            const { small, medium, large } = item.thumbnail.regular;
            if (!item.isTrending) {
              return (
                <Card title={item.title} image={{ small: small, medium: medium, large: large }} category={item.category} year={item.year} rating={item.rating} />
              )
            }
          }) : <p>No data was found.</p>}
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