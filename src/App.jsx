import { Footer, Job, Navbar, Search, Value } from "./Components";

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
