const fs = require('fs');
const path = require('path');

// Get the ordering
const ordering = fs.readFileSync(path.join(__dirname, 'order.txt'), 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(line => !!line && !line.startsWith('#'));

const htmlContents = ordering.map((dirname, i) => {
  const textPath = path.join(__dirname, dirname, 'audio.txt');
  const text = fs.readFileSync(textPath, 'utf8');
  return `
    <h2>${i+1}. ${dirname}</h2>
    <p>${text}</p>
  `;
}).join('\n');

const indexHtml = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<title>Lesson Transcriptions</title>
	</head>
	<body>
		<div style="right: 10px;position: absolute">
			<a href="https://github.com/CliffordAnderson/programming-networked-world/edit/main/order.txt">Click to edit order</a>
		</div>
		<div>
		  <input type="text" id="searchInput" placeholder="Search keyword..." />
		  <button id="searchButton">Search</button>
		  <div id="searchResults"></div>
		</div>
		${htmlContents}
		<script>
			function searchKeyword(keyword) {
				const bodyText = document.body.innerText;
				const searchResultIndices = [];
				let startIndex = 0;

				while (startIndex < bodyText.length) {
					const index = bodyText.indexOf(keyword, startIndex);

					if (index === -1) {
						break;
					}

					searchResultIndices.push(index);
					startIndex = index + keyword.length;
				}

				return searchResultIndices;
			}

			document.getElementById('searchButton').addEventListener('click', function () {
				const keyword = document.getElementById('searchInput').value;
				const results = searchKeyword(keyword);
				const resultContainer = document.getElementById('searchResults');
				
				resultContainer.innerHTML = `Found ${results.length} occurrence(s) of "${keyword}" at the following index/indices: ${results.join(', ')}`;
			});
		</script>
	</body>
</html>
`;


const outFile = path.join(__dirname, 'index.html');
fs.writeFileSync(outFile, indexHtml);
