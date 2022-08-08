import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";

export default function ProductMeta({ product, matches }) {
    return(
        <ProductMetaWrapper>
            <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2} >
                {product.name}
            </Typography>
            <Typography variant={matches ? 'caption' : 'body'}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}