import React from 'react'

export default function Navbar() {
    return ( <
        div style = {
            { backgroundColor: "grey" }
        } >
        <
        h1 > Meals < /h1> <
        a href = "localhost"
        style = {
            { margin: "10px", color: "white" }
        } > Home < /a> <
        a href = "localhost"
        style = {
            { margin: "10px", color: "white" }
        } > Order < /a> <
        a href = "localhost"
        style = {
            { margin: "10px", color: "white" }
        } > Contacts < /a> < /
        div >
    )
}