TechMantra.co - Full Stack Web Application

Description:
TechMantra.co is a full stack web application developed using React for the frontend and Spring Boot (Java) for the backend. MySQL is used as the database.

------------------------------------------------------------
Folder Structure:
------------------------------------------------------------
TechMantra.co/
|-- frontend/        --> React frontend (run in VS Code)
|-- backend/         --> Spring Boot backend (run in Eclipse)
|-- db/              --> (Optional) MySQL database dump or schema
|-- README.md        --> Project documentation

------------------------------------------------------------
How to Run the Frontend (React) in VS Code:
------------------------------------------------------------

1. Open Visual Studio Code.
2. Open the 'frontend' folder inside the TechMantra.co directory.
3. Open a terminal in VS Code (Ctrl + `).
4. Run the following command to install dependencies:
   npm install
5. Then start the React development server:
   npm start
6. The frontend will open in your browser at:
   http://localhost:3000

------------------------------------------------------------
How to Run the Backend (Spring Boot) in Eclipse:
------------------------------------------------------------

1. Open Eclipse IDE.
2. Go to File -> Import -> Maven -> Existing Maven Projects.
3. Select the 'backend' folder from the TechMantra.co directory.
4. Click Finish. Eclipse will load the Maven project.
5. After dependencies are downloaded, go to the main class (e.g., Application.java).
6. Right-click the file -> Run As -> Spring Boot App.
7. The backend server will start on:
   http://localhost:8080

------------------------------------------------------------
How to Setup the MySQL Database:
------------------------------------------------------------

1. Open MySQL Workbench or any MySQL client.
2. Create a database:
   CREATE DATABASE techmantra_db;
3. (Optional) Import the SQL file from the 'db' folder.
4. In backend/src/main/resources/application.properties, update the database config:

   spring.datasource.url=jdbc:mysql://localhost:3306/techmantra_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update

------------------------------------------------------------
Note:
- Make sure your backend runs on port 8080 and frontend on port 3000.
- Enable CORS in backend if frontend cannot access backend API.
- Keep frontend and backend running simultaneously during development.

------------------------------------------------------------
Created by:
Mohammed Zakir Nooraj
TechMantra.co - Learn and Build Technology Projects

------------------------------------------------------------
