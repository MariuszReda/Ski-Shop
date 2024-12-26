import { useEffect, useState } from "react"
import { Product } from "../models/Product";



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
      <h1>Ski-Shop</h1>
      <ul>
        {products.map((item, index)=>(
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
