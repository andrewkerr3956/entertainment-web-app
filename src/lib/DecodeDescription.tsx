import React from "react";

interface IProps {
    description: string;
}
/**
 * 
 * @param description 
 * @returns A decoded HTML description
 */
const DecodeDescription = (props: IProps): any => {
    const { description } = props;
    const arrTags = description.match(new RegExp(/<p>.*?<\/p>/gi));
    const formatTags: string[] = [];
    arrTags?.forEach((tag) => {
        console.warn(tag);
        tag.replaceAll("<p>", "");
        tag.replaceAll("</p>", "");
        formatTags.push(tag);
    })
    console.log(formatTags);
    return (
        <p>
            {formatTags && formatTags?.length > 0 ? formatTags?.map((pg: string, idx: number) => {
                return (
                    <React.Fragment key={`p-${idx}`}>{pg}</React.Fragment>
                )
            }) : "No description available"}
        </p>
    );
}

export default DecodeDescription;