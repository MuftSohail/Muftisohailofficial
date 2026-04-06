/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Fatwas } from './pages/Fatwas';
import { Videos } from './pages/Videos';
import { Books } from './pages/Books';
import { QnA } from './pages/QnA';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="fatwas" element={<Fatwas />} />
          <Route path="videos" element={<Videos />} />
          <Route path="books" element={<Books />} />
          <Route path="qna" element={<QnA />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
