import { Container } from "@mui/material"
import { Product } from "../../app/models/Product"
import { ProductList } from "./ProductList"
import { useEffect, useState } from "react"
import agent from "../../app/api/agent"



export default function Catalog(){

    const [products, setProduct] = useState<Product[]>([])

    useEffect(() =>{
        agent.catalog.list().then((products) =>{setProduct(products)}).catch(erorr=> console.log(erorr))
    }, []);
  


    return (
        <Container >
            <ProductList products={products}></ProductList>
        </Container>
)
}
