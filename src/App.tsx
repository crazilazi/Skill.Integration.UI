import { FC } from "react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "antd/dist/reset.css";
import store from "./store";
import "./App.css";
import {
  AppLayout,
  Dashboards,
  Login,
  NotFound,
  ProtectedRoute,
  SkillsDomain,
} from "components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/SkillsDomain"
          element={
            <ProtectedRoute>
              <SkillsDomain />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </>
  )
);

const App: FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;
