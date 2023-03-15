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
  const id = dirname.toLowerCase().replace(/ /g, '-');

  return `
    <h2 id="${id}">${i+1}. ${dirname}</h2>
    <p>${text}</p>
  `;
}).join('\n');

const searchScript = `
function searchKeyword(keyword) {
  const h2Elements = Array.from(document.getElementsByTagName('h2'));
  const searchResults = [];

  h2Elements.forEach((h2, i) => {
    const text = h2.nextElementSibling.innerText;
    const regex = new RegExp(keyword, 'gi');
    const matchCount = (text.match(regex) || []).length;

    if (matchCount > 0) {
      searchResults.push({
        id: h2.id,
        title: h2.innerText,
        count: matchCount,
      });
    }
  });

  searchResults.sort((a, b) => b.count - a.count);
  return searchResults;
}

function wrapKeywordWithHighlightSpan(keyword, searchResults) {
  const highlightSpanStart = '<span class="highlight" id="highlight-';
  const highlightSpanEnd = '</span>';
  const regex = new RegExp('('+keyword+')', 'gi');

  searchResults.forEach((result, i) => {
    const h2 = document.getElementById(result.id);
    const paragraph = h2.nextElementSibling;
    let count = 0;

    paragraph.innerHTML = paragraph.innerHTML.replace(regex, function(match) {
      count++;
      return highlightSpanStart + i + '-' + count + '">' + match + highlightSpanEnd;
    });
  });
}

document.getElementById('searchButton').addEventListener('click', function () {
  const keyword = document.getElementById('searchInput').value;
  const searchResults = searchKeyword(keyword);
  wrapKeywordWithHighlightSpan(keyword, searchResults);

  const resultContainer = document.getElementById('searchResults');
  let resultHTML = 'Found ' + searchResults.length + ' transcripts with occurrences of "' + keyword + '":';

  searchResults.forEach((result, i) => {
    resultHTML += '<br><a href="#' + result.id + '">' + result.title + '</a> - ' + result.count + ' occurrence(s)';
  });
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
    <div class="button-row">
      <div class="search-box">
        <input type="text" id="searchInput" placeholder="Search keyword..." />
        <button id="searchButton">Search</button>
      </div>
      <div class="edit-order">
        <button onclick="window.location.href='https://github.com/CliffordAnderson/programming-networked-world/edit/main/order.txt'">Edit order</button>
      </div>
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
fs.write