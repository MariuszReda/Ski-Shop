import { Button } from "@mui/material"
import { Product } from "../../app/models/Product"
import { ProductList } from "./ProductList"

interface Prop{
    products: Product[],
    addProduct: () => void
}

export default function Catalog(props: Prop){
    return (
        <>
            <ProductList products={props.products}></ProductList>
            <Button variant="contained" onClick={props.addProduct}>Add Product</Button>
        </>
)
}
