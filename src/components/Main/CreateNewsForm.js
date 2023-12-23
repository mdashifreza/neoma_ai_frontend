import React from "react";

const CreateNewsForm = ({ formData, handleInputChange, handleCreateNews, isUpdateMode, handleUpdateNews }) => {
    return (
        <div>
            <h3 className="text-xl font-bold mt-4 bg-teal-200 p-2 rounded">{isUpdateMode ? "Update News" : "Create News or Update News after click on update button above"}</h3>
            <div className="mt-2">
                <label className="block text-sm font-semibold">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="rounded border border-gray-400 p-2 w-full"
                />
            </div>
            <div className="mt-2">
                <label className="block text-sm font-semibold">Description:</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="rounded border border-gray-400 p-2 w-full"
                />
            </div>
            <div className="mt-2">
                <label className="block text-sm font-semibold">Content:</label>
                <input
                    type="text"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    className="rounded border border-gray-400 p-2 w-full"
                />
            </div>
            <div className="mt-2">
                <label className="block text-sm font-semibold">Link:</label>
                <input
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    className="rounded border border-gray-400 p-2 w-full"
                />
            </div>
            <div className="mt-2">
                <label className="block text-sm font-semibold">Image URL:</label>
                <input
                    type="text"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    className="rounded border border-gray-400 p-2 w-full"
                />
            </div>
            <button
                className={`mt-4 ${isUpdateMode ? "bg-teal-700 hover:bg-blue-500" : "bg-green-500 hover:bg-green-700"} text-white font-bold py-2 px-4 rounded`}
                onClick={isUpdateMode ? handleUpdateNews : handleCreateNews}
            >
                {isUpdateMode ? "Update News" : "Create News"}
            </button>
        </div>
    );
};

export default CreateNewsForm;
