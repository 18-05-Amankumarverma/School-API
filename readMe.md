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

## 📋 Table of Contents
- [API Endpoints](#api-endpoints)
  - [Add School](#1-add-school)
  - [List Schools by Proximity](#2-list-schools-by-proximity)
- [Installation & Setup](#installation--setup)
- [Testing](#testing)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## API Endpoints

### 1. Add School

**Endpoint:** `/addSchool`  
**Method:** `POST`  
**Description:** Adds a new school to the database.

#### Request Payload (JSON)

```json
{
  "name": "Springfield High School",
  "address": "742 Evergreen Terrace, Springfield",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```

#### Validations
- All fields are required
- `latitude` and `longitude` must be valid float values

#### Sample Response

```json
{
  "message": "School added successfully",
  "schoolId": 1
}
```

### 2. List Schools by Proximity

**Endpoint:** `/listSchools`  
**Method:** `GET`  
**Description:** Returns a list of schools sorted by distance from the user's current location.

#### Query Parameters
- `latitude`: User's current latitude (required)
- `longitude`: User's current longitude (required)

#### Example Request

```bash
GET /listSchools?latitude=37.7749&longitude=-122.4194
```

#### Sample Response

```json
[
  {
    "id": 2,
    "name": "Hill Valley School",
    "address": "1 Main St, Hill Valley",
    "latitude": 37.7750,
    "longitude": -122.4183,
    "distance_km": 0.14
  },
  {
    "id": 1,
    "name": "Springfield High School",
    "address": "742 Evergreen Terrace",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "distance_km": 0.00
  }
]
```

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/18-05-Amankumarverma/School-API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file and add your database credentials:
```env
PORT=3000
HOST="localhost"
USER="root"
PASSWORD="aman@123"
DBNAME="schoolDB"
```

### 4. Run the server

```bash
npm start
```

The server should now be running at: `http://localhost:3000`

## 🧪 Testing

### Postman Collection
You can test the APIs using the provided Postman collection:
- Contains examples for both `/addSchool` and `/listSchools`
- Includes expected request/response formats

### Manual Testing Examples

#### Adding a School
```bash
curl -X POST http://localhost:3000/addSchool \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Springfield High School",
    "address": "742 Evergreen Terrace, Springfield",
    "latitude": 37.7749,
    "longitude": -122.4194
  }'
```

#### Listing Schools
```bash
curl "http://localhost:3000/listSchools?latitude=37.7749&longitude=-122.4194"
```

### Environment Variables for Production
```env

PORT=3000
HOST="localhost"
USER="root"
PASSWORD="aman@123"
DBNAME="schoolDB"

```

## 🚀 Future Improvements

- Add pagination and filtering to `/listSchools`
- Add authentication and roles (admin/user)
- Support school updates and deletions (CRUD operations)
- Integrate map preview for nearby schools
- Add input sanitization and rate limiting
- Implement caching for frequently requested locations
- Add search functionality by school name
- Include school ratings and reviews

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Need Help?** 
- Open an issue on GitHub
- Check the API documentation
- Review the Postman collection examples (https://documenter.getpostman.com/view/29304319/2sB3BEmVSn#664219a4-0040-440c-aafd-62631e465d78)
