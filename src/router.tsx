import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
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
                path: "/book",
                element: <Book/>
            }
        ]
    }
])

export default router;