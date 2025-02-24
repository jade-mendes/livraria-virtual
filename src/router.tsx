import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookList from "./pages/BookList/BookList";
import RootLayout from "./RootLayout";
import Cart from "./pages/Cart/Cart";

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
                path: "/book-list",
                element: <BookList/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
])

export default router;