import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar,  Badge,  Box,  IconButton,  List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink, Link } from "react-router-dom";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}



export default function Header({darkMode, handleThemeChange}: Props){

    const midLinks = [
        {title:'Catalog', path:'/catalog'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
    ]
    
    const rightLink = [
        {title:'Registry',path:'/registy'},
        {title:'Login', path:'/login'}
    ]

    const navTheme = {
        textDecoration:'none',
        color: 'inherit', 
        '&:hover':{color:"grey.500"}, 
        '&.active':{color:"text.secondary"},
        typography:'h6'
    }


    return(
        <AppBar position='static'  sx={{mb:4}}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography variant="h6" component={Link} to='/' sx={navTheme}>Ski-Shop</Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Box>

            <Box>
                <List sx={{display:'flex'}}>
                {midLinks.map(({title, path}) => (
                            <ListItem
                            key={path}
                            component={NavLink}
                            to={path}
                            sx={navTheme}>

                                {title.toUpperCase()}
                            </ListItem>
                        ))} 
                </List>
            </Box>

            <Box sx={{display:'flex', alignItems:'center'}}>
                <IconButton size="large" edge="start" sx={{color:'inherit', mr:2}}>
                    <Badge badgeContent="3" color='secondary'>
                        <ShoppingCartIcon sx={navTheme}>
                        </ShoppingCartIcon>  
                    </Badge>
                </IconButton>

                <List sx={{display:'flex'}}>
                {rightLink.map(({title, path}) => (
                            <ListItem
                            key={path}
                            component={Link}
                            to={path}
                            sx={navTheme}>

                                {title.toUpperCase()}
                            </ListItem>
                        ))} 
                </List>
            </Box>


            </Toolbar>
        </AppBar>
    )
}
// 