import './App.css';
import Navigation from './Navigation';

export default function App() {
  const theme = Theme.createFromUAParser();


  return (
    <div className="App" style={{ backgroundColor: theme.main }}>
      <Navigation />
      Hello
    </div>
  );
}
