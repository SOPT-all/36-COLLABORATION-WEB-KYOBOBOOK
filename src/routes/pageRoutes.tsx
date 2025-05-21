import routePath from '@/routes/routePath';
import Home from '@/pages/Home/Home';
import HomeBest from '@/pages/HomeBest/HomeBest';
import HomeBestDetail from '@/pages/HomeBestDetail/HomeBestDetail';
import HomeBestDetailCart from '@/pages/HomeBestDetailCart/HomeBestDetailCart';
import ButtonChipTestPage from '@/pages/ButtonChipTestPage';

const pageRoutes = [
  { path: routePath.HOME, element: <Home /> },
  { path: routePath.HOME_BEST, element: <HomeBest /> },
  { path: routePath.HOME_BEST_DETAIL, element: <HomeBestDetail /> },
  { path: routePath.HOME_BEST_DETAIL_CART, element: <HomeBestDetailCart /> },
  { path: routePath.TEST_BUTTON_CHIP, element: <ButtonChipTestPage /> },
];

export default pageRoutes;
