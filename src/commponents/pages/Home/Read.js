import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { pre_get_data } from "../../../redux/action/action";
import { useSelector } from "react-redux/es/exports";
import Link from 'react-router-dom'

function Read() {
  const dispatch = useDispatch()
  const pro = useSelector(state => state.productsOpp.products)

useEffect(() => {
  dispatch(pre_get_data())
},[])

  console.log(pro);

  return <div>
    <div className="container">
      <div style={{display:'flex',justifyContent:'center',width:500,height:'480px'}}>
        
        {pro.map(single => (
           <Link>
            <div key={single.id} className="card">
            <img src={single.product_image} className="card-img-top" alt="..." height={'255px'} />
            <div className="card-body">
              <h5 className="card-title text-center">{single.product_title}</h5>
              <b>Prince</b> {single.product_price} Tk. <br/>
              <b>Categoty</b>  <br/>
              
            
            </div>
          </div>
           </Link>
        ))}
      </div>
    </div>
  </div>;
}

export default Read;
