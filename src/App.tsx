import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Body} from './site/Body';
import {Header} from "./site/Header";
import {Cars, topCars} from "./NewComponent/MethodMap";
import {Button} from "./Components/Button";
import {FilterTest} from './NewComponent/filter';
import {FullInput} from "./FullInput/FullInput";
import {Input} from "./FullInput/Input";
import {ButtonAdd} from "./FullInput/Button";

function App() {

    const button1Foo = (sub: string, age: number, country: string) => {
        console.log(sub, age, country)
    }

    const button2Foo = (sub: string, age?: number) => {
        console.log(sub)
    }
    const button3Foo = (text: string) => {
        console.log(text)
    }

    // let a = 1
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)

        console.log(a)
    }


    const onClickHandler2 = () => {
        setA(0)

        console.log(a)
    }

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState('')
    console.log(title)
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }

    const callButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div>
            <div>
                <h1>{a}</h1>
                <button onClick={onClickHandler}>Number</button>
                <button onClick={onClickHandler2}>0</button>
            </div>
            <div>
                <Header title={"new body"}/>
                <Body titleForBody={"new body"}/>
                <Cars topCars={topCars}/>
                <Button name={"MyYouTubeChanel-1"} callBack={() => button1Foo("im Yana", 22, "Minsk")}/>
                <Button name={"MyYouTubeChanel-2"} callBack={() => button2Foo("im Igor")}/>
                <Button name={"Stupid"} callBack={() => button3Foo("im stupid button")}/>
                <FilterTest/>
                {/*<FullInput addMessage={addMessage}/>*/}
                <Input setTitle={setTitle} title={title} />
                <ButtonAdd  name={"+"} callBack={callButtonHandler}/>

                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>

                    )

                })}
            </div>

        </div>

    )
}

export default App;