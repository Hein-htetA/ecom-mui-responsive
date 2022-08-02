import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar/index';

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
        {
          /*
            Banner
            Promotions
            title
            Products
            footer
            searchBox
            appdrawer
          */
        }
        <Button variant="contained">Test</Button>

      </Container>  
    </ThemeProvider>
  );
}

export default App;
