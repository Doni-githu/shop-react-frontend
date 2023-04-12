import { createContext, useReducer } from "react";

const initialValue = {
    data: [
        {
            id: 1,
            src: "data:image/jpeg;base64,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",
            title: "ASdadad",
            description: "Asdsadadsad AsdsadadsadAsdsadadsadAsdsadadsad",
            cost: 102,
            like: 40,
            comment: [
                {
                    id: 1,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 2,
                    title: "Dadddadadawdaw",
                    user: 3,
                },
                {
                    id: 3,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 4,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 5,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 6,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 7,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 8,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 9,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 10,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 11,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
                {
                    id: 12,
                    title: "Dadddadadawdaw",
                    user: 2,
                },
            ],
        },
        {
            id: 2,
            src: "data:image/jpeg;base64,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",
            title: "ASdadad",
            description: "AsdsadadsadAsdsadadsadAsdsadadsadAsdsadadsad",
            cost: 1200,
            like: 500,
            comment: [
                {
                    id: 1,
                    title: "Dadddadadawdaw",
                    user: 2,
                }
            ],
        },
        {
            id: 3,
            src: "data:image/jpeg;base64,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",
            title: "ASdadad",
            description: "AsdsadadsadAsdsadadsadAsdsadadsadAsdsadadsad",
            cost: 120,
            like: 5000,
            comment: [
                {
                    id: 1,
                    title: "Dadddadadawdaw",
                    user: 2,
                }
            ],
        },
        {
            id: 4,
            src: "data:image/jpeg;base64,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",
            title: "ASdadad",
            description: "AsdsadadsadAsdsadadsadasdsadadsadAsdsadadsad",
            cost: 12,
            like: 5000,
            comment: [
                {
                    id: 1,
                    title: "Dadddadadawdaw",
                    user: 2,
                }
            ],
        },
    ],
    counter: 0,
    modalData: null
}

export const context = createContext()


const reducer = (state = initialValue, actions) => {
    const { type, payload } = actions
    switch (type) {
        case "up_counter":
            const NewCounter = state.counter + payload
            return { ...state, counter: NewCounter }
        case "MODAL_DATA":
            return { ...state, modalData: payload }
        case "COMMENT_DATA":
            const { arr, news } = payload
            const newArr = { ...state.modalData, comment: [...arr.comment, news] }
            return { ...state, modalData: newArr }
        default:
            return state
    }
}

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
}