import Grid  from "@mui/material/Grid";
import { Product } from "../../app/models/Product";
import { ProductCard } from "./ProductCard";

interface Prop{
    products: Product[]
}

export function ProductList({products}: Prop){
    return(
        <Grid container spacing={4}>
            {products.map((product)=>(
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <ProductCard  product={product}></ProductCard>       
                </Grid>
            ))}
        </Grid>
    )
}