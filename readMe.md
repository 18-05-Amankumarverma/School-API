# School Management API Documentation

A RESTful API for managing schools and finding nearby educational institutions based on geographical proximity.

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **Postman** (for API testing and documentation)
- **Swagger**

---


## 🛠️ Features

- ➕ Add a new school with name, address, latitude, and longitude
- 📍 Retrieve a list of schools sorted by proximity to user-provided coordinates
- 🧮 Distance calculated using the **Haversine formula**
- 📦 RESTful API design
- ✅ Input validation for reliable data insertion

---

### Configure environment

Create a `.env` file and add your database credentials:
```env
PORT=3000
HOST="localhost"
USER="root"
PASSWORD="aman@123"
DBNAME="schoolDB"
```
### NOTE:

After cloning the project make sure you have mysql workbench or any sql database.
then run this query in it

```sql

CREATE DATABASE schoolDB;
USE studentDB;
CREATE TABLE schools (
    schoolId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    schoolName VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    latitude FLOAT,
    longitude FLOAT
);

```

### Run the server

```bash
npm start
```

The server should now be running at: `http://localhost:3000`


## 🚀 Future Improvements

- Add pagination and filtering to `/listSchools`
- Add authentication and roles (admin/user)
- Support school updates and deletions (CRUD operations)
- Integrate map preview for nearby schools
- Add input sanitization and rate limiting
- Implement caching for frequently requested locations
- Add search functionality by school name
- Include school ratings and reviews

