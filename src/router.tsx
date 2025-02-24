import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookList from "./pages/BookList/BookList";
import RootLayout from "./RootLayout";

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
            }
        ]
    }
])

export default router;