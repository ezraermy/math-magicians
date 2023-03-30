import MyCalc from './components/Calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <div>
      <MyCalc />
      <Quotes apiEndpoint="https://api.adviceslip.com/advice" />
    </div>
  );
}

export default App;
