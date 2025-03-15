# React List Manager App

## 📌 Overview
This is a **React application** that allows users to manage a list of text items. Users can **add, select, delete**, and **undo the last action**.

The app follows best practices using:
- **React Context API + useReducer** for global state management.
- **React Testing Library + Vitest** for unit testing.

---

## 🚀 Features
- ✅ Add new text items.
- ✅ Select and remove items.
- ✅ Undo the last action.
- ✅ Uses `useReducer` and `useContext` for optimized state management.
- ✅ Fully tested with **Vitest & React Testing Library**.

---

## 📂 Project Structure
```plaintext
/src
  ├── /components        # UI components (List, ListItem, Modal, Button)
  ├── /context           # Global state management (useReducer + Context API)
  │   ├── appReducer.ts  # Reducer logic
  │   ├── appContext.tsx # Global context provider
  ├── App.tsx            # Main application component
  ├── index.tsx          # Entry point
```

---

## 🛠 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-repo/react-list-manager.git
cd react-list-manager
```

### 2️⃣ Install dependencies
```sh
npm install -g pnpm
pnpm install
```

### 3️⃣ Run the development server
```sh
pnpm run dev
```


---

## 🧪 Testing with Vitest
This project is fully tested using **Vitest** and **React Testing Library**.
To run tests:
```sh
pnpm run test
```


---
