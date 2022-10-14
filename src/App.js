import Search from "./components/Search/Search";
import NavBar from "./components/Nav/NavBar";
import "./css/global.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row ">
          <Search />
        </div>
      </div>
    </>
  );
}

export default App;
