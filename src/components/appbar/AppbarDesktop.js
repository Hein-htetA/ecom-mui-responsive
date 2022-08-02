import { ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";

export default function AppbarDesktop({ matches }) {
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
            </MyList>
        </AppbarContainer>
    )
}