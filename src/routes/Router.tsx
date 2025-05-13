import { Routes, Route } from 'react-router-dom';

import pageRoutes from '@/routes/pageRoutes';

const Router = () => {
  return (
    <Routes>
      {pageRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
export default Router;
