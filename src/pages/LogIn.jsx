import React, { useState } from 'react'

const LogIn = () => {
    const [signup,setSignup] = useState(false)

    const toggleSignup = ()=>{
        setSignup(!signup)
    }
  return (
    <>
       <div class="container" style={{width:"400px",padding:"20px"}}>
        <div class="card">
            <div class="card-body">
                <div class="logo">
                <i class="fa-solid fa-briefcase" style={{fontSize:"30px",color:"#2962ff"}}></i>&nbsp;&nbsp;<span style={{fontSize:"25px", fontWeight:"600",color:"#2962ff"}}>Jobs</span>
                </div>
                {
                    !signup? <h3 class="card-title text-center">Sign In</h3> : <h3 class="card-title text-center">Sign Up</h3>
                }
                
                <form>
                    <div class="form-group">
                        {
                            signup && (<>
                            <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Type Here"/>
                        </>
                        )
                        }
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Email@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Type Here"/>
                    </div>
                    <div class="form-group">
                        {signup && (<>
                        
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPassword" placeholder="Type Here"/>
                        </>)}
                    </div>
                    {
                        signup? <button type="submit" class="btn btn-primary btn-block">Register</button> : <button type="submit" class="btn btn-primary btn-block">LogIn</button>
                    }
                    
                </form>
                <div class="text-center">
                    {
                        !signup ? (<><p>Don't have an account? <span onClick={toggleSignup} style={{cursor:"pointer",color:"#2962ff"}}>Register</span></p></>) : (<><p>Already have an account? <span onClick={toggleSignup} style={{cursor:"pointer",color:"#2962ff"}}>LogIn</span></p></>)
                    }
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LogIn
