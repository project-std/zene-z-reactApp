import React from "react";

export default function create(){
  return <div>
    <table border>
		<thead>
			<tr>
				<th>Name</th>
				<th>Songs</th>
			</tr>
		</thead>
		
		<tbody>
			<tr th:each="plist:${allPlaylists}">
				<td th:text="${plist.name}"> </td>
				<td >
					<ul>
						<li th:each="song : ${plist.songs}" >
							<span th:text="${song.name}"></span>
							<audio controls>
		        				<source th:src="${song.link}" type="audio/mpeg"></source>
		    				</audio>
						</li>
					</ul>
				</td>
			</tr>
		</tbody>
	</table>
  </div>
}