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

const searchScript = `
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

function wrapKeywordWithHighlightSpan(keyword) {
  const bodyHtml = document.body.innerHTML;
  const highlightSpanStart = '<span class="highlight" id="highlight-';
  const highlightSpanEnd = '</span>';
  const regex = new RegExp('('+keyword+')', 'gi');
  let count = 0;

  document.body.innerHTML = bodyHtml.replace(regex, function(match) {
    count++;
    return highlightSpanStart + count + '">' + match + highlightSpanEnd;
  });

  return count;
}

document.getElementById('searchButton').addEventListener('click', function () {
  const keyword = document.getElementById('searchInput').value;
  const count = wrapKeywordWithHighlightSpan(keyword);
  const resultContainer = document.getElementById('searchResults');

  let resultHTML = 'Found ' + count + ' occurrence(s) of "' + keyword + '":';
  for (let i = 1; i <= count; i++) {
    resultHTML += ' <a href="#highlight-' + i + '">' + i + '</a>';
  }
  resultContainer.innerHTML = resultHTML;
});
`;

const indexHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Lesson Transcriptions</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="search-box">
        <input type="text" id="searchInput" placeholder="Search keyword..." />
        <button id="searchButton">Search</button>
      </div>
      <div class="edit-order">
        <button onclick="window.location.href='https://github.com/CliffordAnderson/programming-networked-world/edit/main/order.txt'">Edit order</button>
      </div>
      <div id="searchResults"></div>
       ${htmlContents}
    </div>
    <script>
      ${searchScript}
    </script>
  </body>
</html>
`;

const outFile = path.join(__dirname, 'index.html');
fs.writeFileSync(outFile, indexHtml);
