import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layots";
import {HomePage, MoviesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true,
                element: <Navigate to={'home'}/>
            },
            {
                path: 'home', element: <HomePage/>, children:[
                    {
                        path: 'movies', element: <MoviesPage/>
                    }
                ]
            }

        ]
    }
])

export {
    router
}