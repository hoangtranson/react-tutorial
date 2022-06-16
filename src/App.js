import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/shared/Layout";
import "./App.css";
import Landing from "./pages/external/Landing";
import Login from "./pages/external/Login";
import JobDetail from "./pages/internal/JobDetail";
import JobManagement from "./pages/internal/Job";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          {/* <Route path="job/:id" element={<JobDetail />} /> */}
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      { true ? (
        <Routes>
          <Route path="/jobs" element={<JobManagement />}></Route>
          <Route path="/job/:id" element={<JobDetail />}></Route>
        </Routes>
      ) : (
        <Routes>
          {/* <Route path="/job/:id" element={<LoginModal />}></Route> */}
        </Routes>
      )}
    </>
  );
}

export default App;
