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

brain-even:
	npx babel-node src/bin/brain-even.js

brain-calc:
	npx babel-node src/bin/brain-calc.js