import { Button, Container } from "@mui/material"
import { Product } from "../../app/models/Product"
import { ProductList } from "./ProductList"

interface Prop{
    products: Product[],
    addProduct: () => void
}

export default function Catalog(props: Prop){
    return (
        <Container >
            <ProductList products={props.products}></ProductList>
            <Button variant="contained" onClick={props.addProduct}>Add Product</Button>
        </Container>
)
}
