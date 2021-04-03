import logo from './logo.svg';
import React , {useState , useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Albums';
import Footer from './components/Footer';
import Hello from './components/Hello';
import NbList from './components/Hello';
import AddProduct from './components/AddProduct'



function App() {
  const[albums, setAlbums] = useState([])
  useEffect(() => {
    
    const getAlbums = async () =>{
      try{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const data = await response.json();
      setAlbums(data);
      }catch(err){
        console.log(err);
      }
    }
    getAlbums();
  }, [])  
  const handleAdd = async (value)=>{
    try{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });
      const data = await response.json();
      // Sau khi thêm thành công vào API thì gọi lại state
      setAlbums([
        ...albums,data]
      )
      }catch(err){
        console.log(err);
      }

    
    
  }
  const onHandleRemove = (id) =>{
    // console.log('App.js', id)
    // const newAlbum = albums.filter((item)=> item.id !=id)
    // // console.log(newAlbum)
    // setAlbums(newAlbum)
    
  }
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          
          <AddProduct onAdd={handleAdd}/>
          <Banner />
          <Albums data = {albums} onDelete={onHandleRemove}/>
        </main>
        <Footer />
      </div>
    </div>
  );
}



export default App;
