This is my submission for the Node.js Assignment by Dexterous Manufacturing Labs Private Limited. 
This project only consists of backend functionalities.

SETUP-
cd be
npm install
npm start

API endpoints-
- `GET /materials`- Fetches all materials from the database
- `GET /materials/:id`- Retrieves a specific material by its ID
- `POST /materials`-  Adds a new material to the database
- `PUT /materials/:id`- Updates an existing material's details
- `DELETE /materials/:id`- Removes a material from the database by its ID

Image Handling-
The image handling code uses Express and Multer to manage file uploads and downloads. Multer is configured with disk storage, specifying the destination folder as 'images/' and using the original file name for storage. The upload middleware is created with constraints, including a file size limit of 10MB and a filter that only allows JPEG, PNG, and JPG file types. The route /uploadfile handles single file uploads and responds with the file name. Another route, /files/:filename, handles file downloads, retrieving the file from the 'images/' directory and sending it to the client, handling errors if the file cannot be downloaded.