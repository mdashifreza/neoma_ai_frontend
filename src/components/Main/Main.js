import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import CreateNewsForm from "./CreateNewsForm";

const Main = () => {
    const [news, setNews] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        description: "",
        image_url: "",
        link: "",
    });

    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [selectedNewsId, setSelectedNewsId] = useState(null);

    useEffect(() => {
        ApiCall();
    }, []);

    const ApiCall = async () => {
        try {
            const url = "https://neoma-ai-backend.vercel.app/api/news";
            const response = await axios.get(url);
            const responceData = await response.data;
            setNews(responceData);
            console.log(news)
        } catch (error) {
            console.log("error while api calling", error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreateNews = async () => {
        try {
            await axios.post("https://neoma-ai-backend.vercel.app/api/news", formData);
            ApiCall();
        } catch (error) {
            console.error("Error creating news:", error.message);
        }
    };

    //update
    const handleUpdateButtonClick = (id) => {
        const selectedNews = news.find((item) => item._id === id);
        setFormData(selectedNews);
        setIsUpdateMode(true);
        setSelectedNewsId(id);
    };

    const handleUpdateNews = async (id) => {
        try {
            await axios.put(`https://neoma-ai-backend.vercel.app/api/news/${id}`, formData);
            ApiCall();
        } catch (error) {
            console.error("Error updating news:", error.message);
        }
    };

    const handleDeleteNews = async (id) => {
        try {
            console.log("delete id ", id)
            await axios.delete(`https://neoma-ai-backend.vercel.app/api/news/${id}`);
            ApiCall();
        } catch (error) {
            console.error("Error deleting news:", error.message);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">News Aggregator API</h2>
            <ul className=" bg-gray-300 p-4 rounded">
                {news.map((item) => (
                    <NewsCard
                        key={item._id}
                        item={item}
                        handleUpdateNews={() => handleUpdateButtonClick(item._id)}
                        handleDeleteNews={handleDeleteNews}
                    />
                ))}
            </ul>
            <CreateNewsForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleCreateNews={handleCreateNews}
                isUpdateMode={isUpdateMode}
                handleUpdateNews={() => {
                    handleUpdateNews(selectedNewsId); // use the selected news ID for update
                    setIsUpdateMode(false);
                    setSelectedNewsId(null); // reset the selected news ID
                }}
            />
        </div>
    );
};

export default Main;
