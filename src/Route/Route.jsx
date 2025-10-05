import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import BookDetails from "../pages/BookDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,

                loader: () => fetch('./booksData.json'),
                Component: Home,
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/bookDetails/:Id',
                loader: () => fetch('./booksData.json'),
                Component: BookDetails
            }
        ]


    },
]);

// git test 1 git
// git test 1 git2
// git test 1 git3
// git test 1 git4
// git test 1 git5