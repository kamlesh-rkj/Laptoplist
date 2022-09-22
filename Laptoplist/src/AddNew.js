import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNew(){
   const Navigater = useNavigate();
   const api='https://6313993da8d3f673ffcdcc2d.mockapi.io/laptop';
   const [data,setData] = useState({});
   
   console.log(data);
   return (
   <>
   <div className=" container card">
    <div className=" card-body">
    <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopName :</h2></div>
            <div className="col-6"><input type="text"  onChange={(e)=>{
                setData({...data,laptopName:e.target.value})
            }}/></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopimg :</h2></div>
            <div className="col-6"><input type="text" onChange={(e)=>{
                setData({...data,laptopimg:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopram :</h2></div>
            <div className="col-6"><input type="text"  onChange={(e)=>{
                setData({...data,laptopram:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopHD :</h2></div>
            <div className="col-6"><input type="text"  onChange={(e)=>{
                setData({...data,laptopHD:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopprocesser :</h2></div>
            <div className="col-6"><input type="text"  onChange={(e)=>{
                setData({...data,laptopprocesser:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopgraphics :</h2></div>
            <div className="col-6"><input type="text"  onChange={(e)=>{
                setData({...data,laptopgraphics:e.target.value})
            }} /></div>
        </div>
    <button className="btn btn-outline-warning" onClick={()=>{
      fetch(api,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then((res)=>{
        return res;
     })
      .then((res)=>{
         Navigater('/laptop/Home');
      })
    }} >
      Add NEW laptop
    </button>
    </div>
    </div>
   </>)
    
}
