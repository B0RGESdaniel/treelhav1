import { BrowserRouter, Routes, Route  } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}