import { Card, CardMedia, CardContent, Typography, Button, CardActions, CardHeader, Avatar } from "@mui/material";
import { Product } from "../../app/models/Product";
import { Link } from "react-router-dom";

interface Prop{
    product: Product
}

export function ProductCard({product}: Prop){
    return(
        <Card>
             <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{sx:{fontWeight:'bolt', color:'primary.main'}}}
             />
            <CardMedia
            sx={{ height: 140, backgroundSize:'contain', backgroundColor:'primary.light' }}
            image={product.pictureUrl}
            title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5" component="div">
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">ADD TO CART</Button>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">VIEW</Button>
            </CardActions>
        </Card>
    )
}