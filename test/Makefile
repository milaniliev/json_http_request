run: test_app.js
	node server.js

build: test_app.js

test_app.js: src/test.js
	./node_modules/.bin/browserify --outfile test_app.js src/test.js