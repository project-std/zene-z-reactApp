import React from "react";

export default function customerHome(){
  return <div>
    <h1>customerHome</h1>
    <div th:unless="${isPremium}"  class="non-premium">
		<a href="pay">Get premium</a>
		<br/>
		<a href="logout">LOGOUT</a>
	</div>
	
	
	
	<div th:if="${isPremium}"  class="premium">
		<table border>
		<thead>
			<tr>
				<th>Name</th>
				<th>Artist</th>
				<th>Genre</th>
				<th>Play</th>
			</tr>
		</thead>
		
		<tbody>
			<tr th:each="song:${songs}">
				<td th:text="${song.name}">			</td>
				<td th:text="${song.artist}">		</td>
				<td th:text="${song.genre}">		</td>
				<td >
					<audio controls>
        				<source th:src="${song.link}" type="audio/mpeg"></source>
    				</audio>
				</td>
			</tr>
		</tbody>
	</table>
	</div>
  </div>
}