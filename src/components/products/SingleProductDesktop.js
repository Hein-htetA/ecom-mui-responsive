import { Stack } from "@mui/material";
import { Product, ProductActionWrapper, ProductImage, ProductFavButton, ProductActionButton, ProductAddCart } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useState } from 'react';


export default function SingleProductDesktop({product, matches, handleClickOpen}) {

    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return(
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton isFav={0}>
                    <FavoriteIcon />
                </ProductFavButton>
                
                {showOptions && <ProductAddCart variant='contained' show={showOptions}>
                    Add to cart
                </ProductAddCart>}

                <ProductActionWrapper show={showOptions}>
                    <Stack direction='column'>
                        <ProductActionButton>
                            <ShareIcon color='primary' />
                        </ProductActionButton>
                        <ProductActionButton onClick={handleClickOpen}>
                            <FitScreenIcon />
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />
        </>
    )
}