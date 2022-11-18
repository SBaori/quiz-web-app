import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import Quiz from "./Quiz";
import '../styles/App.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/quiz",
        element: <Quiz />,
    },
]);

function App() {
    return (
        <div className="main-container">
            <Navbar />
            <RouterProvider router={router} />

        </div>

    );
}

export default App;
