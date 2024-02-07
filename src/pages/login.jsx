import React from "react";

export default function userLogin(){
  return <div>
    <h1>User LOGIN: </h1>
<form action="validate" method="post">
		
		<label>Email : </label>
		<input type = "email" name = "email"/>
		<br/>
		<label>Password : </label>
		<input type = "password" name = "password"/>
		<br/>
		
		<input type="submit" value="LOGIN"/>
				
	</form>
  </div>
}