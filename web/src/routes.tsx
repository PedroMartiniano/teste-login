import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Home from "./pages/home/home";

// const PrivateRoute = ({ element, isAuthenticated, ...props }) => {
//     return isAuthenticated ? (
//       <Route {...props} element={element} />
//     ) : (
//       <Navigate to="/signin" replace />
//     );
//   };

const RoutesWeb = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const updateIsAuthenticated = useCallback((value) => {
    //     setIsAuthenticated(value);
    //   }, []);

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