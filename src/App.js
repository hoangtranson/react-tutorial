import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Landing from "./pages/external/Landing";
import Login from "./pages/external/Login";
import JobDetail from "./pages/internal/JobDetail";
import { AuthContext } from "./context/auth";

import "antd/dist/antd.css";

function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
        </Route>

        {auth && auth.user ? (
          <Route path="job/:id" element={<JobDetail />}></Route>
        ) : (
          <Route path="job/:id" element={<JobDetail />}></Route>
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
