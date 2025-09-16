# Library Management System 📚

A comprehensive Library Management System built with MERN stack featuring book recommendation algorithms.

**_NOTE : This isn't an Ecommerce Website (There is no Payment System here)_**

## Features

**ADMIN can:**  
- Manage books (add/remove/update/delete)
- Check user details (name/id/borrowed books/etc)
- Confirm user book requests & book returns
- Manage book charges (late fees)

**CLIENT can:**  
- Browse books and check availability
- Request books
- View/manage profile and dashboard
- Get personalized book recommendations

## Tech Stack

**Frontend:** React, Bootstrap  
**Backend:** Node.js, Express, MongoDB  
**Containerization:** Docker, Docker Compose

## Version Specifications

- NodeJS: v18.16.0
- Express: v4.18.2
- ReactJS: v18.2.0
- MongoDB: v6.0.6

## Quick Start with Docker (Recommended)

**The easiest way to run the project - zero configuration required!**

```bash
git clone https://github.com/YasinzHyper/LibraryManagementSystem_MERN-with-Book-Recommendation-Algorithm.git
cd LibraryManagementSystem_MERN-with-Book-Recommendation-Algorithm
docker-compose up -d
```

**That's it!** Access the application at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5050  
- **MongoDB**: localhost:27017

**Login Credentials**:
- **Admin**: admin@gmail.com / admin
- **Test User**: user@gmail.com / admin

> For detailed Docker setup instructions, see [DOCKER_SETUP.md](./DOCKER_SETUP.md)

---

## Manual Setup (Alternative)

If you prefer to run without Docker:

1. Clone the project

```bash
  git clone git@github.com:MrAalu/LibraryManagementSystem_MERN.git
```

2. Goto Both 'Frontend' and 'Backend' folder

```bash
  cd frontend , cd backend
```

3. Install dependencies on Both Frontend & Backend

```bash
  npm install
```

**NOTE : In 'backend' make sure to create a '.env' file and copy paste the values of '.env.example' into newly created '.env' file**

4. Start the Frontend and Backend

**NOTE : If you have any issues or queries about Backend, refer to /backend/BackendInfo/ folder for details**
```bash
  npm run dev
```

5. Once you run the Backend, database will be created automatically on MongoDB. Import the sample data from the `mongoDatabase` folder into respective collections.

**For Backend:**
- Ensure MongoDB server is running
- Open MongoDB Compass and import the JSON files from `mongoDatabase/` folder

## Login Credentials

**Admin User**:
- Email: admin@gmail.com  
- Password: admin

**Test User**:
- Email: user@gmail.com
- Password: admin

## Documentation

You can find detailed documentation in the `/docs/` folder.

![](./docs/LMS.pdf)

## Demo

![](https://mraalu.pythonanywhere.com/media/project/LMS.gif)

## Lessons Learned

1. Code Comments are love letters you leave behind for your future self
2. If you can't solve it, address it for your future self - they sure can!

---

#### Developed By: [@MrAalu](https://www.github.com/MrAalu)
