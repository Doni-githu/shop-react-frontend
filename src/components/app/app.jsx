import { Route, Routes } from "react-router-dom"
import Main from "../main/main"
import Navbar from "../navbar/navbar"
import GlobalChat from "../globalChat/globalChat"


const App = () => {
    return (
        <div className="conteiner">
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/globalChat"} element={<GlobalChat />} />
            </Routes>
        </div>
    )
}

export default App