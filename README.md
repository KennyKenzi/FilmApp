# FilmApp

## NOTES:  Incomplete/Abandoned Project. 
Started out one way with regular "use-state", then attempted to implement Contex API/Use Reducer halfway and never finished.
May attempt to correct in future or just start afresh.


1. Clone repo

2. Create local DB

3. "npm install"

4. Create .env file in the format of .env.example and enter local db details
#Set FRONT_END_URL to 'http://localhost:3000'

5. In 'server' folder, run "npx knex migrate:latest" in terminal;

6. Then run "npx knex seed:run"

#This creates the seeded users :

#username: b_dingall
 password: password
#username: d_king
 password: password
#username: j_tribiani
 password: password
 
7. In the server folder run 'nodemon' or 'npm run start'
8. In the frontend folder run 'npm run start'
  #if they don't run try uninstalling and re-installing node modules.

Application runs on localhost:3000
