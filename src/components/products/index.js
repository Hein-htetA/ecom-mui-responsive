import { Container, Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import { products } from "../../data";
import SingleProduct from "./SingleProducts";
import SingleProductDesktop from './SingleProductDesktop';

export default function Products() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts = products.map((product) => (
        <Grid
            item key={product.id} 
            display='flex' 
            alignItems={'center'} 
            flexDirection={'column'}
            xs={6}
            md={4}
        >
            {matches ? <SingleProduct product={product} matches={matches} /> :
                    <SingleProductDesktop product={product} matches={matches} /> }
        </Grid>
    ))

    return(
        <Container>
            <Grid 
                container 
                justifyContent={'center'}
                sx={{ margin: '20px 4px 10px 4px'}}
                spacing= {{xs: 2, md: 5}}
            >
                {renderProducts}
            </Grid>
        </Container>
      
    )
}