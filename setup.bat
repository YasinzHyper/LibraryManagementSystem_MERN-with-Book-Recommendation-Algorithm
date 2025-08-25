@echo off
echo ==========================================
echo Library Management System - Docker Setup
echo ==========================================
echo.

echo Stopping any existing containers...
docker-compose down -v

echo.
echo Building and starting all services...
docker-compose up --build -d

echo.
echo Waiting for services to be ready...
timeout /t 30 /nobreak >nul

echo.
echo Checking service status...
docker-compose ps

echo.
echo Importing initial data to MongoDB...

:wait_for_mongo
echo Checking if MongoDB is ready...
docker-compose exec -T mongodb mongosh --quiet --eval "db.adminCommand('ping')" >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo MongoDB not ready yet, waiting 5 seconds...
    timeout /t 5 /nobreak >nul
    goto wait_for_mongo
)

echo MongoDB is ready! Importing data...

echo Importing books data...
docker-compose exec -T mongodb mongoimport --db librarymgmtsystem --collection bookslists --file /docker-entrypoint-initdb.d/bookslists.json --jsonArray

echo Importing user details...
docker-compose exec -T mongodb mongoimport --db librarymgmtsystem --collection userdetails --file /docker-entrypoint-initdb.d/userdetails.json --jsonArray

echo Importing popular books...
docker-compose exec -T mongodb mongoimport --db librarymgmtsystem --collection popularbooks --file /docker-entrypoint-initdb.d/popularbooks.json --jsonArray

echo Importing email verifications...
docker-compose exec -T mongodb mongoimport --db librarymgmtsystem --collection useremailverifications --file /docker-entrypoint-initdb.d/useremailverifications.json --jsonArray

echo.
echo ==========================================
echo Setup completed successfully!
echo ==========================================
echo.
echo Access your application at:
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:5000
echo   MongoDB:  localhost:27017
echo.
echo Default Login Credentials:
echo   Admin Email: admin@gmail.com
echo   Admin Password: admin
echo.
echo   Test User Email: user@gmail.com
echo   Test User Password: admin
echo.
echo To view logs: docker-compose logs -f
echo To stop: docker-compose down
echo ==========================================
