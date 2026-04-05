{
  "main.js": "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to SideQuest</h1>\n      <p>This is your GitHub Pages static version.</p>\n    </div>\n  );\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);",

  "index.css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  color: #333;\n}\n\n.app {\n  text-align: center;\n  padding: 50px;\n}\n\nh1 {\n  color: #222;\n}\n\np {\n  font-size: 18px;\n  color: #555;\n}"  
}
