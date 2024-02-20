import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VisitantePage from "../pages/VisitantePage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<VisitantePage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/admin"} element={<ProtectedWay><AdminPage /></ProtectedWay>} />
            </Routes>
        </BrowserRouter>
    );
}

const ProtectedWay = ({ children }) => {
    const { estaLogado } = useContext(AuthContext);
    return estaLogado ? children : <Navigate to={"/login"} />
}

export default Ways;