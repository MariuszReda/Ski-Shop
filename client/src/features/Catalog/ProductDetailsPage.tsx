import { Divider, Grid2,  Table,  TableBody,  TableCell,  TableContainer,  TableRow,  Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";
import agent from "../../app/api/agent";

export default function ProductDetailsPage(){

    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        id && agent.catalog.productDetails(parseInt(id))
        .then(response=> setProduct(response))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false));
    }, [id])

    if(loading) return <h2>Loading...</h2>
    if(!product) return <h2>Product not found</h2>

    return(
        <Grid2 container spacing={4} sx={{mt:8}}>
           <Grid2 size={{xs:4, md:6}}>
                <img src={product.pictureUrl} style={{width:'100%'}}></img>            
           </Grid2>
           <Grid2 size={{xs:4, md:6}}>
                    <Typography variant="h3" color="secondary.main">{product.name}</Typography>
                    <Divider sx={{mb:2}}/>
                    <Typography variant="h4" color="secondary.main">${((product.price)/100).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow> 
                                    <TableCell>
                                        Name
                                    </TableCell>
                                    <TableCell>
                                    {product.name}
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell>
                                        Description
                                    </TableCell>
                                    <TableCell>
                                    {product.description}
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell>
                                        Type
                                    </TableCell>
                                    <TableCell>
                                    {product.type}
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell>
                                        Brand
                                    </TableCell>
                                    <TableCell>
                                    {product.brand}
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell>
                                        Quantity in stock
                                    </TableCell>
                                    <TableCell>
                                    {product.quantityInStock}
                                    </TableCell>
                                </TableRow>
                            </TableBody>

                        </Table>
                    </TableContainer>     
           </Grid2>
        </Grid2>
    );
}