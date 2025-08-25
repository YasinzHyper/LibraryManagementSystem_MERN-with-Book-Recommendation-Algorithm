// MongoDB initialization script
// This script runs when the MongoDB container starts for the first time

print('Starting MongoDB initialization...');

// Switch to the library management database
db = db.getSiblingDB('librarymgmtsystem');

// Load and insert data from JSON files
print('Loading initial data...');

try {
    // Load books data
    const booksData = JSON.parse(cat('/docker-entrypoint-initdb.d/bookslists.json'));
    if (Array.isArray(booksData) && booksData.length > 0) {
        db.bookslists.insertMany(booksData);
        print(`Inserted ${booksData.length} books into bookslists collection`);
    }
} catch (e) {
    print('Error loading books data: ' + e.message);
}

try {
    // Load popular books data
    const popularBooksData = JSON.parse(cat('/docker-entrypoint-initdb.d/popularbooks.json'));
    if (Array.isArray(popularBooksData) && popularBooksData.length > 0) {
        db.popularbooks.insertMany(popularBooksData);
        print(`Inserted ${popularBooksData.length} popular books into popularbooks collection`);
    }
} catch (e) {
    print('Error loading popular books data: ' + e.message);
}

try {
    // Load user details data
    const userDetailsData = JSON.parse(cat('/docker-entrypoint-initdb.d/userdetails.json'));
    if (Array.isArray(userDetailsData) && userDetailsData.length > 0) {
        db.userdetails.insertMany(userDetailsData);
        print(`Inserted ${userDetailsData.length} users into userdetails collection`);
    }
} catch (e) {
    print('Error loading user details data: ' + e.message);
}

try {
    // Load user email verifications data
    const userEmailVerificationsData = JSON.parse(cat('/docker-entrypoint-initdb.d/useremailverifications.json'));
    if (Array.isArray(userEmailVerificationsData) && userEmailVerificationsData.length > 0) {
        db.useremailverifications.insertMany(userEmailVerificationsData);
        print(`Inserted ${userEmailVerificationsData.length} email verifications into useremailverifications collection`);
    }
} catch (e) {
    print('Error loading user email verifications data: ' + e.message);
}

// Create indexes for better performance
print('Creating database indexes...');

// Index for books collection
db.bookslists.createIndex({ "book_name": 1 });
db.bookslists.createIndex({ "book_category": 1 });
db.bookslists.createIndex({ "book_status": 1 });

// Index for users collection
db.userdetails.createIndex({ "user_email": 1 }, { unique: true });
db.userdetails.createIndex({ "user_type": 1 });

// Index for popular books
db.popularbooks.createIndex({ "book_name": 1 });

print('MongoDB initialization completed successfully!');
print('Collections created:');
print('- bookslists: ' + db.bookslists.countDocuments());
print('- popularbooks: ' + db.popularbooks.countDocuments());
print('- userdetails: ' + db.userdetails.countDocuments());
print('- useremailverifications: ' + db.useremailverifications.countDocuments());
