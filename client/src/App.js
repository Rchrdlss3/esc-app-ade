import {useState} from 'react'
import { getTheme } from './functions/themeFunctions';
import { mainStyle } from './helper/styles/mainStyles';
import NavigationComponent from './components/generalComponents/NavigationComponent';

export default function App() {
  const [theme,setTheme] = useState(getTheme())

  return (
    <div style = {mainStyle(theme)}>
      <NavigationComponent theme = {theme} setTheme = {setTheme}/>
      Hello World
    </div>
  );
};