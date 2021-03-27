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
      fetch('https://6008fb580a54690017fc2817.mockapi.io/persons')
      .then(response => response.json())
      .then(data => setAlbums((data)));
    
  }, [])  
  const handleAdd = (value)=>{
    console.log('App.js', value)
  }
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          
          <AddProduct onAdd={handleAdd}/>
          <Banner />
          <Albums data = {albums}/>
        </main>
        <Footer />
      </div>
    </div>
  );
}



// function App(){
//   const Hs = [
//     {id: '12412', name: 'Duy Thìn'},
//     {id: '123411', name: 'Văn Long'},
//     {id: '12411', name: 'Thuận'}
    

//   ]
//   return(
//     <div>
//       <table>
//         <tbody>
//           {Hs.map((sv, index) =>(
//             <tr key={index}>
//               <td>
//                 {sv.name}
//               </td>
//             </tr>
            
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// DEMO PROPS
// function App(){
//   const students = [
//     {id: '12412', name: 'Duy Thìn'},
//     {id: '123411', name: 'Văn Long'},
//     {id: '12411', name: 'Thuận'}
//   ]
//   return(
//     <div>
//       <NbList students={students}/>,
//     </div>
//   );
// }



// Demo State
// function App(){
// const [Albums, setAlbums] = useState([
//       {id: '12412', name: 'Duy Thìn'},
//       {id: '123411', name: 'Văn Long'},
//       {id: '12411', name: 'Thuận'}
//     ])
// const setNewAlbums
//     return(
          
//             <button onClick={() => setAlbums(Albums + 1)}> </button>
          
//         );
  
// }
// function App(){
// const [color, setColor] = useState("green")
// const changeName = () =>{
//   setColor  ("red")
// }
// return (
//   <div>
//     <button onClick={()=> changeName()}>click</button>
//     <div style={{width: 300,height: 300,backgroundColor: color}} > </div>
//   </div>
// );
// }


export default App;
