import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout"
import {HomePage} from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage/>}></Route>
            < Route path="/user-profile" element={<span> User Profile</span >} />
            < Route path="*" element={< Navigate to="/" />} />
        </Routes >
    )
}

export default AppRoutes;