# Docker Setup Guide for Library Management System

This guide explains how to run the Library Management System using Docker and Docker Compose, including MongoDB as a containerized service.

## ✅ What's Included

### 📦 Complete Containerization
- **MongoDB**: Fully containerized with automatic data initialization
- **Backend**: Production-ready Node.js application with health checks
- **Frontend**: React application with Vite dev server
- **Networking**: All services connected via Docker network

### 🔒 Production-Ready Features
- **Health Checks**: All services have proper health monitoring
- **Security**: Non-root users, proper file permissions
- **Persistence**: Data volumes for MongoDB, uploads, and logs
- **Error Handling**: Graceful restarts and dependency management

### 🚀 Key Benefits
- **Zero Configuration**: No need to install MongoDB, Node.js, or any dependencies
- **One Command Setup**: `docker-compose up -d` starts everything
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Isolated Environment**: No conflicts with existing software

## Prerequisites

- Docker Engine 20.10 or later
- Docker Compose 2.0 or later

## Quick Start

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd LibraryManagementSystem_MERN-with-Book-Recommendation-Algorithm
   ```

2. **Run the application**:
   ```bash
   docker-compose up -d
   ```

3. **Wait for services to be ready** (first run may take a few minutes):
   ```bash
   docker-compose logs -f
   ```

4. **Access the application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

## Default Login Credentials

- **Admin User**: 
  - Email: admin@gmail.com
  - Password: admin

- **Test User** (Normal User):
  - Email: user@gmail.com
  - Password: admin

**Note**: Both accounts use the same password "admin" for easy testing. In production, ensure proper password security.

## Services Overview

### MongoDB (mongodb)
- **Image**: mongo:6.0.6
- **Port**: 27017
- **Database**: librarymgmtsystem
- **Data Persistence**: Docker volume `mongodb_data`
- **Initialization**: Automatically loads data from `/mongoDatabase/*.json` files

### Backend (backend)
- **Port**: 5000
- **Environment**: Production-ready Node.js application
- **Health Check**: Available at http://localhost:5000/health
- **Data Persistence**: Uploads stored in Docker volume `backend_uploads`

### Frontend (frontend)
- **Port**: 5173
- **Environment**: React application with Vite dev server
- **Hot Reload**: Enabled for development

## Docker Commands

### Start all services:
```bash
docker-compose up -d
```

### View logs:
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb
```

### Stop all services:
```bash
docker-compose down
```

### Stop and remove all data:
```bash
docker-compose down -v
```

### Rebuild services:
```bash
docker-compose up --build -d
```

### Check service status:
```bash
docker-compose ps
```

## Database Management

### Accessing MongoDB
```bash
# Using MongoDB shell in container
docker-compose exec mongodb mongosh librarymgmtsystem

# Using MongoDB Compass (GUI)
# Connection string: mongodb://localhost:27017/librarymgmtsystem
```

### Database Collections
The following collections are automatically created and populated:
- `bookslists` - All available books
- `popularbooks` - Popular books for recommendations  
- `userdetails` - User accounts and profiles
- `useremailverifications` - Email verification records

### Backup Database
```bash
# Create backup
docker-compose exec mongodb mongodump --db librarymgmtsystem --out /data/backup

# Copy backup to host
docker cp lms_mongodb:/data/backup ./mongodb-backup
```

### Restore Database
```bash
# Copy backup to container
docker cp ./mongodb-backup lms_mongodb:/data/restore

# Restore database
docker-compose exec mongodb mongorestore --db librarymgmtsystem /data/restore/librarymgmtsystem
```

## Troubleshooting

### Services not starting:
1. Check if ports are available:
   ```bash
   netstat -tulpn | grep -E "(5000|5173|27017)"
   ```
2. View service logs:
   ```bash
   docker-compose logs <service-name>
   ```

### Database connection issues:
1. Ensure MongoDB is healthy:
   ```bash
   docker-compose ps mongodb
   ```
2. Check MongoDB logs:
   ```bash
   docker-compose logs mongodb
   ```

### Frontend can't connect to backend:
1. Verify backend health:
   ```bash
   curl http://localhost:5000/health
   ```
2. Check network connectivity:
   ```bash
   docker-compose exec frontend ping backend
   ```

### Reset everything:
```bash
# Stop services and remove all data
docker-compose down -v --remove-orphans

# Remove images
docker-compose down --rmi all

# Start fresh
docker-compose up --build -d
```

## Development vs Production

### Development Mode (Current Setup):
- Hot reload enabled
- Development dependencies included
- Suitable for local development

### Production Deployment:
For production deployment, consider:
1. Using multi-stage Docker builds
2. Setting up reverse proxy (nginx)
3. Using environment-specific configurations
4. Implementing proper logging and monitoring
5. Setting up SSL/TLS certificates

## 📁 Project Structure
```
LibraryManagementSystem_MERN/
├── docker-compose.yml          # Main orchestration
├── setup.bat                   # Windows setup script
├── setup.sh                    # Linux/macOS setup script
├── DOCKER_SETUP.md            # This documentation
├── backend/
│   ├── Dockerfile             # Backend container
│   └── .dockerignore          # Exclude unnecessary files
├── frontend/
│   ├── Dockerfile             # Frontend container
│   └── .dockerignore          # Exclude unnecessary files
└── mongoDatabase/             # Initial data files
    ├── bookslists.json
    ├── userdetails.json
    ├── popularbooks.json
    └── useremailverifications.json
```

## 🎯 What's Been Implemented
✅ **Complete Docker Setup** - All services containerized  
✅ **Automatic Database Initialization** - No manual setup required  
✅ **Production-Ready Configuration** - Health checks, monitoring, security  
✅ **Cross-Platform Compatibility** - Works on Windows, macOS, Linux  
✅ **Easy Setup Scripts** - One-click deployment  
✅ **Data Persistence** - Volumes for database and uploads  
✅ **Network Isolation** - Secure inter-service communication

## Support

If you encounter any issues:
1. Check the logs using `docker-compose logs`
2. Ensure all prerequisites are installed
3. Verify that required ports are not in use by other applications
4. Try rebuilding the containers with `docker-compose up --build`

For additional help, please refer to the main project documentation or create an issue in the repository.
