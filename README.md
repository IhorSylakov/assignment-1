# Front-end Assignment

## Task

- Create a simple post reader as a React SPA.
- Implement above using React components and CSS3.
- Retrieve the data shown in the app from the API described below.
- Concentrate on functionality, code quality (CSS and JS/TS) and testability, not design.
- Any common state management, routing and/or testing library can be used.
- Using CSS toolkits and UI frameworks (bootstrap etc) is not ok. The purpose is to evaluate your coding skills, not npm skills.

Must haves:
- Login Screen with email and name inputs.
- Sender list with sender name and post count ordered by name alphabetically. 
- Clicking on a sender opens that sender's posts in the post list view.
- Post list where posts are ordered by creation time.
- Post order buttons to allow choosing most recent first and most recent last ordering for posts list

Nice to haves:
- Search box for senders. Any senders whose name do not contain the text entered are hidden
- Search box for posts. Any posts that do not contain the text entered are hidden
- Deep-linkable post list. This means that it is possible to enter a URL that directly selects the sender whose posts are shown.

## Rough Design
![Login Screen](https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/assignment-1-login.png)
![Posts Screen](https://raw.githubusercontent.com/IhorSylakov/IhorSylakov/main/repo-previews/assignment-1-posts.png)

## API

0. Unfortunately the original API has not survived. To keep my test application working I had to familiarize myself with a short course on the backend. I also had to read the instructions on how to create a backend using nodejs and express to emulate the behavior of the original backend. I'm afraid I didn't get it all right, but the main points are working - receiving requests from the frontend to the specified endpoints and responding to these requests.

1. Use the following endpoint to register a token:

    **POST:** `https://assignment-1-backend-1.vercel.app/register`

    **PARAMS:**
   
    ```
    *client_id:* ju16a6m81mhid5ue1z3v2g0uh
 
    *email:* User's email from login screen
 
    *name:* User's name from login screen
    ```

    **RETURNS**
    
    ```
    *token:* This token string should be used in the subsequent query. Please note that this token will only last 
                1 hour from when the REGISTER call happens. You will need to register and fetch a new token as you need it.
 
    *client_id:* Returned for informational purposes only
 
    *email:* Returned for informational purposes only
    ```

2. Use the following endpoint to fetch posts:

    **GET:** `https://assignment-1-backend-1.vercel.app/posts`

    **PARAMS:**
    
    ```
    *sl_token:* Token from the register call
 
    *page:* Integer page number of posts (1-10)
    ```

    **RETURNS:**
    
    ```
    *page:* What page was requested or retrieved
 
    *posts:* 100 posts per page
    ```

## How it works

[Check how it works on page](https://ihorsylakov.github.io/assignment-1/)

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

<!-- ### Tests
```
npm run test
``` -->
