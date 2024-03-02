# plugins installed

# "@rollup/plugin-babel": "^6.0.4",

# "@rollup/plugin-typescript": "^11.1.6",

# "react": "^18.2.0",

# "react-dom": "^18.2.0",

# "rollup": "^4.12.0"

# "tslib": "^2.6.2"

#main file should be linked from dist folder not ts file

#These are mandatory changes required before publish inside package.json

# "main": "dist/index.js",

# "types": "dist/index.d.ts",

#maintain version

# "version":"2.0.0"

#to test locally use command

# navigate to another project and type following command

# npm link npm_package

# after test un-link the library using following command:

# npm unlink npm_package

# last one should be name of package

#this will link this library to other projects and we can use locallay without install

# to publish use command

# npm publish

#Before publishing login into npm and then do it

# to update readme file site:

# https://stackedit.io/app#
