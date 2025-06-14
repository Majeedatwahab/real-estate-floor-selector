import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TowerOverview from './components/TowerOverview';
import FloorView from './components/FloorView';
import Layouts from './components/Layouts';
import LayoutDetail from './components/LayoutDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>404 : No match found</div>} />

        <Route path="/" element={<TowerOverview />} />
        <Route path="/floors/:towerId" element={<FloorView />} />
        <Route path="/layouts/:towerId/:floorId" element={<Layouts />} />
        <Route path="/layout/:layoutId" element={<LayoutDetail />} />






        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
