import React from "react"
import{Hello} from "./hello"
import { Welcome } from "./Welcome"
export class App extends React.Component{
    render(){
        return (
        <div>
            <h1><Hello/></h1>
            <p>What a beautiful day</p>
            <p><Welcome /></p>
        </div>
        )
    }
}


