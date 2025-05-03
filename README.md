# 🍽️ Recipe App

This is a full-stack recipe application with separate frontend and backend folders.  
Frontend is built using **Next.js**, and backend is powered by **Express.js**.

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/VaTka/recipe.git
cd recipe
```

---

## 📦 Backend Setup (Express API)

### Go to the backend folder

```bash
cd BE
```

### Install dependencies

```bash
npm install
```

### Create `.env` file

```env
PORT=3001
BASE_API=https://www.themealdb.com/api/json/v1/1/
```

### Run the backend server

```bash
npm run dev
```

Server will run on: `http://localhost:3001`

---

## 💻 Frontend Setup (Next.js)

### Go to the frontend folder

```bash
cd ../FE
cd ../recipe-app

```

### Install dependencies

```bash
npm install
```

### Create `.env` file

```env
NEXT_PUBLIC_BASE_API=http://localhost:3001/
```

### Run the development server

```bash
npm run dev
```

App will be running at: `http://localhost:3000`

---

## 🧪 Testing the App

1. Make sure the backend is running (`localhost:3001`).
2. Open `http://localhost:3000` in your browser to use the app.
3. You can filter recipes, view ingredients, and explore categories.

---

## 📂 Folder Structure

```
recipe/
├── BE/        → Express.js backend API
│   ├── src/
│   └── .env
├── FE/        → Next.js frontend
│   └── pages/
├── README.md
```

---

## 📋 Notes

- You can configure API behavior in `.env`.
- This setup uses **CORS** and **dotenv** — don’t forget to install them:

```bash
npm install cors dotenv
```

---

## 🧑‍💻 Author

- [@VaTka](https://github.com/VaTka)