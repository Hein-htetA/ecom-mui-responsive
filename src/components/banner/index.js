import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImg, BannerShopButton, BannerTitile } from "../../styles/banner";

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImg src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitile variant="h2">New Bags</BannerTitile>
                <BannerDescription variant="subtitle">
                    Lorem ipsum dolor sit amet, cor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
                </BannerDescription>
                <BannerShopButton variant="contained">Show Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}