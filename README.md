# universal_blog
An blog written with React-Native for Web

To used it in Android: 
1. Start a project called universal_blog
2. copy index.android.js and src/ to root android directory
3. install all dependencies in react-native-web
4. - could not get batchedbridge make sure your bundle is package correctly
    - http://stackoverflow.com/questions/40489336/could-not-get-batchbridge-make-sure-your-bundle-is-packaged-correctly
        - adb reverse tcp:8081 tcp:8081
        - npm run start
        - react-native run-android
        - if modules not found:
	    - delete node_modules
	    - npm install
	    - repeat 2, 3
