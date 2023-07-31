import React from "react";

const Card = (props) => {
    return(
        <div className="px-5 py-5 text-xl w-[30rem] bg-slate-200 rounded-[10px] border-2 border-slate-500  h-15 mx-[90px] my-[20px]">
            <img src={props.flags} alt="picture" className="w-50 rounded-[10px] pb-5 h-[350px]"/> 
            <div className="py-1">страна - {props.name}</div>
            <div className="py-1">площадь - {props.area}</div>
            <div className="py-1">границы - {props.borders}</div>
            <div className="py-1">столица - {props.capital}</div>
            <div className="">население - {props.population}</div>
            <a>{props.maps}</a>
        </div>
    )
}

export default Card