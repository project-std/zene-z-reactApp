import React from "react";

export default function newSong(){
  return <div>
    <form action="addSong" method="post">
			<label>Song Name : </label>
			<input type = "text" name = "name"/>
			<br />
			
			<label>Song Artist : </label>
			<input type = "text" name = "artist"/>
			<br />
			
			<label>Song Genre : </label>
			<input type = "text" name = "genre"/>
			<br />
			
			<label>Song Link : </label>
			<input type = "text" name = "link"/>
			<br />
			
			<input type="submit" value = "ADD SONG"/>
			
		</form>
  </div>
}