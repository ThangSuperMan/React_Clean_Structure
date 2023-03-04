import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Layout from "./components/Layout";
import routes from "./pages/routes";
import "./App.css";

console.log("routes :>> ", routes);

// console.log("Layout component :>> ", Layout);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ component: Component, path, ...rest }) => {
            console.log("component :>> ", Component);
            console.log("path :>> ", path);
            return (
              <Route
                // element={`<${component} />`}
                element={Component}
                path={path}
                key={path}
              />
            );
          })}
          // <Route index element={<Home />} />
          // <Route path="/feed" element={<Feed />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
