__OpenAI DALL_E App__

In this project, I used adrianhajdin's DALL-E project as a base to
add more functionality such as a comment feature for posts. I have yet
to add this functionality currently.

Though it is adrianhajdin's code I still had a lot of bug fixing during it's
creatation and ahd to update the openai code as it was not compatable with
the current verison of their API. 

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
