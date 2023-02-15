import Card from "@components/cards/Card";
import FeaturedCard from "@components/cards/FeaturedCard";
import SearchInput from "@components/search/SearchInput";
import { NextPageContext } from "next"
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const BookmarksPage = (props: any) => {

  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);

  return (
    <article className="px-2 bg-dark-blue w-full">
      <header className="mb-8">
        {/* Search bar */}
        <div className="w-full flex gap-6">
          <img src="/assets/icons/icon-search.svg" alt="Search" className="block" />
          <input placeholder="Search for TV series" value={searchInput} onChange={e => setSearchInput(e.target.value)}
            className="bg-transparent [placeholder]:text-dark-blue-grey text-white relative before:height-[32px] font-[1.5rem] w-full" />
        </div>
      </header>
      <main id="bookmarks-content">
        <h1 className="leading-none mb-8">Bookmarks</h1>
        <div className="grid grid-cols-4 gap-10 max-w-recommended">
          {data && data?.length > 0 ? data.map((item: any, idx: any) => {
            const { small, medium, large } = item.thumbnail.regular;
            if (item.isBookmarked) {
              return (
                <Card key={idx} title={item.title} image={{ small: small, medium: medium, large: large }} category={item.category} year={item.year} rating={item.rating} />
              )
            }
          }) : <p>No data was found.</p>}
        </div>
      </main>
    </article>
  )
}

const mapState = (state: any) => ({
  user: state.user
})

export default connect(mapState)(BookmarksPage);