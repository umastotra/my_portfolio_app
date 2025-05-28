import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app-background">
      {/* this will hold the full-page gradient */}
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
