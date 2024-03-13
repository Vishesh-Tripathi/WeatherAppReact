import { useCallback,useState } from 'react';
// import './App.css';

function App() {
    // in sb ke badlane pr password badlega
  const [length,setLength] = useState(6)
  const [isNum,setNum]= useState(false);
  const [isAlpha,setAlpha] = useState(false);
//   chuki badlana password ko h isliye password ko bhi set state yani useState chahiye hogi 
  const[password,setPassword]= useState("")
  //logic for storing call for passGeerator which can be used for multiple calls like if check on number then it call passGen if we iclik on alpha then it call back to passGen
//   ?so we use useCallback it stores the fxn in cache and calls it on dependencis(jin ko badlne pr output(password ) badlega
   const passwordGenrator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 
        ;
        if(isNum){
            str+="0123456789";
        }
        if(isAlpha){
            str+="!@#$%^&*(){}[]";
        }
        //logic to generate random num
        for (let index = 1; index <= length; index++) {
            const char = Math.floor(Math.random()*str.lemgth()+1);// return idx
        pass = str.charAt(char);
            
        }
        setPassword(pass);
        

   },[length,isNum,isAlpha,setPassword])
  
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-center text-white mb-2 p-3'>Password Genrator</h1>
    <div className='flex shadow overflow-hidden '>
        <input  
        type="text" 
        value={password}
        className='outline-none rounded-lg w-full py-1 px-3 mb-4'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0 rounded-3xl mb-4'>Copy</button>

    </div>
    <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
            <input
             type="range" 
             min={8}
             max={40}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
             />
             <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
             <input 
             type="checkbox" 
             defaultChecked={isNum}
             id="numberInput"
             onChange={()=>{
                setNum((prev)=>!prev)
             }}
             /> 
             <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
             type="checkbox" 
             defaultChecked={isAlpha}
             id="characterInput"
             onChange={()=>{
                setAlpha((prev)=>!prev)//jo prev value h uska ulta return kro
             }}
             /> 
             <label htmlFor="characterInput">SpecialCharacter</label>
        </div>
    </div>
   </div>
      
   </>

  );
}

export default App;
