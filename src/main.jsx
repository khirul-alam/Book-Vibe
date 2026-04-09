import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Components/MainLayout.jsx';
import Home from './Components/Home';
import ListedBooks from './Components/ListedBooks';
import ReadBooks from './Components/ReadBooks';
import WishlistBooks from './Components/WishlistBooks';
import PagesToRead from './Components/PagesToRead';
import BookDetails from './Components/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, // এখানে মেইন লেআউট থাকবে
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true, // ডিফল্টভাবে Read Books দেখাবে
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "read",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist",
            element: <WishlistBooks></WishlistBooks>
          },
        ]
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json') // সব ডেটা লোড করে আইডি দিয়ে ফিল্টার করার জন্য
      },
    ]
  }


]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
