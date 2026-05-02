# 🧩 Multi-Step Form (Machine Coding Round)

## 📌 Overview

This project is a **multi-step form application** built using React.
It allows users to navigate between multiple tabs (Profile, Interest, Settings) with validation at each step.

The goal of this project was to demonstrate:

* Component design
* State management
* Form validation
* Clean UI handling

---

## 🚀 Features

* ✅ Multi-step form navigation (Next / Previous)
* ✅ Step-wise validation
* ✅ Dynamic rendering of components
* ✅ Controlled inputs using React state
* ✅ Error handling and validation messages
* ✅ Clean and reusable component structure

---

## 🛠️ Tech Stack

* React (Functional Components + Hooks)
* JavaScript (ES6+)
* CSS (Basic styling)

---

## 📂 Folder Structure

```
src/
│── components/
│   ├── Profile.js
│   ├── Interest.js
│   ├── Settings.js
│
│── TabForm.js
│── App.js
```

---

## 🧠 Approach

* Used a **tabs array configuration** to manage:

  * Component rendering
  * Validation logic per step
* Centralized state (`data`) to manage form inputs
* Used **conditional rendering** for navigation buttons
* Validation handled via `validate()` function in each tab

---

## 🧪 Validation Rules

### Profile

* Name must be at least 2 characters
* Age must be ≥ 18
* Email must be valid

### Interest

* At least one interest must be selected

### Settings

* Theme selection (optional)

---

## ▶️ How to Run

```bash
# Clone repo
git clone <your-repo-link>

# Install dependencies
npm install

# Start project
npm run dev
```

---


---

## ⚡ Improvements (Future Scope)

* Add form library (React Hook Form / Formik)
* Better UI with Tailwind / Material UI
* Add API integration on submit
* Add form persistence (localStorage)

---

## 🙋‍♂️ Author

Your Name
Frontend Developer (React)

---
