# zeit-mongodb-rest-api

#### Serverless REST API in Node.js with Zeit Now

### Support
+ Currently the API supports GET, PUT, POST, DELETE methods on `/api/index`.
+ With the help of these 4 endpoints, CRUD operations can be performed on any given Mongodb database collection.
+ The REST API, by default, is protected with **Basic Authentication** (HTTP header where we add 'username:password' encoded in base64.)
+ You can add the username & password to the secrets. (Refer: https://zeit.co/docs/v2/build-step#adding-secrets).
+ The HTTP header username & password is matched to the username and password you have provide in the secrets.

### Usage
+ To get started you will need 
  + MongoDB connection uri to connect to your database.
  + username and password (defined by you). This is used to REST API requests authentication.

+ Once done cloning / forking the repo, Install the dependencies ***yarn***

+ Add the secrets
  + mongodb_uri
  + username
  + password

+ For development, run ***yarn dev*** and ***now dev*** seperately. 
  + Any changes inside the /src folder will compile the output to /api folder. 
  + **Now** listens to the changes in /api folder and rebuilds the serverless functions.

+ For production deployment, run **now**

### REST API Examples
+ **GET**: *Returns all the documents for any given collection*
  ```
  curl --request GET \
    --url http://localhost:3000/api/index \
    --header 'authorization: Basic base64-encoded-username:password' \
    --header 'content-type: application/json' \
    --data '{
      "collectionName": "comments"
    }'
  ```

+ **PUT**: *Updates a document for any given collection, based on the filter object (query)*
  ```
  curl --request PUT \
    --url http://localhost:3000/api/index \
    --header 'authorization: Basic base64-encoded-username:password' \
    --header 'content-type: application/json' \
    --data '{
      "collectionName": "users",
      "filter": {
        "contact": "1234567890"
      },
      "document": {
        "firstName": "Salva",
        "lastName: "Marquina",
        "city": "Madrid",
        "contact": "987654321"
      }
    }'
  ```

+ **POST**: *Inserts a document in any given collection*
  ```
  curl --request POST \
    --url http://localhost:3000/api/index \
    --header 'authorization: Basic base64-encoded-username:password' \
    --header 'content-type: application/json' \
    --data '{
      "collectionName": "comments",
      "document": {
        "creator": "331123454",
        "name": "Sergio",
        "comment": "This is a random comment"
      }
    }'
  ```

+ **DELETE**: *Deletes a document in any given collection based on filter object (query)*
  ```
  curl --request DELETE \
    --url http://localhost:3000/api/index \
    --header 'authorization: Basic base64-encoded-username:password' \
    --header 'content-type: application/json' \
    --data '{
      "collectionName": "users",
      "filter": {
        "firstName": "Salva"
      }
    }'
  ```

### License
MIT
