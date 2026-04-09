import React from 'react';
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { bookName, author, image, category, rating, tags, bookId } = book;

    return (
        <div className="card bg-base-100 shadow-xl border p-6 rounded-2xl">
            <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
                <img src={image} alt={bookName} className="h-40 object-contain" />
            </figure>
            <div className="mt-6">
                <div className="flex gap-3 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-xl font-bold mb-2">{bookName}</h2>
                <p className="text-gray-600 font-medium mb-4">By: {author}</p>
                <hr className="border-dashed mb-4" />
                <div className="flex justify-between items-center font-medium">
                    <span>{category}</span>
                    <div className="flex items-center gap-2">
                        <span>{rating}</span>
                        <span className="text-orange-400">★</span>
                    </div>
                </div>
            </div>
            <div className="card-actions mt-4">
                <Link to={`/book/${bookId}`}>
                    <button className="btn bg-[#23BE0A] text-white hover:bg-green-700 border-none px-6">
                        View Details
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default BookCard;