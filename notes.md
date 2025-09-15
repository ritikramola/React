## Session 2 important topics

package-lock.json: it is used to locks the version from which we are using parcel, very important 
node-module : it contains all the dependency used by parcel. can be generated many times.
Parcel cache - it is cache stored by parcel to reload the local server, put in gitignore
dist - parcel put production file in this folder. **cmd-  npx parcel build index.html**


## SESSION 3 IMPORTANT NOTES

polyfill : a never version of code which is coverted into older version of a code for all the web browser to understand
AND WHICH CONVERTS IT IS **BABEL: js package**  

  "scripts": {
    "start" : "parcel index.html",   /* to run the project (npm run start) or (npm start) */

#### how to install plugin : 

go to npm , like to remove console.log we use :
                babel-plugin-transform-remove-console

1st install it using command then create a new file to config and then use it 
