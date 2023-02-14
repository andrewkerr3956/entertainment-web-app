import { useEffect, useState } from "react";
import Media from "src/types/Media";

interface IProps {
    input: string;
    setInput: Function;
    data: Array<Media>;
    setData: Function;
    searchingFor?: "All" | "Bookmarks" | "TV Series" | "Movies";
}

export default function SearchInput(props: IProps) {
    const { searchingFor, input, setInput, data, setData } = props;

    useEffect(() => {
        // Perform the API calls to get results.
        
    }, [input]);

    return (
        <div className="w-full flex gap-6">
            <img src="/assets/icons/icon-search.svg" alt="Search" className="block" />
            <input placeholder="Search for movies or TV series" value={input} onChange={e => setInput(e.target.value)}
                className="bg-transparent [placeholder]:text-dark-blue-grey text-white relative before:height-[32px] font-[1.5rem]" />
        </div>
    )
}