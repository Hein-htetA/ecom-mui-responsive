import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { products } from "../../data";

export default function Products() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts = products.map(() => (
        <Grid
            item key={products.id} display='flex' flexDirection={'column'} alignItems='center' 
        >
            
        </Grid>
    ))

    return(
        <Container>
            <Grid 
                container 
                justifyContent={'center'}
                sx={{ margin: '20px 4px 10px 4px'}}
            >

            </Grid>
        </Container>
    )
}