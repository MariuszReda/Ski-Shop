import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props{
    message?: string;
}

export default function LoadingComponent({message='Loading...'}: Props){
    return(
        <Backdrop open={true} invisible={true} sx={{ justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress size={100} />
                <Typography variant="h4"  sx={{top:'60%',justifyContent:'center', position:'fixed'}}>{message}</Typography>
            </Box>
        </Backdrop>
    )
}