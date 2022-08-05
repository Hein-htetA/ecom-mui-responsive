import { IconButton, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart';
import { MyList } from "../../styles/appbar";
import { CenterFocusStrong } from "@mui/icons-material";

export default function Actions() {
    return (
        <MyList type="row" sx={{
        }}>
                <IconButton sx={{flexGrow: 1, borderRadius: 0, justifyContent: 'flex-start', paddingLeft: '15px'}}>
                    <ShoppingCardIcon />
                </IconButton>     
                <IconButton sx={{flexGrow: 1, borderRadius: 0, justifyContent: 'flex-start', paddingLeft: '15px'}}>
                    <ShoppingCardIcon />
                </IconButton>       
                <IconButton sx={{flexGrow: 1, borderRadius: 0, justifyContent: 'flex-start', paddingLeft: '15px'}}>
                    <ShoppingCardIcon />
                </IconButton>
     
        </MyList>
    )
}
/*
                <IconButton>
                    <ShoppingCardIcon />
                </IconButton>     
                <IconButton>
                    <ShoppingCardIcon />
                </IconButton>       
                <IconButton >
                    <ShoppingCardIcon />
                </IconButton>  */        