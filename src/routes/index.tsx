import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Class } from '../pages/Class';
import { WhitePage } from '../pages/WhitePage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Class />
        }
        />
        <Route path="/page-white" element={
          <WhitePage />
        }
        />
      </Routes>
    </BrowserRouter>
  )
}
