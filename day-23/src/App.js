import useFetch from './customHooks/useFetch';
import './App.css';
import Dog from './components/Dog';

function App() {
    const {data} = useFetch("https://dog.ceo/api/breeds/image/random");
    console.log(data);
  
  return (
    <div className="App">
      <Dog msg={data.message}/>
    </div>
  );
}

export default App;
