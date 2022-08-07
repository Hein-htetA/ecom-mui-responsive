import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar/index';
import Banner from './components/banner';
import Promotions from './components/promotions';

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
        {
          /*
            title
            Products
            footer
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
