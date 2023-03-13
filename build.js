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
		${htmlContents}
	</body>
</html>
`;

const outFile = path.join(__dirname, 'index.html');
fs.writeFileSync(outFile, indexHtml);