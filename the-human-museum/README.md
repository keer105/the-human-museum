# The Human Museum — React Mini Project

A small digital archive of feelings, memories, and human experiences.

## Run it locally
1. Install Node.js (LTS) from https://nodejs.org
2. Extract this ZIP.
3. Open the `the-human-museum` folder in VS Code.
4. Open Terminal → New Terminal.
5. Run these commands:

```bash
npm install
npm run dev
```
6. Open the local link shown in the terminal (usually http://localhost:5173).

## Build check
```bash
npm run build
```

## Deploy to Vercel
1. Create a GitHub repository.
2. In the VS Code terminal, run:
```bash
git init
git add .
git commit -m "Initial Human Museum project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
3. Go to https://vercel.com and sign in with GitHub.
4. Add New → Project → Import the repository.
5. Vercel should detect Vite. Build command: `npm run build`; output directory: `dist`.
6. Click Deploy.

## Features
- Search exhibits
- Filter by category
- Random exhibit
- Read exhibit details in a modal
- Add your own exhibit
- LocalStorage persistence (visitor contributions stay in that browser)
- Responsive layout

Note: User contributions are stored locally in the visitor's browser. They are not shared across visitors because this mini-project does not use a cloud database.
