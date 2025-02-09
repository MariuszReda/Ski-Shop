import { Container } from "@mui/material"
import { Product } from "../../app/models/Product"
import { ProductList } from "./ProductList"
import { useEffect, useState } from "react"
import agent from "../../app/api/agent"
import LoadingComponent from "../../app/layout/LoadingComponent"



export default function Catalog(){

    const [products, setProduct] = useState<Product[]>([])
    const [loading, setLoading] =   useState(true);

    useEffect(() =>{
        agent.catalog.list().then((products) =>{setProduct(products)})
        .catch(erorr=> console.log(erorr))
        .finally(() => setLoading(false))
    }, []);
  
    if(loading) return <LoadingComponent/>

    return (
        <Container >
            <ProductList products={products}></ProductList>
        </Container>
)
}
