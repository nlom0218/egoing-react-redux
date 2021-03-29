import { createStore } from "redux"

const initState = {
    number: 0,
    // webApp
    welcome_content: {
        title: "WEB",
        desc: "Hello, WEB!"
    },
    seleted_content_id: 1,
    contents: [
        { id: 1, title: "HTML", desc: "HTML is ..." },
        { id: 2, title: "CSS", desc: "CSS is ..." },
        { id: 3, title: "JS", desc: "JS is ..." }
    ],
    upDateMode: false,
    createMode: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "INCREASE":
            return { ...state, number: state.number + action.size }
        case "CONTENT":
            return { ...state, seleted_content_id: action.id }
        case "UPDATE":
            return {
                ...state, contents: state.contents.map(content => {
                    if (content.id === state.seleted_content_id) {
                        return { ...content, title: action.upDateTitle, desc: action.upDateDesc }
                    }
                    return content
                }), upDateMode: false
            }
        case "DELETE_CONTENT":
            return {
                ...state, contents: state.contents.filter(content => {
                    return content.id !== state.seleted_content_id
                })
            }
        case "CREATE":
            return {
                ...state,
                contents: [...state.contents, { id: action.id, title: action.title, desc: action.desc }],
                createMode: false,
                seleted_content_id: action.id
            }
        case "CHANGE_UPDATE_MODE":
            return { ...state, upDateMode: true }
        case "CHANGE_CREATE_MODE":
            return { ...state, createMode: true }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store


