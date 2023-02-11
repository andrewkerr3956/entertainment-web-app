import { useEffect, useState } from "react";

interface IProps {
    input: string;
    setInput: Function;
    searchingFor?: "All" | "Bookmarks" | "TV Series" | "Movies";
}

export default function SearchInput(props: IProps) {
    const { searchingFor, input, setInput } = props;

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        // Perform the API calls to get results.
        
    }, [searchValue]);

    return (
        <div className="w-full flex gap-6">
            <img src="/assets/icons/icon-search.svg" alt="Search" className="block" />
            <input placeholder="Search for movies or TV series" value={searchValue} onChange={e => setSearchValue(e.target.value)}
                className="bg-transparent [placeholder]:text-dark-blue-grey text-white relative before:height-[32px] font-[1.5rem]" />
        </div>
    )
}