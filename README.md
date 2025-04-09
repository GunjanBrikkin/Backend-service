#Project 

i used modular monolithic architecture (means one server and one database) rather then microservice architecture in this backend project.
the project structure look like this , 

![image](https://github.com/user-attachments/assets/9bd67210-ec2d-4983-96a6-0ccdf1990ba5)

🧭 Project Structure & Code Flow

The entry point of this project is the index.js file. From here, the application is bootstrapped and everything else connects smoothly.

 All the business logic is neatly organized inside the Service folder — this is where the real magic happens!

 Anything related to MongoDB, like database connection, schemas, and queries, lives inside the database folder. This folder is further structured into helpful subfolders:

models/ – defines the schema structure

repository/ – handles database communication (like find, create, update operations)

- The Routes folder contains 4 main API endpoints that handle registration, login, and verification functionality.

- I’ve also created a centralized index.js inside both the Utils and Config folders for organizing reusable utilities and configurations.

- .env file is used for managing private credentials and environment variables like database URIs and email passwords. For security reasons, it’s excluded from the repo.

📷 Below is a screenshot from my local system using Postman, where I tested all APIs successfully.

![image](https://github.com/user-attachments/assets/13777bc7-84d2-4a31-b5a9-49fdcd3622ab)
![image](https://github.com/user-attachments/assets/9cb77151-57ba-4f2c-9068-3dd201a5ad9d)
![image](https://github.com/user-attachments/assets/63766840-ed08-4515-ac48-117ce0adb12b)
![image](https://github.com/user-attachments/assets/07516d1d-a990-40b3-b4d1-34eed164c284)
![image](https://github.com/user-attachments/assets/6e0e6123-68fa-44dc-8c06-8f021c53bc75)
![image](https://github.com/user-attachments/assets/ca4a8aa2-f16c-4aa4-b4c3-ad7ef792dca8)
![image](https://github.com/user-attachments/assets/960bfd75-5777-443d-b135-7fd22d2ce576)
![image](https://github.com/user-attachments/assets/8348c31d-1a34-40ba-908c-d87bfe624e34)
![image](https://github.com/user-attachments/assets/68eb3214-c51c-40ea-9023-da4a78ab73ed)
![image](https://github.com/user-attachments/assets/af2e9bc8-158e-4e81-ad29-c5b16a0824a9)
![image](https://github.com/user-attachments/assets/a4a30ba9-0fef-40e4-bbe6-5c412b95ca95)
