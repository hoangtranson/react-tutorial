import { useContext } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ExternalLayout from "./components/shared/ExternalLayout";
import InternalLayout from "./components/shared/InternalLayout";
import Landing from "./pages/external/Landing";
import Login from "./pages/external/Login";
import JobDetail from "./pages/internal/JobDetail";
import { AuthContext } from "./context/auth";

function App() {
  const auth = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const externalUrls = ['/', '/login'];

  const login = (user) => {
    auth.login(user, () => {
      navigate(externalUrls.includes(location.pathname) ? "/jobs" : location.pathname, {
        replace: true,
      });
    });
  };

  const logout = () => {
    auth.logout(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<ExternalLayout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login onLogin={login} />} />
        </Route>

        {auth && auth.user ? (
          <Route element={<InternalLayout onLogout={logout} />}>
            <Route path="jobs" element={<Landing />}></Route>
            <Route path="job/:id" element={<JobDetail />}></Route>
          </Route>
        ) : (
          <Route>
            <Route path="jobs" element={<Login onLogin={login} />}></Route>
            <Route path="job/:id" element={<Login onLogin={login} />}></Route>
          </Route>
        )}
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
