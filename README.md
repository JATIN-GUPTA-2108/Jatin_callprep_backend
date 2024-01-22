# run "npm i" to download dependencies

create .env file with mongoDB url (complete with pssword and name) and port number , can also directly input the url an port number instead of process.env.DATABASE_URI or process.env.PORT 

# run "npm start" or "node app.js"  to start backend


used thunderclient to test these endpoints  , can also use postman   

testing endpoints:

 1) http://localhost:8000/subjectMarks ( post method )   json input in body using thunderclient or Postman(
     {
                "name":"John",
                "age":22,
                "gender":"Male",
                "marks": 
                {
                "physics": [80, 100],
                "chemistry": [70, 100],
                "maths": [90, 100]
                }
      }
)

2) http://localhost:8000/subjectMarksList ( post method )   json input in body using thunderclient or Postman (
     {
            "first_name":"John",
            "last_name":"Doe",
            "years_old":22,
            "scores": 
                {
                "subjects": ["physics","chemistry","maths"],
                "marks_obtained": [80, 70,90],
                "total_marks": [100, 100,100]
                }
      }
)
3) http://localhost:8000/getSudentDetails (get method) display all records

NOTE : Above are only demo inputs can use other inputs in same format 
