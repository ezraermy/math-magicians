import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './routes/Home';
import Calculators from './routes/Calculators';
import Quote from './routes/Quote';
import NoMatch from './routes/NoMatch';

function App() {
  return (
    <Routes path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="calculators" element={<Calculators />} />
      <Route path="Quote" element={<Quote />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
