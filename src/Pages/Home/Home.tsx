import * as React from "react"
import Greeting from "../../Components/Greeting/Greeting";
import Skills from "../../Components/Skills/Skills";

/**
 * Home page.
 */
export default function Home() {
    return (
        <div>
            <Greeting/>
            <Skills/>
        </div>
    )
}