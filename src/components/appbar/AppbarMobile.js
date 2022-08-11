import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { useState } from "react";
import AppDrawer from "../drawer.js";
import Search from "../search";

export default function AppbarMobile({ matches, setShowSearch }) {

    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }

    return (
        <AppbarContainer>
            <IconButton onClick={toggleDrawer}>
                <MenuIcon />
                <AppDrawer showDrawer={showDrawer}/>
            </IconButton>
            <AppbarHeader variant='h4' textAlign={'center'}>
                My Bags
            </AppbarHeader>
            <IconButton onClick={setShowSearch}>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    )
}