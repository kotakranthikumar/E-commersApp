import logo from './logo.svg';
import './App.css';
import LatestProducts from './components/LatestProducts';
 
function App() {
  return (
    <div style={{textAlign:"center"}}>
         <img width="100%" height={280} src="./images/banner.jpg" />
         <hr/>
         <div  style={{paddingLeft:"20%", paddingRight: "10%"}}>
         <LatestProducts />
         </div>
         <br/><br/>         
    </div>
  );
}

export default App;