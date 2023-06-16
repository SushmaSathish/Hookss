import React,{useState} from 'react';
import SellerAdmin from './components/Seller Admin/SellerAdmin';
import Orders from './components/order/order';

function App() {
  const [productName,setproduct]=useState([])
 const displayhandler=(Orders)=>{

    setproduct((prev)=>{
      return[...prev,Orders]
    })

 }
  return (
    <div>
    <SellerAdmin onorder={displayhandler}/>
    <Orders valu={productName}/>
    </div>
  );
}

export default App;
