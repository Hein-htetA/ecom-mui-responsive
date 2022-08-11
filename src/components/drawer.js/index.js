import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material"
import { Box } from "@mui/system"
import { Colors } from "../../styles/theme"

export default function AppDrawer({ showDrawer }) {

    const list = ['Home', 'Categories', 'Products', 'About us', 'Contact us'].map((item) => (
        <Box 
            key={item} 
        >
            <List>
                <ListItemButton>
                    <ListItemText>
                        {item}
                    </ListItemText>
                </ListItemButton>
            </List>
            <Divider variant="middle" sx={{ borderColor: Colors.light_gray, opacity: '0.8' }}/>
        </Box>
    ))

    return (
        <Drawer 
            open={ showDrawer } 
            PaperProps={{
                sx: {
                    backgroundColor: 'primary.main',
                    borderRadius: '0px 100px 0px 0px',
                    borderRight: `1px solid ${Colors.secondary}`,
                    width: '250px',
                    color: 'secondary.main',
                }
            }}
        >
            {list}
        </Drawer>
    )
}