import { Button } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="xl"
        sx={{
          
          "&:hover": {
            backgroundColor: "green"
          }
          
        }}
      >
        <Button 
       
        >
            test
        </Button>
      </Container>
    </div>
  );
}

export default App;
