import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from "../pages/home/home";
import Signin from "../pages/signin/signin"
import Signup from "../pages/signup/signup"


const Private = ({ Item }) =>{
    const signed = false

    return signed > 0 ? <Item /> : <Signin />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home}/>}/>
                    <Route path="/" element={<Signin/>} />
                    <Route exact path="/signup" element={<Signup/>} />
                    <Route path="*" element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp