
import './App.css'
import { MainView } from './components/main-view';
import { SideView } from './components/side-view';

function App() {
  const styles = { display: 'flex', height: 'auto', width: '100%'};
  return (
    <div style={styles}>
      <SideView />
      <MainView />
    </div>
  )
}

export default App
