import React from "react";
const Orders=(props)=>{

    const tables = [...new Set(props.valu.map((val) => val.table))];

    return (
      <div>
        <h2>Orders</h2>
        {tables.map((table) => (
          <div key={table}>
            
            <ul>
              {props.valu
                .filter((val) => val.table === table)
                .map((val) => (
                  <li key={val.idi}>
                    id={val.idi} amount={val.productPrice} Product Name={val.productName}
                  </li>
                ))}
            </ul>
           <h3>Total value worth of products:</h3>
          </div>
        ))}
      </div>
    );
  };


  export default Orders;