import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import AddProduct from './components/AddProduct'
import DetailAlbum from './components/DetailAlbum';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/Products';
import ManagerProducts from './components/pages/ManagerProducts';
import AddProducts from './components/pages/AddProducts'
import UpdatePage from './components/pages/UpdatePage';

function App() {
  const [albums, setAlbums] = useState([]);
  const [albumItem, setAlbumItem] = useState({})
  useEffect(() => {

    const getAlbums = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
        const data = await response.json();
        setAlbums(data);
      } catch (err) {
        console.log(err);
      }
    }
    getAlbums();
  }, [])
  const handleAdd = async (value) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });
      const data = await response.json();
      // Sau khi thêm thành công vào API thì gọi lại state
      setAlbums([
        ...albums, data]
      )
    } catch (err) {
      console.log(err);
    }



  }
  const onHandleRemove = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
        method: 'DELETE',
      })
      const newAlbum = albums.filter((item) => item.id != id)
      // console.log(newAlbum)
      setAlbums(newAlbum)
    } catch (err) {
      console.log(err)
    }
  }
  const onHandleDetail = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
      const data = await response.json();
      setAlbumItem(data);

    } catch (err) {
      console.log(err)
    }
  }
  const onHandleUpdate = async (album) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/products/${album.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)
      })
      
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={() => <HomePage albums={albums} />} />
              <Route path="/products" exact component={() => <ProductsPage albums={albums} />} />
              <Route path="/manager" exact component={() => <ManagerProducts albums={albums} onDelete={onHandleRemove} />} />
              <Route path="/manager/add" exact component={()=> <AddProducts onAdd={handleAdd} />} />
              <Route path="/manager/edit/:id" exact component={()=> <UpdatePage albums={albums} onUpdate={onHandleUpdate}/>} />

            </Switch>

          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}



export default App;
