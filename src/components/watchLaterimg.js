import React from "react";
import "../styles/watchLater.css";
import { useSelector } from "react-redux";



const WatchLaterimg=()=>{
    const list = useSelector((state)=> state.list);
    // var images = list.map(function(image) {
    //     return (<Image src={image.thumbnail} rounded />);
    //    });
    
//    return( <img src={list.thumbnail} rounded />);
    list.array.forEach(element => {
        return (<Image src={image.thumbnail} rounded />);
    });
 }

export default WatchLaterimg;