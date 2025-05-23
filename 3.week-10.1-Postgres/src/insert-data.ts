// Async function to insert data into a table
import { Client } from 'pg';

async function insertData() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'harkirat_week10_lec1',
    user: 'postgres',
    password: 'rajesh123',
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (name, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();