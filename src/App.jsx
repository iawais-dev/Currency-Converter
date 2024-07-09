import Usecurrency from "./hooks/usecurrency"
import Inputbox from "./components/Inputbox"
import { useState } from "react"
import img1 from "./imgs/bgimage.jpg"
import img2 from "./imgs/currency-exchange.png"
function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('pkr')
  const [convertedAmount ,setConvertedAmount]= useState(0)

  const currencyinfo = Usecurrency(from)
  const options = Object.keys(currencyinfo)


  
const convert = ()=>{
  setConvertedAmount(amount * currencyinfo[to])

}
const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(0)
  setAmount(0)
}

const reset = ()=>{
  setAmount('')
  setConverted(0)
}

  return (
    <>
    <div className="flex  h-screen justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${img1})`}} >
<form action="" onSubmit={
  (e)=>{
    e.preventDefault()
    convert()
  }
}>
   <div className="flex flex-col justify-center items-center gap-5 backdrop-blur-sm border border-white border-opacity-20 p-10 rounded-3xl">

          <Inputbox
          label='from'
          amoun={amount}
          currencyoptions={options}
          onchangecurrency={(currency)=>setFrom(currency)}
             selectcurrency={from}
             onamountchange={
              (amount)=>{setAmount(amount)}
             }
          />
          <button onClick={swap}  className="bg-white hover:bg-slate-200 transition-all duration-200 font-bold flex justify-center items-center  text-black px-10 p-4 rounded-2xl">
            Swap <img className="h-6 ml-3" src={img2} alt="" />
           
          </button>
  <Inputbox
    label='To'
    amoun={convertedAmount}
    currencyoptions={options}
    onchangecurrency={(currency)=>
       setTo(currency) }
       selectcurrency={to}
       amountdisable
       onamountchange={
        (amount)=>{setAmount(amount)}
       }
       
       
  />
  <button className="bg-blue-700 p-4 rounded-3xl text-white font-bold hover:bg-white hover:text-blue-700
  transition-all duration-500 ">
        convert   {from.toUpperCase()} to {to.toUpperCase()}
      </button>


      <button onClick={reset} className="text-white hover:text-blue-500 hover:font-semibold">Reset Amount</button>
      </div>
      
</form>
     
     
    </div>
 

    </>
  )
}

export default App
