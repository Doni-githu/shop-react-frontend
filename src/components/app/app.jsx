import { Route, Routes } from "react-router-dom"
import Main from "../main/main"
import Navbar from "../navbar/navbar"


const App = () => {
    return (
        <div className="conteiner">
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Main />} />
            </Routes>
        </div>
    )
}

export default App