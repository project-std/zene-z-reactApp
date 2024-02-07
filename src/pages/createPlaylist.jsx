import React from "react";
export default function createPlaylist(){
  return <div>
    <h1>createPlaylist</h1>
    <form action="addPlaylist" method="post">
			<label>Playlist name: </label>
			<input type="text" name = "name" />
			
			<br/>
			
			<div th:each="song:${songs}">
				<input type="checkbox" th:name="songs" th:value="${song.id}"/>
				<label th:text="${song.name}"></label>
			</div>
			
			<input type="submit" value="ADD PLAYLIST" />
		</form>
    </div>
}