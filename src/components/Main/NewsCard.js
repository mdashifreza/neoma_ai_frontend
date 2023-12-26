import React, { useState } from "react";
import neoma from '../../assets/neoma.webp';

const NewsCard = ({ item, handleUpdateNews, handleDeleteNews }) => {
    const [showMoreDes, setShowMoreDes] = useState(false);
    const [showMoreCon, setShowMoreCon] = useState(false);

    const displayDescription = showMoreDes
        ? item?.description
        : item?.description
        ? item?.description.slice(0, 100)
        : '';

    const displayContent = showMoreCon
        ? item?.content
        : item?.content
        ? item?.content.slice(0, 300)
        : '';

    return (
        <li key={item._id} className="p-2 flex flex-col">
            <p className="font-bold text-xl"> {item.title}</p>
            <div className="flex">
                <p>
                    <img
                        src={item.image_url ? item.image_url : neoma}
                        alt={`${item.title} Thumbnail`}
                        className="h-24 w-44 mb-2 rounded"
                    />
                </p>
                <p className="p-2">
                    {displayDescription}
                    {item?.description && item?.description.length > 100 && (
                        <button
                            onClick={() => setShowMoreDes(!showMoreDes)}
                            className="font-semibold p-0.5 rounded-sm mb-2 b text-teal-700 cursor-pointer underline"
                        >
                            {showMoreDes ? "Read Less" : "...Read More"}
                        </button>
                    )}
                </p>
            </div>
            <div>
                <span className="font-bold mr-2">Full Content:</span>
                <span>
                    {displayContent}
                    {item?.content && item?.content.length > 100 && (
                        <button
                            onClick={() => setShowMoreCon(!showMoreCon)}
                            className="font-semibold p-0.5 rounded-sm mb-2 b text-teal-700 cursor-pointer underline"
                        >
                            {showMoreCon ? "Read Less" : "...Read More"}
                        </button>
                    )}
                </span>
            </div>
            <p>
                <span className="font-bold mr-2">Source:</span>
                <span className="text-red-700">
                    <a href={item.link}>{item.link}</a>
                </span>
            </p>
            <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={() => handleUpdateNews(item._id)}
            >
                Update
            </button>
            <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteNews(item._id)}
            >
                Delete
            </button>
        </li>
    );
};

export default NewsCard;
