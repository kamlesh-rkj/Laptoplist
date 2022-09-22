
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
export default function Home(){
    
    const api='https://6313993da8d3f673ffcdcc2d.mockapi.io/laptop';
    const Navigater =useNavigate();
const [data,setData]=useState([])
    useEffect(
        ()=>{
            fetch(api)
            .then((responce)=>{console.log(responce);return responce.json()})
            .then((responce)=>{
                console.log(responce);
                setData(responce);
                        
            })
        },[]);
         
        const mapdata= data.map((md)=>{
            return(<>
                
                <div className=" hoveritem col-lg-3 col-md-4 col-sm-12">
                <div className="card shadow-lg  m-3 rounded-3  " style={{"width": "20rem"}}>
                    <img src={md.laptopimg} className="card-img-top rounded-3"  />
               <div className="card-body">
                <h5 className="card-title">{md.laptopName}</h5>
                    <p className="card-text">MFGDATE : {md.manufacheringdate}</p>
                    <p className="card-text">Ram : {md.laptopram}</p>
                    <p className="card-text">Hard Disk : {md.laptopHD}</p>
                    <p className="card-text">Proseceer :  {md.laptopprocesser}</p>
                    <p className="card-text">GraphicsCard : {md.laptopgraphics}</p>
                        <button onClick={()=>{Navigater('/laptop/Home/'+md.id)}}  className="btn btn-primary">details</button>
                </div>
                </div>
                </div>
               
                
            </>)
        })
    return (<>
      
    <div className="row p-2 m-4">
        
        {mapdata}
        
        </div>
      </>)
}