import React from 'react'
import ReactDOM from 'react-dom/client'

function HelloWorldFunction(){
    return <h1>Hello World Component</h1>
}

function MyButton(){
    return <button> Click Me </button>
}

function MyComponent(){
    const name = "Sriram"
    return <h2> Hello {name}</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <MyComponent/>);
