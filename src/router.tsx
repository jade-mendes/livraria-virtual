import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./RootLayout";
import Cart from "./pages/Cart/Cart";
import BookDetails from "./pages/BookDetails/BookDetails";
import BooksByGenre from "./pages/BooksByGenre/BooksByGenre";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/book/:bookId",
                element: <BookDetails />
            },
            {
                path: "/genre/:genreName",
                element: <BooksByGenre />
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
])

export default router;