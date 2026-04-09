import React, { useEffect, useState } from 'react';
import BookCard from './BookCard'; // আমরা নিচে এই কম্পোনেন্টটি তৈরি করব

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // public ফোল্ডারে থাকা json ফাইল ফেচ করা
        fetch('/booksData.json') 
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error("ডেটা লোড করতে সমস্যা হয়েছে:", error));
    }, []);

    return (
        <div className='container mx-auto px-4'>
            <div className="p-5 text-2xl font-bold text-center bg-amber-200 rounded-2xl mt-2.5">
                Books ({books.length})
            </div>
            
            {/* গ্রিড লেআউট যাতে কার্ডগুলো সুন্দরভাবে সাজানো থাকে */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    books.map(book => (
                        <BookCard key={book.bookId} book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;