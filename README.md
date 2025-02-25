# Employee Management System (EMS)

## 📌 Overview
The Employee Management System (EMS) is a web application that allows organizations to manage employees efficiently. The system includes authentication, employee details management, category management, and a user-friendly dashboard.

## 🚀 Features
- **Authentication**: Secure login system for admins.
- **Dashboard**: Provides an overview of employees and categories.
- **Employee Management**: Add, edit, and delete employees.
- **Category Management**: Organize employees into categories.
- **Profile Section**: Displays admin details with a personalized greeting.

## 🛠️ Components
The project consists of the following major components:

### 📌 Components List
- **Home**: Landing page of the application.
- **Login**: Authentication page for admin access.
- **Dashboard**: Displays employee statistics and quick actions.
- **Profile**: Shows admin details and a dynamic greeting.
- **AddEmployee**: Form to add a new employee.
- **EditEmployee**: Allows modification of employee details.
- **Employee**: Displays a list of all employees.
- **EmployeeDetails**: Detailed view of an individual employee.
- **AddCategory**: Form to add a new employee category.
- **Category**: Displays and manages categories.

## 🏗️ Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Token (JWT)
- **File Upload**: Multer (for image uploads)

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/PraveenGandikota/employee-management-app
cd EMS
```
### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```
### 3️⃣ Run the Application
#### Start Backend
```sh
cd backend
npm start
```
#### Start Frontend
```sh
cd frontend
npm start
```
### 4️⃣ Access the Application
Open [http://localhost:3000/adminlogin](http://localhost:3000) in your browser.

## 📂 Project Structure
```
📦 EMS
├── 📂 backend
│   ├── 📂 public/Images  # Stores uploaded images
│   ├── 📂 routes         # API routes
│   ├── 📂 config         # Database configuration
│   ├── server.js        # Main backend file
│   ├── package.json     # Backend dependencies
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 components # React components (Dashboard, Profile, etc.)
│   │   ├── 📂 pages      # Main application pages
│   ├── package.json     # Frontend dependencies
├── README.md
```

## 📸 Screenshots
*(Add screenshots here for better visualization)*

## 🤝 Contributing
If you would like to contribute, feel free to fork the repository and submit a pull request.

## 📜 License
This project is licensed under the MIT License.

