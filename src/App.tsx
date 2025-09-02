import './styles/null.scss'
import './styles/global.scss'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Home} from "./pages/Home/Home.tsx";
import {Layout} from "./layouts/Layout/Layout.tsx";
import {News} from "./pages/News/News.tsx";
import {NotFound} from "./pages/NotFound/NotFound.tsx";


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: 'news', element: <News/>},
                {path: '*', element: <NotFound/> }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router}/>

        </>
    )
}

export default App
