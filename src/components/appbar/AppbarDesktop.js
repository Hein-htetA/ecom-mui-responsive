import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import Search from "../search";

export default function AppbarDesktop({ matches, setShowSearch }) {
    return (
        /**
         * Appbar Container
         * Header
         * List
         */
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type='row'>
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact us"/>
                <ListItemButton  onClick={setShowSearch}>
                    <ListItemIcon>
                        <SearchIcon />  
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
    )
}