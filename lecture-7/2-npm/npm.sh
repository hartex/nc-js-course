# it will install packages of specific version locally to node_modules folder
npm install lodash@2.1.1

# if you want to use a package like a CLI tool you should install it globally
npm install babel -g

# install all packages listed in package.json
npm install # or shorthand: npm i

# will initialize package.json with options you entered in cli
npm init

# install package locally and saves its reference to "depedencies" sections of package.json
npm install webpack --save

# install package locally and saves its reference to "devDepedencies" sections of package.json
npm install webpack --save-dev

# updates all packages according to semver
npm update