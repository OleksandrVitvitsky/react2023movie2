import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layots";
import {MoviesPage,MovieDetailsPage} from "./pages";
import {useAppDispatch} from "./hooks/useAppDispatch";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: '/movies/:id', element:  <MovieDetailsPage/>//, loader:({params:{id}})=>userService.getById(id)
            }

        ]
    }
])

export {
    router
}