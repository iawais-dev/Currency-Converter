import React from 'react'

const Inputbox = ({
  label,
  amoun,
  onamountchange,
  onchangecurrency,
  currencyoptions= [],
  selectcurrency = '',
  amountdisable = false

}) => {
  return (
    <div className=''>
      <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center bg-white px-5 py-5 rounded-2xl'>
          
          
          <div className=' py-3 rounded-3xl px-3 flex flex-col'>
            <label htmlFor='cureny' className='font-bold '>{label}</label>
            <input id='curency' type="number" 
            placeholder='Amount'
            value={amoun}
            disabled = {amountdisable}
            onChange={(e)=>{onamountchange && onamountchange(Number(e.target.value))}}
          
            className='outline-none'
           />
        </div>
        <div className=''>
          <p className='font-bold'>Currency Type</p>
          <select name="" id=""
          value={selectcurrency}
          onChange={(e)=>{onchangecurrency && onchangecurrency(e.target.value)}}
          >
            {currencyoptions.map((currency)=>(
               <option key={currency} value={currency}>
                    {currency}
               </option>
            ))}
          </select>


        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Inputbox;
