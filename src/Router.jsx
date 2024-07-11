import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainRewards from "./Rewards/MainRewards/MainRewards";
import GiftCards from "./GiftCard/GiftCards";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path: "/",
                element: <MainRewards/>
            },
            {
                path: "/giftcards",
                element: <GiftCards/>
            }
        ]
    }
])