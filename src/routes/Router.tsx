import { Routes, Route } from 'react-router-dom';
import pageRoutes from './pageRoutes';

export default function Router() {
  return (
    <Routes>
      {pageRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
