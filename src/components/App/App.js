import './App.css';
import BarChart from '../BarChart/BarChart';
import { initialDataFirst, initialDataSecond } from '../../utils/initialData';

function App() {
  return (
    <section className="app">
      <div className="app__conditional-container">
        <BarChart data={initialDataFirst} />
      </div>
      <div className="app__conditional-container">
        <BarChart data={initialDataSecond} />
      </div>
    </section>
  );
}

export default App;
