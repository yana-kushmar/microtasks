import React from "react";


type ButtonAddPropsType = {
    name: string
    callBack: () =>  void
}

export const ButtonAdd = (props: ButtonAddPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}
