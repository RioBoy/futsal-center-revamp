import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/home/Home.page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
