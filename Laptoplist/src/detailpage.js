import React from "react";
import  { useState , useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function Detailpage(){
    const Navigater= useNavigate();
    const param = useParams();
    const api='https://6313993da8d3f673ffcdcc2d.mockapi.io/laptop';
    const [data,setData]=useState({});
    useEffect(
        ()=>{
            fetch(api+"/"+param.id)
            .then((responce)=>{console.log(responce);return responce.json()})
            .then((responce)=>{console.log(responce);setData(responce)})
        },[]);
    return (<>

        <div className="card" style={{"width": "18rem"}}>
        <img src={data.laptopimg} className="card-img-top"  />
        <div className="card-body">
            <h5 className="card-title">{data.laptopName}</h5>
            <p className="card-text">MFGDATE : {data.manufacheringdate}</p>
            <p className="card-text">Ram : {data.laptopram}</p>
            <p className="card-text">Hard Disk : {data.laptopHD}</p>
            <p className="card-text">Proseceer :  {data.laptopprocesser}</p>
            <p className="card-text">GraphicsCard : {data.laptopgraphics}</p>
            <button onClick={()=>{
                fetch(api+"/"+data.id,{method:"DELETE"}).then((res)=>{return res}).then((res)=>{Navigater('/laptop/Home')})
            }} className="btn btn-danger m-2">Delete</button>
             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Edit</button>

        </div>
        </div>


       

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{data.laptopName}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopName :</h2></div>
            <div className="col-6"><input type="text" value={data.laptopName} onChange={(e)=>{
                setData({...data,laptopName:e.target.value})
            }}/></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopimg :</h2></div>
            <div className="col-6"><input type="text" value={data.laptopimg} onChange={(e)=>{
                setData({...data,laptopimg:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopram :</h2></div>
            <div className="col-6"><input type="text" value={data.laptopram} onChange={(e)=>{
                setData({...data,laptopram:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopHD :</h2></div>
            <div className="col-6"><input type="text" value={data.laptopHD} onChange={(e)=>{
                setData({...data,laptopHD:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopprocesser :</h2></div>
            <div className="col-6"><input type="text" value={data.laptopprocesser} onChange={(e)=>{
                setData({...data,laptopprocesser:e.target.value})
            }} /></div>
        </div>
        <div className="row">
            <div className="col-6"><h2 className="btn btn-danger" >laptopgraphics :</h2></div>
            <div className="col-6"><input type="text" value={data.laptopgraphics} onChange={(e)=>{
                setData({...data,laptopgraphics:e.target.value})
            }} /></div>
        </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
            fetch(api+"/"+data.id,{
                method:"PUT",
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
        }}>SUBMIT</button>
      </div>
    </div>
  </div>
</div>
    </>)
}