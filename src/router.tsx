import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/book",
        element: <Book/>
    }
])

export default router;