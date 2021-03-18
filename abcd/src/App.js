import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Albums';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <Banner />
          <Albums />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
