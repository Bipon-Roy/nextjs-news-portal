import { getCategoryNews } from "@/utils/getCategoryNews";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category);
    return (
        <div>
            <h1>Dynamic News Page {searchParams.category}</h1>
        </div>
    );
};

export default DynamicNewsPage;
