import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css';
export default function Body() {
    const [items, setitems] = useState([]);
    useEffect(
        () => {
            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(res => {
                setitems(res.data.meals);
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })

        }, []
    );
    const itemslist = items.map((obj) => {
        return <div className = "col-md-4" >
            <
            p > { obj.strMeal } < /p> <
        img src = { obj.strMealThumb }
        className = 'img-fluid' / >
            <
            /
        div >
    });
    return ( <
        div >
        <
        div className = "row" > { itemslist }

        <
        /div> < /
        div >
    )
}