import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
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
]);

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
