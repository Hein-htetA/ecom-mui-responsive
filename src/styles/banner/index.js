import { Colors } from "../theme";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";

export const BannerContainer = styled(Box) (({ theme }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: 0,
    background: Colors.light_gray,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerImg = styled('img') (({ src, theme }) => ({
    src: `url(${src})`,
    width: '500px',
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px'
    }
}));

export const BannerContent = styled(Box) (() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px',
}));

export const BannerTitile = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    }
}));