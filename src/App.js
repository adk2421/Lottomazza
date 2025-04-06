import './styles/App.css';
import Layout from './layout/Layout';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

function App() {
  console.log(process.env.NODE_ENV)
  
  return (
    <div className="App">
      <Stack>
        <Layout />
      </Stack>
    </div>
  );
}

export default App;
