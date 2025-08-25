// Add test user to MongoDB
db = db.getSiblingDB('librarymgmtsystem');

// Insert test normal user
db.userdetails.insertOne({
    "_id": ObjectId("64b8a123084897052e79d0a0"),
    "username": "testuser", 
    "email": "user@gmail.com",
    "emailVerified": true,
    "phone": "9876543210",
    "userType": "normal_user", 
    "totalRequestedBooks": 0,
    "totalAcceptedBooks": 0,
    "password": "$2b$10$ByhWWpoVPEeZHsuZZsY/2eqNJAqZJI7I4XsGfJL1k7KLaZC5aaKrG",
    "__v": 0
});

print("Test user added successfully!");
print("Email: user@gmail.com");
print("Password: admin (same hash as admin user for testing)");

// Show all users
print("All users in database:");
db.userdetails.find({}, {password: 0}).pretty();
