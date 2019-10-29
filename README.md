Technical Documentation

In order to run the application correctly you have to go through the following steps:

1.	Download Node.js from https://nodejs.org/en/ 
(node version: 10.16.2, npm version: 6.9.0)
2.	Download Git from https://gitforwindows.org/
3.	Install Angular CLI with the following command: 
npm install -g @angular/cli json-server
4.	Download Stock Project from GitHub using the command: 
git clone https://github.com/WojciechSnopek/FPStock.git
5.	In command line navigate to the project directory, then and install all required dependencies with npm install.
6.	Run the project with npm script:
npm run start-all, which will run the database (json-server) and angular in ahead of time compilation using concurrently package.

