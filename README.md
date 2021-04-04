# AF_project_final_upload


Important Notice:- The system is designed so that in can be deployed from one remote. But If some wants to change the settings to work on local pc you have to change the  Line 68,69,70,71 in the "courseweb\src\IT17152938\JSX\Login.jsx".

localStorage.setItem("frontip", "serverip:port");
localStorage.setItem("backip", "serverip:port ");
localStorage.setItem("emailip", "serverip:port ");
localStorage.setItem("fileip", "serverip:port");

ex:-
localStorage.setItem("frontip", "192.168.43.192:3000");
localStorage.setItem("backip", "192.168.43.192:5000");
localStorage.setItem("emailip", "192.168.43.192:8188");
localStorage.setItem("fileip", "192.168.43.192:4999");

project folders with default settings

courseweb : this project want to run front end server in port 3000. react use as technology
service : this project want to run email server in port 8188. spring boot use as technology
untitled : this project want to run back end server in port 5000. express js use as technology.also this service want to run mongo db in    localhost:27017
untitled22 : this project want to run file server in port 4999. express js use as technology.also this service want to run mongo db in    localhost:27017

mongo setup for frist time 

in back end server create database as AF and Collections as users . import DB/users.json to it. Other database and collections are automated



