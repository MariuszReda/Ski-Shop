import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <Container component={Paper}>
            <Typography gutterBottom>Ops sorry not found</Typography>
            <Divider/>
            <Button fullWidth component={Link} to={"/catalog"}>GO BACK TO SHOP</Button>
        </Container>
    )    
}