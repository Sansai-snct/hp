import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from './pages/Index';

const App: FC = () => {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
