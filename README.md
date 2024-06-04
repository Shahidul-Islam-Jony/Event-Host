## React Router dom
* npm create vite@latest name-of-your-project -- --template react
* cd <your new project directory
* npm install react-router-dom


## Tailwind Css
* npm install -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p

### In tailwind.config.js

* /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

### In index.css

* @tailwind base;
@tailwind components;
@tailwind utilities;

## DaisyUI setup

* npm i -D daisyui@latest


### In tailwind.config.js 
* plugins: [
    require('daisyui'),
  ],

### To run web app locally type cmd ==>  npm run dev


# Back-end Setup

* mkdir project-name
* cd project-name
* npm init -y
* npm i express cors mongodb mongoose dotenv
### In package.json file in script write “start”:”node index.js”
And “dev”:”nodemon index.js”

Create node index.js file and setup all needed files.

## Add vercel.json file for deploying into vercel
{
    "version": 2,
    "builds": [
      {
        "src": "index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "index.js",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE",
          "OPTIONS"
        ]
      }
    ]
  }

### Add .gitignore file and .env file

