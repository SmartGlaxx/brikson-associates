import React from 'react';

const AdminForm = ({onChangeUser, onChangePassword})=>{

return(
		<form>
		<label className='admin'>Admin Login</label>
		<input onChange = {onChangeUser} className = 'a form-control w-50' type = "text" placeholder = 'Enter User Name or Email'/>
		<input onChange = {onChangePassword} className = 'a form-control w-50' type = "password" placeholder = 'Enter Password'/>
		<button type = 'submit' className='btn btn-info' onClick = {()=>this.onSubmit('About')}>Log In</button>
		</form>
	)
}

export default AdminForm;