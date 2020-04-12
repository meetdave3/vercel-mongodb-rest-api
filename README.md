# zeit-mongodb-rest-api

#### Serverless REST API in Node.js with Zeit Now

### Support
+ You will need the Now CLI to run this project. (Refer: https://zeit.co/download)
+ Currently the API supports GET, PUT, POST, DELETE methods on `/api/index`.
+ With the help of these 4 endpoints, CRUD operations can be performed on any given Mongodb database collection.
+ The REST API, is protected with **Basic Authentication** (HTTP header where 'username:password' is encoded in base64.)
+ Secrets must be added to the secrets & env variables before starting off. (Refer: https://zeit.co/docs/v2/build-step#adding-secrets).
+ The HTTP header auth username & password is matched to the username and password provided in the secrets.

### Usage
+ To get started you will need 
  + MongoDB connection uri to connect to your database.
  + username and password (pre-defined in the secrets). This is used to authenticate all incoming API requests.

+ Install the dependencies ***yarn***

+ Add the secrets
  + mongodb_uri
  + username
  + password

+ Running locally:  ***now dev*** 
  + Any changes inside the /src folder will rebuild the serverless functions.

+ For production deployment, run: ***now***

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

### Inspiration

Since I've been using Zeit for frontend deployments, I wanted an equally faster way to setup database CRUD operations with a predefined Mongodb database. (Get a free Mongodb cluster here: https://www.mongodb.com/download-center/cloud)

Personally, I didn't want to create models /  services / controllers / serverless API endpoints based on the database model everytime I start a new project. This setup should be ideal for a minimum viable product or a proof of concept.

Therefore, this solution is a secure, quicker and scalable way of managing and deploying database functions with Zeit.

### License
MIT
