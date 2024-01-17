import React, { useState } from 'react'
import "./Registration.css"

const Registration = () => {
  
    const [field,setField]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:""
    
      })
    
      const [submitted,setSubmit]=useState(false);
      const [validate,setValidate]=useState(false);
    
      const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmit(true)
        if(field.firstName!="" && field.lastName!="" && field.email!="" && field.phoneNumber!="" && field.phoneNumber.length==10 && field.email.includes("@")==true){
          setValidate(true);
        }
    
      }
    
      return (
        
            <div className='style'>
                <form action='' className='forms' onSubmit={handleSubmit}>
                    <div>
                    {validate==true?<h3>Registration Successfull !!</h3>:""}
                    </div>
                    <input 
                    id='first-name' value={field.firstName} type="text" placeholder='First Name' onChange={(e)=>setField({...field,firstName:e.target.value})}
                    />
                    {submitted==true && field.firstName==""?<p>Enter your First Name</p>:null}
            
                    <input 
                    id='last-name' value={field.lastName} type="text" placeholder='Last Name' onChange={(e)=>setField({...field,lastName:e.target.value})}
                    />
                    {submitted==true && field.lastName==""?<p>Enter your Last Name</p>:null}
            
                    <input 
                    id='e-mail' value={field.email} type="text" placeholder='Email' onChange={(e)=>setField({...field,email:e.target.value})}
                    />
                    {submitted==true && field.email==""?<p>Enter your E-Mail</p>:null}
            
                    {submitted==true && field.email.includes("@")==false && field.email!=""?<p>Enter correct E-Mail</p>:null}
            
                    <input 
                    id='phone-no' value={field.phoneNumber} type="text" placeholder='Phone Number' onChange={(e)=>setField({...field,phoneNumber:e.target.value})}
                    />
                    {submitted==true && field.phoneNumber==""?<p>Enter your Phone Number</p>:null}
            
                    {submitted==true && field.phoneNumber.length!=10 && field.phoneNumber!=""?<p>Enter your 10 digit number</p>:null}
            
                    <button 
                    id='submit-btn' type='submit'>Register
                    </button>
                </form>
            </div>
        
      )
}

export default Registration