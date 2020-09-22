import React from 'react'

export const AddTransaction = () => {
    return (
       <div>
           <h3> Add New Transaction</h3>
          <form>
               <div className="form-control" >
                   <label htmlFor="description" >
                       Description
                   </label>
                       <input type="text" id="description" placeholder="Detail of Transaction" />
             </div>
               <div className="form-control" >
                   <label htmlFor="transcationammount" >
                        Transcation Amount
                   </label>     
                    <input type="number" id="tanscationammount" placeholder="Enter transaction amount" />
              </div>
        
                <button className= "btn" > Add Transaction 
              
                </button> 
          </form>
     </div>
    )
}
