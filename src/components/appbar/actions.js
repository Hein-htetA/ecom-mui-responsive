import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart';
import FavouriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person'
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";

export default function Actions({ matches }) {
    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
    return (       
        <Component>
            <MyList type="row">
                <ListItemButton sx={{justifyContent: 'center'}}>
                    <ListItemIcon sx={{justifyContent: 'center'}}>
                        <ShoppingCardIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton sx={{justifyContent: 'center'}}>
                    <ListItemIcon sx={{justifyContent: 'center'}}>
                        <FavouriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton sx={{justifyContent: 'center'}}>
                    <ListItemIcon sx={{justifyContent: 'center'}}>
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </MyList>
        </Component>       
    )
}
