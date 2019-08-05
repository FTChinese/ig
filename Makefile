cmd_prefix := ./node_modules/.bin
out_dir := build/production
scss_dir := client/scss

.PHONY: jpmcc clean
server :
	nodemon index.js

jpmcss :
	$(cmd_prefix)/node-sass --output-style=compressed $(scss_dir)/jpmcc.scss $(out_dir)/jpmcc.css

inline_jpmcc : jpmcss
	node ./util/inline.js

deploy :
	pm2 deploy ecosystem.config.js production

clean :
	rm -rf build/*
