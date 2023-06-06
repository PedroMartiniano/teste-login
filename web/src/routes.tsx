import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Home from "./pages/home/home";

const RoutesWeb = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Signin />} />
                {/* <Route path="/signin" element={<Signin />} /> */}
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesWeb