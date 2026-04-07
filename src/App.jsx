import { BrowserRouter, Route, Routes } from "react-router";
import Detail from "./routes/Detail.jsx";
import Home from "./routes/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/movie/:id"} element={<Detail />} />
                <Route path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
