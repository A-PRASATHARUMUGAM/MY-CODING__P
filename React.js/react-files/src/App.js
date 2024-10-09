import logo from './logo.svg';
import './App.css';

function App() {

function myfunction(){
      let data =["kandhan","sabari",'world'];
      let  random=Math.floor(Math.random()*3);
  return data[random]
}
  return (
    <div className="App">

      <header className="App-header">


        <p>hello {myfunction()}</p>

      </header>
 


    </div>
  );
}

export default App;
