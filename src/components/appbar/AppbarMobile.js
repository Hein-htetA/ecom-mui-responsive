import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { useState } from "react";
import AppDrawer from "../drawer.js";

export default function AppbarMobile({ matches }) {

    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }

    return (
        <AppbarContainer>
            <IconButton onClick={toggleDrawer}>
                <AppDrawer showDrawer={showDrawer}/>
                <MenuIcon />
            </IconButton>
            <AppbarHeader variant='h4' textAlign={'center'}>
                My Bags
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    )
}