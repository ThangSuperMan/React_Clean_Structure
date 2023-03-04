import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./pages/routes";
import "./App.css";

console.log("routes :>> ", routes);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ component, path }) => {
            return <Route element={component} path={path} key={path} />;
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
