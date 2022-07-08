import './App.css';
import { AnalyticsDashboard } from './Components/AnalyticsDashboard';
import { ChatBox } from './Components/ChatBox';
import { Header } from './Components/Header';
import { TaskList } from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <Header/>
      <AnalyticsDashboard/>
      <div className="features">
        <TaskList/>
        <ChatBox/>
      </div>
    </div>
  );
}

export default App;
