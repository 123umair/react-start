import { useState } from 'react'

function App() {
  const [Color, setColor] = useState("blue")

  return (
    <>
    <div className=' w-full h-screen duration-200 '
    style={{backgroundColor:Color}}>
      <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-2  bg-white rounded-2xl px-1 py-1'>
          <button onClick={()=>{setColor("white")}} className='px-4 py-1 rounded-2xl'
          style={{backgroundColor:"white",border:"2px dashed black"}}>White</button>
           <button onClick={()=>{setColor("black")}} className='px-4 py-1 rounded-2xl'
          style={{backgroundColor:"Black",color:"white" }}>Black</button>
           <button onClick={()=>{setColor("red")}} className='px-4 py-1 rounded-2xl'
          style={{backgroundColor:"Red"}}>Red</button>
           <button onClick={()=>{setColor("pink")}} className='px-4 py-1 rounded-2xl'
          style={{backgroundColor:"pink"}}>Pink</button>
        </div>
      </div>

    </div>

    </>
  )
}

export default App
