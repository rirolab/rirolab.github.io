import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import People from './pages/People';
import Research from './research/Research';
import Publications from './publications/Publications';
import Positions from './positions/Positions';
// 다른 페이지 컴포넌트 import

function App() {
  return (
    <Router>
      <nav>
        {/* Navigation 메뉴 */}
        <ul>
          <li><Link to="/people">People</Link></li>
          <li><Link to="/research">Research</Link>
            <ul>
              <li><Link to="/research">Current Topics</Link></li>
              <li><Link to="/equipments">Equipments</Link></li>
            </ul>
          </li>
          <li><Link to="/publications">Publications</Link>
            <ul>
              <li><Link to="/publications">International</Link></li>
              <li><Link to="/domestic">Domestic</Link></li>
            </ul>
          </li>
          <li><Link to="/positions">Positions</Link>
            <ul>
              <li><Link to="/postdoc">Postdocs</Link></li>
              <li><Link to="/graduates">Graduates</Link></li>
              <li><Link to="/undergrads">Undergrads</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      
      <Routes>
        {/* 라우트 설정 */}
        <Route path="/people" component={People} />
        <Route path="/research" component={Research} />
        <Route path="/publications" component={Publications} />
        <Route path="/positions" component={Positions} />
        {/* 여기에 다른 페이지들에 대한 라우트를 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
