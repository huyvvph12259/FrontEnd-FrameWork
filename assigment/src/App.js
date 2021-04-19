
import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import Shop from './components/pages/Shop';
import DetailProduct from './components/DetailProduct';
import About from './components/About';
import Contact from './components/Contact';
import ManagerProduct from './components/pages/ManagerProduct';
import AddProducts from './components/pages/AddProducts';
import UpdateProduct from './components/pages/UpdateProduct';
import ManagerCate from './components/pages/ManagerCate';
import AddCates from './components/pages/AddCates'
import UpdateCate from './components/pages/UpdateCates';
function App() {
  const [albums, setAlbums] = useState([]);
  const [cates, setCates] = useState([]);

  const [albumItem, setAlbumItem] = useState({});
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
  }, []);

  useEffect(() => {
    const getCate = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/category`);
        const data = await response.json();
        setCates(data);
      } catch (err) {
        console.log(err)
      }
    }
    getCate();
  }, []);
  const onHandleAdd = async (value) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });
      const data = await response.json();
      setAlbums([
        ...albums, data
      ])
    } catch (err) {
      console.log(err);
    }
  }
  const onHandleAddCate = async (value) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });
      const data = await response.json();
      setCates([
        ...cates, data
      ])
    } catch (err) {
      console.log(err);
    }
  }


  const onHandleDetail = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
      const data = await response.json();
      setAlbumItem(data);
    } catch (err) {
      console.log(err);
    }
  }

  const onHandleRemove = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
        method: 'DELETE',
      });
      const data = albums.filter((pr) => pr.id != id)
      setAlbums(data);
    } catch (err) {
      console.log(err);
    }
  }
  const onHandleRemoveCate = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/category/${id}`, {
        method: 'DELETE',
      });
      const data = cates.filter((ct) => ct.id != id)
      setCates(data);
    } catch (err) {
      console.log(err);
    }
  }


  const onHandleUpdate = async (item) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/products/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      // reRender compoment dựa vào state
      // toàn bộ các trang dùng state sẽ đều bị thay đổi (albums)
      const newAlbums = albums.map(pro => (pro.id === item.id ? item : pro))
      setAlbums(newAlbums)
    } catch (err) {
      console.log(err)
    }
  }
  const onHandleUpdateCate = async (item) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/category/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      // reRender compoment dựa vào state
      // toàn bộ các trang dùng state sẽ đều bị thay đổi (albums)
      const newCates = cates.map(ct => (ct.id === item.id ? item : ct))
      setCates(newCates)
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
              <Route path="/shop" exact component={() => <Shop albums={albums} cates={cates} />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/manager" exact component={() => <ManagerProduct albums={albums} onDelete={onHandleRemove} />} />
              <Route path="/manager/category" exact component={() => <ManagerCate cates={cates} onDeleteC={onHandleRemoveCate} />} />
              <Route path="/manager/add" exact component={() => <AddProducts onAdd={onHandleAdd} cates={cates} />} />
              <Route path="/manager/category/add" exact component={() => <AddCates onAddC={onHandleAddCate} />} />
              <Route path="/manager/category/edit/:id" exact component={() => <UpdateCate cates={cates} onUpdateC={onHandleUpdateCate} />} />
              <Route path="/manager/edit/:id" exact component={() => <UpdateProduct albums={albums} cates={cates} onUpdate={onHandleUpdate} />} />
              <Route path="/shop/details/:id" exact component={() => <DetailProduct albums={albums} detail={onHandleDetail} />} />


            </Switch>
            {/* <Banner />
          <Albums />
          <VideoIntro /> */}
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
