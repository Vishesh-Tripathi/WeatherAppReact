import{useState} from "react"
import './App.css';

function App() {
  const[Color,setColor]=useState("olive");

  return (
  <div className="w-full h-screen durattion-200"
  style={{backgroundColor: Color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-6 bg-white rounded-xl">
        <button className="rounded-xl bg-blue-600 px-2 text-white"
        onClick={() => setColor("blue")}
        >Blue</button>
        <button className="rounded-xl bg-cyan-300 px-2  text-white"
        onClick={()=>setColor("cyan")}>Aqua</button>
        <button className="rounded-xl bg-yellow-300 px-2  text-white"
        onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="rounded-xl bg-green-300 px-2  text-white"
        onClick={()=>setColor("green")}>Test</button>
      </div>
    </div>
  </div>
  );
}

export default App;
