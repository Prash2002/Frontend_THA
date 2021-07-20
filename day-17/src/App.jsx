import Calory from "./components/Calory";
import './App.css'
function App() {
  return (
    <div className="App">
      <Calory title="Pizza" cals={265} img="https://pbs.twimg.com/media/BuRQ-baCIAAoL1w.jpg"/>
      <Calory title="Burger" cals={295} img="https://economictimes.indiatimes.com/thumb/msid-72863458,width-1200,height-900,resizemode-4,imgsize-731189/burger-thnkstck.jpg"/>
      <Calory title="Coke" cals={38} img="https://weburbanist.com/wp-content/uploads/2013/07/ice-coke-bottle-design.jpg"/>
      <Calory title="Brownie" cals={466} img="https://i2.wp.com/chefsavvy.com/wp-content/uploads/super-chewy-brownies.jpg"/>
      <Calory title="Lasagna" cals={135} img="https://www.lecremedelacrumb.com/wp-content/uploads/2020/02/make-ahead-lasagna-2sm-4.jpg"/>
    </div>
  );
}

export default App;
