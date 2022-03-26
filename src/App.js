import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
	      <Login />
      </div>
	    <Footer />
    </div>
  );
}

export default App;
