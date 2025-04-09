#Project 

i used modular monolithic architecture (means one server and one database) rather then microservice architecture in this backend project.
the project structure look like this , 

![image](https://github.com/user-attachments/assets/9bd67210-ec2d-4983-96a6-0ccdf1990ba5)

code flow start to index.js file ,
all the business operation are perform on Service folder ,
all the database relared stuff are in database folder like connection , schema , communication with mongo DB , also had sub folder like models , repository .
my Routes folder has a 4 APIs ,
i also made a index.js for Utils and Config folder ,
.env is for private information which i do not incluse here because it had a sentive password for my account 

following is screen short of my local system in postmen , 

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
