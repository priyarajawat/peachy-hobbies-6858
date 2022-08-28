import { Route, Routes } from "react-router-dom";
import Extra from "./Extra";
import Main from "./main/main";
import Signin from "./Signin";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<Signin/>} />
            <Route path="/extra" element={<Extra/>} />
        </Routes>
    )
}