__OpenAI DALL_E App__

In this project, I used adrianhajdin's DALL-E project as a base to
add more functionality such as a comment feature for posts.

Starting with adrianhajdin's code I had a lot of bug fixing during it's
creation and had to update the openai sections as they were not compatable with
the current verison of their API. 

I then updated the schema to include comments and added the necessary routes to get a specfic post and add comments to the backend. I made the CommentCard in the front end followed by the actual Comments page.

After all that I updated the CSS to be a dark mode rather than the light mode adrianhajdin went with. 

For installation here are all the dependencies:

client:
```
npm create vite@latest
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p	
npm install file-saver	
npm install react-router-dom
```

server:
```
npm init -y
npm install cloudinary
npm install cors
npm install dotenv
npm install express
npm install mongoose
npm install mongodb
npm install nodemon
npm install openai
```
