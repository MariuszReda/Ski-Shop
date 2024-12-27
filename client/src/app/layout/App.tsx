import { useEffect, useState } from "react"
import { Product } from "../models/Product";
import Catalog from "../../features/Catalog/Catalog";
import { Typography } from "@mui/material";



function App() {

  const [products, setProduct] = useState<Product[]>([])

  useEffect(() =>{
   fetch('http://localhost:5000/api/products')
   .then(response => response.json())
   .then(data=> setProduct(data)) 
  }, []);

  function addProduct(){
    setProduct(x=> [...x, {
      id: x.length + 101,
      name:"product" + (x.length +1), 
      price:(x.length*100+100),
      description: "text descrypiton",
      pictureUrl: "http://plaintext.com/200"
      }
  ]);
  }

  return (
    <div>
      <Typography variant="h1">Ski-Shop</Typography >
    <Catalog products={products} addProduct={addProduct}/>
    </div>
  )
}

export default App
