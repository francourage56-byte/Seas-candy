import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
function MainLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* </ Page without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
        {/* </ Page with layout */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
