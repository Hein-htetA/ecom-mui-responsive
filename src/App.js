import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar/index';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer.js';
import Search from './components/search';
import { useState } from 'react';

function App() {

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((showSearch) => (!showSearch))
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#fff"
        }}
      >
        <Appbar setShowSearch={toggleSearch}/>
        <Banner />
        <Promotions />
        <Box display={'flex'} justifyContent='center' p={4}>
          <Typography variant='h4'>Our Products</Typography>
        </Box>
        <Products />
        <Footer />
        <AppDrawer />
        <Search showSearch={showSearch} setShowSearch={toggleSearch}/>
        <Box sx={{width: '100%', height: '500px'}}></Box>
      </Container>  
    </ThemeProvider>
  );
}

export default App;
