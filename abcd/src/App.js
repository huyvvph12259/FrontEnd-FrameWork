import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Albums';
import Footer from './components/Footer';
import Hello from './components/Hello';
import NbList from './components/Hello';

// function App() {
//   const Hs = [
//     {id: '12412', name: 'Duy Thìn'},
//     {id: '123411', name: 'Văn Long'},
//     {id: '12411', name: 'Thuận'}
    

//   ]
//   return (
//     <div className="App">
//       <div>
//         <Header />
//         <main>
//           <div>
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
//           <Banner />
//           <Albums />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// }



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
function App(){
  const students = [
    {id: '12412', name: 'Duy Thìn'},
    {id: '123411', name: 'Văn Long'},
    {id: '12411', name: 'Thuận'}
  ]
  return(
    <div>
      <NbList students={students}/>,
    </div>
  );
}


export default App;
