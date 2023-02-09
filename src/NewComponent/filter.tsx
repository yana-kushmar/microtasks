import React, {useState} from "react";
import {NewCom} from "./NewCom";


export type FilterType ="all" | "dollar" | "ruble"

export const FilterTest = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])


    const [filter, setFilter] = useState("all")

    let currentMoney = money.filter(el => {
        if (filter === "ruble") {
            return el.banknote === "ruble"
        }
        if (filter === "dollar") {
            return el.banknote === "dollar"
        }
        return el;
    });


    const onClickFilteredHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
console.log(nameButton)

    }

    return (

        <NewCom  currentMoney={currentMoney} onClickFilteredHandler={onClickFilteredHandler}/>
        // <div>
        // <ul>
        //     {currentMoney.map((objFromMoneyArr) => {
        //         return (
        //             <li key={objFromMoneyArr.number}>
        //                 <span> {objFromMoneyArr.banknote}</span>
        //                 <span> {objFromMoneyArr.nominal}</span>
        //                 <span> {objFromMoneyArr.number}</span>
        //             </li>
        //         )
        //     })}
        // </ul>
        //     <div style={{marginLeft: "30px"}}>
        //     <button onClick={() => onClickFilteredHandler("all")}>all</button>
        //     <button onClick={() => onClickFilteredHandler("ruble")}>rubel</button>
        //     <button onClick={() => onClickFilteredHandler("dollar")}>Dollar</button>
        // </div>
        // </div>
    );
}
