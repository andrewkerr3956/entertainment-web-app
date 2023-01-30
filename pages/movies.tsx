import Card from "@components/cards/Card";
import FeaturedCard from "@components/cards/FeaturedCard";
import SearchInput from "@components/search/SearchInput";
import { NextPageContext } from "next"
import { useEffect, useState } from "react";

interface IProps {
  data?: any | any[];
}

export default function MoviesPage(props: IProps) {
  const { data } = props;
  console.log(data);

  return (
    <article className="px-2 bg-dark-blue w-full">
      <header className="mb-8">
        {/* Search bar */}
        <SearchInput />
      </header>
      <main id="movies-content">
        <h1 className="leading-none mb-8">Movies</h1>
        <div className="grid grid-cols-4 gap-10 max-w-recommended">
          {data && data?.length > 0 ? data.map((item: any, idx: any) => {
            const { small, medium, large } = item.thumbnail.regular;
            if (item.category === "Movie") {
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

export async function getStaticProps() {
  const data = require('@lib/data.json');

  return {
    props: {
      data: data
    }
  }
}