import React from "react";

export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]


type AllCars = {
    topCars: TopCarsType[]
}
type TopCarsType = {
    manufacturer: string
    model: string
}





export const Cars = (props: AllCars) => {
    return(
        <ul>
            {props.topCars.map((el, index) =>
                <li key={index}>
                    <div>
                    {el.manufacturer} {el.model}
                </div>
                </li>)}
        </ul>
    )
}