import React, { useState } from 'react';
import './Login.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import swal from 'sweetalert'

function Login(){

    const[username,setusername]=useState('')
    const[password,setpassword] = useState('')

    function validate(event){
        event.preventDefault();
        if(username=='aisha' && password == 123){
            swal('Login Successfull')
        }
        else{
            swal('Invalid Login Details ')
        }
    }
    return <div>
        <div className='row justify-content-center'>
            <div className='col-md-4 '>
            <h1>User Authentication</h1>
                <form onSubmit={validate}>
                    <input type="text" placeholder='username' className='form-control' value={username}
                    onChange={(e)=>{setusername(e.target.value)}}/>
                    <input type="text" placeholder='username' className='form-control' value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="submit" className='btn btn-primary' />
                </form>
            </div>

        </div>
    </div>
}

export default Login
