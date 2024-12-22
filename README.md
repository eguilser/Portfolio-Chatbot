# 🤖 **Chatbot Contextual: AI-Powered Chat Application with FastAPI & React**

Welcome to **Chatbot Contextual**, an interactive chatbot application built with a **FastAPI backend** and a **React (TypeScript) frontend**. This project is designed to showcase seamless integration between backend APIs and frontend interfaces, creating a responsive and modern chatbot experience.

---

## 📚 **Table of Contents**
1. [Description](#description)
2. [Technologies Used](#technologies-used)
3. [Setup Guide](#setup-guide)
    - Backend Setup
    - Frontend Setup
4. [Deployment](#deployment)
5. [Available Scripts](#available-scripts)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Author](#author)
9. [License](#license)

---

## 📝 **Description**

The **Chatbot Contextual** application is a full-stack project combining the power of **FastAPI** for backend services and **React with TypeScript** for frontend development. This chatbot can handle user queries dynamically through a clean and user-friendly interface.

The backend processes requests, communicates with the database, and provides structured responses to the frontend. The frontend displays chatbot interactions and ensures seamless user navigation.

---

## 🛠️ **Technologies Used**

### **Backend:**
- Python 3.12
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

### **Frontend:**
- React
- TypeScript
- Axios

### **Tools:**
- Node.js
- Visual Studio Code
- Virtual Environment (`venv`)

---

## ⚙️ **Setup Guide**

This section explains how to set up both the **backend** and **frontend** environments for development.

### 🔹 **1. Backend Setup**

#### 📍 **Navigate to the backend folder:**
Open a terminal and run:
```cmd
cd C:\Users\eguil\Desktop\chatbot-contextual\backend
```

#### 📍 **Step 1: Create and activate a virtual environment:**
```cmd
python -m venv venv
venv\Scripts\activate
```

- This command will create and activate a Python virtual environment.
- You’ll see `(venv)` in your terminal.

#### 📍 **Step 2: Install dependencies:**
Make sure you have all the required dependencies installed:
```cmd
pip install -r requirements.txt
```

- Ensure your `requirements.txt` contains all necessary dependencies.

#### 📍 **Step 3: Run the backend server:**
Start the FastAPI backend server with:
```cmd
uvicorn app.main:app --reload
```

✅ **Backend is now running at:**  
👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)  
👉 **API documentation (Swagger):** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)  

If any errors occur, ensure all dependencies are installed and your `main.py` file contains a valid FastAPI instance.

---

### 🔹 **2. Frontend Setup**

#### 📍 **Navigate to the frontend folder:**
Open a terminal and run:
```cmd
cd C:\Users\eguil\Desktop\chatbot-contextual\frontend
```

#### 📍 **Step 1: Install frontend dependencies:**
Ensure Node.js is installed on your machine, then run:
```cmd
npm install
```

This command will install all required Node.js dependencies listed in `package.json`.

#### 📍 **Step 2: Start the frontend server:**
Run the development server:
```cmd
npm start
```

✅ **Frontend is now running at:**  
👉 [http://localhost:3000](http://localhost:3000)

Ensure the backend server is running before interacting with the frontend interface.

#### 📍 **Step 3: Backend Integration (Axios Configuration)**
In your frontend code, ensure `axios` points to the backend API:

**File:** `src/App.tsx`
```tsx
import React, { useEffect, useState } from "react"; 
import axios from "axios";

function App() {
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/").then((response) => {
            setData(response.data.message);
        });
    }, []);

    return (
        <div>
            <h1>Backend says:</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;
```

---

## 🚀 **Deployment**

### **Backend Deployment:**
- Deploy using **Uvicorn** or cloud platforms like **AWS**, **Azure**, or **Heroku**.

### **Frontend Deployment:**
- Build the project:
```cmd
npm run build
```
- Deploy using services like **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 🧰 **Available Scripts**

### **Backend:**
- `uvicorn app.main:app --reload`: Runs the backend server in development mode.

### **Frontend:**
- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.

---

## 🎯 **Usage**

1. **Start the Backend Server:**
```cmd
cd backend
uvicorn app.main:app --reload
```

2. **Start the Frontend Server:**
```cmd
cd frontend
npm start
```

3. **Access the Application:**
👉 Open your browser and visit: [http://localhost:3000](http://localhost:3000)

You can now interact with the chatbot via the user interface.

---

## 📡 **API Endpoints**

### **GET /**
- **Description:** Root endpoint to verify if the backend is running.
- **Response:** `{"message": "Hello, World!"}`

### **POST /chat**
- **Description:** Send a chat prompt and receive a response.
- **Request Body:**
```json
{
  "prompt": "Hello"
}
```
- **Response:**
```json
{
  "response": "You said: Hello"
}
```

---

## 👤 **Author**
- **Name:** Sergio Eguíluz  
- **Email:** [sergio.dev@gmail.com](mailto:sergioeguiluz614@gmail.com)  
- **GitHub:** [GitHub Profile](https://github.com/your-profile)

---

## 📜 **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

**Happy coding! 🚀✨**

