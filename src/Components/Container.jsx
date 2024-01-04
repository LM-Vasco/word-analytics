import TextArea from "./TextArea"
import Statistics from "./Statistics"
import { useState } from "react"

function Container() {
    const [text, setText] = useState("")

    const stats = {
        numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
        numberOfCharacters: text.length,
        instagramCharactersLeft: 280 - text.length,
        facebookCharactersLeft: 2200 - text.length
    }

    return (
        <main className="container">
            <TextArea text={text} setText={setText} />
            <Statistics stats={stats}
            />
        </main>
    )
}

export default Container