install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish

build:
	npm run build

lint:
	npx eslint .

fix:
	npx eslint . --fix