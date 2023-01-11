import { useEffect, useState } from "react";

interface IProps {
    searchingFor?: "All" | "Bookmarks" | "TV Series" | "Movies";
}

export default function SearchInput(props: IProps) {
    const { searchingFor } = props;
    
    const [searchValue, setSearchValue] = useState(""); 

    useEffect(() => {
        // Perform the API calls to get results.
    }, [searchValue]);

    return (
        <input placeholder="Search for movies or TV series" value={searchValue} onChange={e => setSearchValue(e.target.value)} 
        className="bg-transparent [placeholder]:text-dark-blue-grey text-white relative before:height-[32px] before:bg-image-search-icon w-full" />
    )
}