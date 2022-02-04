import { ProgressContextProvider } from './contexts/ProgressContext';
import { Router } from './routes';
import './styles/global.scss';

function App() {
  return (
    <ProgressContextProvider>
      <Router />
    </ProgressContextProvider>
  );
}

export default App;
