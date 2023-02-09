import React from "react";
import {FilterType} from "./filter";

type currentMoneyProps ={
    currentMoney: CurrentMoneyItemType[]
    onClickFilteredHandler: (filterName: FilterType) => void
}
 type CurrentMoneyItemType = {
     banknote: string
     nominal: number
     number: string
 }

export const NewCom = (props: currentMoneyProps) => {
return (
    <div>
        <ul>
            {props.currentMoney.map((objFromMoneyArr) => {
                return (
                    <li key={objFromMoneyArr.number}>
                        <span> {objFromMoneyArr.banknote}</span>
                        <span> {objFromMoneyArr.nominal}</span>
                        <span> {objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
        <div style={{marginLeft: "30px"}}>
            <button onClick={() => props.onClickFilteredHandler("all")}>all</button>
            <button onClick={() => props.onClickFilteredHandler("ruble")}>rubel</button>
            <button onClick={() => props.onClickFilteredHandler("dollar")}>Dollar</button>
        </div>
    </div>
)
}