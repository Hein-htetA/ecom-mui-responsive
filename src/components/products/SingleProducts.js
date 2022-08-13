import { Stack } from "@mui/material";
import { Product, ProductActionWrapper, ProductImage, ProductFavButton, ProductActionButton, ProductAddCart } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

export default function SingleProduct({ product, matches, handleClickOpen }) {
    return(
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionWrapper>
                    <Stack direction='row'>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color='primary' />
                        </ProductActionButton>
                        <ProductActionButton onClick={handleClickOpen}>
                            <FitScreenIcon />
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductAddCart variant='contained'>Add to cart</ProductAddCart>
        </>
    )
}