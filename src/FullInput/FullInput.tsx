import {ChangeEvent, useState} from "react";
import React from "react";
import s from "./FullInput.module.css"

type FullInputPropsType = {
    addMessage: (title: string) => void

}
export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState("")
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
    }

    return (
        <div className={s.input}>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>

        </div>
    )
}
