export const Files = {
  "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vanilla Project</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Hello Vanilla!</h1>
  <p>This is a basic HTML boilerplate.</p>
  
  <script src="script.js"></script>
</body>
</html>`,
  "styles.css": `body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
}`,
  "script.js": `document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello from script.js!");
});`
};
