
import './App.css';

function App() {
  const arr=["Android","Blackberry","iphone","Windows Phone"]
  const arr2=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
    <section>
      <h2>Mobile Operating System</h2>
      <ul>
      
      {arr.map((e)=>(
        <Mobiles num={e}/>
      ))}
      
      </ul>
      </section>
      <section>
      <h2>Mobile Manufacttures</h2>
      <ul>
      {arr2.map((e)=>(
        <Mobiles num={e}/>
      ))}
      </ul>
      </section>
      
    </div>
  );
}
function Mobiles({num}) {
  return <li>{num}</li>
}

export default App;
