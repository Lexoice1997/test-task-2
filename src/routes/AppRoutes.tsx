import { withErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../components/RequireAuth/RequireAuth';
import {
  CREATE_APARTMENT_PAGE,
  CREATE_ROOM_PAGE,
  LOGIN_PAGE,
  MAIN_PAGE,
} from '../helpers/constants/routeConst';
import ErrorPage from '../pages/Error/Error';
import CreateApartment from '../pages/createApartment/CreateApartment';
import CreateRoom from '../pages/createRoom/CreateRoom';
import Login from '../pages/login/Login';
import Main from '../pages/main/Main';
import AppLayout from '../components/Layouts/AppLayout';

function AppRoutes() {
  return (
    <Routes>
      <Route path={LOGIN_PAGE} element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
      <Route element={<RequireAuth />}>
        <Route path={MAIN_PAGE} element={<AppLayout />}>
          <Route path={MAIN_PAGE} element={<Main />} />
          <Route path={CREATE_APARTMENT_PAGE} element={<CreateApartment />} />
          <Route path={CREATE_ROOM_PAGE} element={<CreateRoom />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default withErrorBoundary(AppRoutes, { fallback: <ErrorPage /> });
