import { List } from "@mui/material";
import { Product } from "../../app/models/Product";
import { ProductCard } from "./ProductCard";

interface Prop{
    products: Product[]
}

export function ProductList({products}: Prop){
    return(
        <List>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}></ProductCard>       
            ))}
        </List>
    )
}