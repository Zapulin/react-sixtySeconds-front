import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <div className="main-content">
	      <Login />
      </div>
      <footer>
	      <Footer />
      </footer>
    </div>
  );
}

export default App;
