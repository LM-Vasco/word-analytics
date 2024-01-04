import TextArea from "./TextArea"
import Statistics from "./Statistics"
import { useState } from "react"

function Container() {
    const [text, setText] = useState("")
    const numberOfCharacters = text.length

    return (
        <main className="container">
            <TextArea text={text} setText={setText} />
            <Statistics numberOfCharacters={numberOfCharacters} />
        </main>
    )
}

export default Container