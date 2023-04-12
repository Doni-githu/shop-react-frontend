import { useContext } from "react"
import Card from "../card/card"
import Modal from "../modal/Modal"
import './main.scss'
import { context } from "../../context"
const Main = () => {
    const { state } = useContext(context)

    return (
        <div className="center">
            <h1>Main</h1>
            <div className="cards">
                {state.data ? state.data.map((item) => (
                    <Card item={item} key={item.id} />
                )) : <p>Loading...</p>}
            </div>
            {state.modalData ? <Modal /> : null}
        </div>
    )
}

export default Main