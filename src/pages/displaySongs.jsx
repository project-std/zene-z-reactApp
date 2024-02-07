import React from "react";

export default function create(){
  return <div>
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
}