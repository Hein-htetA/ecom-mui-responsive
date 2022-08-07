import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
}));

export const ProductImage = styled('img')(({ src, theme}) => ({
    src: `url(${src})`,
    width: '100%',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px'
    }
}))