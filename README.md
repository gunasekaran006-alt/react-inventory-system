# Smart Inventory Dashboard 📦

A simple and efficient CRUD-based inventory management system built with React and JSON Server. This project allows users to manage product details like stock quantity, pricing, and supplier information in real-time.

## 🚀 Features
- **Create:** Add new products with specific details.
- **Read:** View a comprehensive list of all inventory items in a table.
- **Update:** (Planned feature) Edit existing product details.
- **Delete:** Remove products from the inventory.
- **Mock Backend:** Uses JSON Server to simulate real API behavior.
- **Responsive UI:** Styled using Tailwind CSS for a modern look.

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router Dom
- **HTTP Client:** Axios
- **Backend:** JSON Server (Mock API)

## 📂 Project Structure
```text
src/
├── components/
│   ├── Api.jsx          # Axios API configurations
│   ├── ProductForm.jsx   # Form to add products
│   └── ProductTable.jsx  # Table to display products
├── App.jsx               # Main application logic
├── main.jsx              # Entry point with Router setup
└── index.css             # Tailwind directives
db.json                   # Mock database file
