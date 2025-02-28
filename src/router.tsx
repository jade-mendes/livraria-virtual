import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./RootLayout";
import Cart from "./pages/Cart/Cart";
import Book from "./pages/Book/Book";

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
                element: <Book />
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
])

export default router;