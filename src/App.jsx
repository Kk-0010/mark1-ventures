import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
