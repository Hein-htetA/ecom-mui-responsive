import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import theme, { Colors } from '../../styles/theme';
import { Box, IconButton, styled, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Product, ProductImage } from '../../styles/products';
import IncDec from '../ui';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Transition(props, ref) {
  return <Slide direction="down" {...props}/>;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(4),
    alignItems: 'center'
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5
}));


export default function ProductDetail({ open, handleClose, product }) {

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        variant='permanat'
        fullScreen
      >
        <DialogTitle
            sx={{
                background: Colors.secondary
            }}
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                Product Title
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
          <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>         
            <img src={product.image} alt='product' style={{marginRight: '20px'}}/>     
            <ProductDetailInfoWrapper>
                <Typography variant='subtitle1'>SKU 123</Typography>
                <Typography variant='subtitle1'>Availability: 5 in stock</Typography>
                <Typography variant='h4' sx={{ lineHeight: 2 }}>
                    {product.name}
                </Typography>
                <Typography variant='body'>
                    {product.description}
                    {product.description}
                    {product.description}
                </Typography>
                <Box
                    sx={{ mt: 4 }}
                    display='flex'
                    alignItems={'center'}
                    justifyContent='space-between'
                >
                    <IncDec />
                    <Button variant='contained'>Add to card</Button>
                </Box>
                <Box 
                    display={'flex'}
                    alignItems='center'
                    sx={{ mt: 4, color: Colors.light }}
                >
                    <FavoriteIcon sx={{ mr: 2 }} />
                    Add to Wishlist
                </Box>
                <Box 
                    sx={{ mt: 4, color: Colors.light }}
                >
                    <FacebookIcon sx={{ mr: theme.spacing(4) }} />
                    <TwitterIcon sx={{ mr: theme.spacing(4) }} />
                    <InstagramIcon sx={{ mr: theme.spacing(4) }} />
                </Box>
            </ProductDetailInfoWrapper>
          </ProductDetailWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
}
