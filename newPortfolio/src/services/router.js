import { createBrowserRouter } from "react-router-dom";
import HomePage from '../components/HomePage';
import Main from '../components/Main';



export default function router() {
    return createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            children: [
                { index: true, element: <Main /> }
            ]
        },
    ]);
}