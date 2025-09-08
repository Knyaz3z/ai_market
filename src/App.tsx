
import './styles/null.scss'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Home} from "./pages/Home/Home.tsx";
import {Layout} from "./layouts/Layout/Layout.tsx";
import {News} from "./pages/News/News.tsx";
import {NotFound} from "./pages/NotFound/NotFound.tsx";

import './styles/global.scss'
import About from "./pages/About/About.tsx";
import Cases from "./pages/Cases/Cases.tsx";
import CaseDetails from "./pages/CaseDetails/CaseDetails.tsx";
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: 'news', element: <News/>},
                {path: 'about', element: <About/>},
                {path: 'cases', element: <Cases/>},
                {path: 'cases/:caseId', element: <CaseDetails/>},
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
