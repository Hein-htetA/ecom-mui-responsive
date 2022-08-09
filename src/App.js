import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar/index';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#fff"
        }}
      >
        <Appbar />
        <Banner />
        <Promotions />
        <Box display={'flex'} justifyContent='center' p={4}>
          <Typography variant='h4'>Our Products</Typography>
        </Box>
        <Products />
        <Footer />
        {
          /*
            searchBox
            appdrawer
          */
        }
        <Box sx={{width: '100%', height: '500px'}}></Box>
      </Container>  
    </ThemeProvider>
  );
}

export default App;
