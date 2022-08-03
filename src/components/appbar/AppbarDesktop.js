import { IconButton, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';

export default function AppbarDesktop({ matches }) {
    return (
        /**
         * Appbar Container
         * Header
         * List
         */
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type='row' sx={{'& > div': {
                width: '10vw'
            }}}>
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact us"/>
                <ListItemButton>
                    
                        <SearchIcon />
                  
                </ListItemButton>
            </MyList>
        </AppbarContainer>
    )
}