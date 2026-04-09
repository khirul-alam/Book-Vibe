import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const navigate = useNavigate(); // ফিরে যাওয়ার জন্য

    const id = parseInt(bookId);
    const book = books.find(book => book.bookId === id);

    // যদি বই খুঁজে না পায় তার জন্য সেফটি চেক
    if (!book) {
        return <div className="text-center mt-20 text-2xl">Book not found!</div>;
    }

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="container mx-auto mt-10 p-4 lg:p-0 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 shadow-sm border relative">
                
                {/* ক্লোজ বাটন (X) - এটি এখন কাজ করবে */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-xl"
                >
                    ✕
                </button>

                {/* বাম পাশে বইয়ের ছবি */}
                <div className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center p-12">
                    <img src={image} alt={bookName} className="rounded-lg shadow-2xl h-[500px] object-contain" />
                </div>

                {/* ডান পাশে সব তথ্য */}
                <div className="flex flex-col text-left">
                    <h1 className="text-4xl font-bold mb-4">{bookName}</h1>
                    <p className="text-xl font-medium text-gray-700 mb-4">By : {author}</p>
                    <hr className="mb-4" />
                    <p className="text-xl font-medium text-gray-700 mb-4">{category}</p>
                    <hr className="mb-4" />
                    <p className="mb-6 leading-relaxed">
                        <span className="font-bold">Review: </span>{review}
                    </p>

                    <div className="flex gap-4 items-center mb-6">
                        <span className="font-bold">Tag</span>
                        {tags.map((tag, idx) => (
                            <span key={idx} className="text-[#23BE0A] bg-green-50 px-4 py-1 rounded-full font-medium">#{tag}</span>
                        ))}
                    </div>
                    <hr className="mb-6" />

                    {/* টেবিল ফরমেটে ডিটেইলস */}
                    <table className="w-full lg:w-3/4 mb-8">
                        <tbody>
                            <tr><td className="py-2 text-gray-500">Number of Pages:</td><td className="font-bold">{totalPages}</td></tr>
                            <tr><td className="py-2 text-gray-500">Publisher:</td><td className="font-bold">{publisher}</td></tr>
                            <tr><td className="py-2 text-gray-500">Year of Publishing:</td><td className="font-bold">{yearOfPublishing}</td></tr>
                            <tr><td className="py-2 text-gray-500">Rating:</td><td className="font-bold">{rating}</td></tr>
                        </tbody>
                    </table>

                    <div className="flex gap-4">
                        <button className="btn btn-outline px-8 border-gray-300 hover:bg-gray-100 hover:text-black">Read</button>
                        <button className="btn bg-[#50B1C9] text-white hover:bg-[#3e8da1] px-8 border-none">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;