cmd_prefix := ./node_modules/.bin
build_dir := build
app_name := interactive-graphics
linux_executable := $(app_name)-linux
mac_executable := $(app_name)-macos
entry := dist/server.js

.PHONY: start
start :
	$(cmd_prefix)/nodemon --ext ts --ignore dist/ --exec ${cmd_prefix}/ts-node src/server.ts

.PHONY: watch-ts
watch-ts :
	$(cmd_prefix)/tsc -w

.PHONY: watch-node
watch-node :
	${cmd_prefix}/nodemon --ext js  --ignore src/ dist/server.js

.PHONY: test
test :
	${cmd_prefix}/jest --forceExit --coverage --verbose

.PHONY: watch-test
watch-test :
	${cmd_prefix}/jest --forceExit --coverage --verbose --watchAll

.PHONY: watch
watch :
	${cmd_prefix}/concurrently -k -p "[{name}]" -n "TypeScript,Node" -c "cyan.bold,green.bold" "$(cmd_prefix)/tsc -w" "${cmd_prefix}/nodemon dist/server.js"

.PHONY: build-ts
build-ts :
	$(cmd_prefix)/tsc

.PHONY: lint
lint :
	${cmd_prefix}/tsc --noEmit && ${cmd_prefix}/eslint "**/*.{js,ts}" --quiet --fix

.PHONY: run
run :
	NODE_ENV=production ./$(BUILD_DIR)/@ftchinese/$(MAC_BIN)

.PHONY: pkg
pkg :
	pkg --targets node14-linux-x64,node14-macos-x64 -c package.json --out-path $(BUILD_DIR) $(ENTRY)

.PHONY: deploy
deploy : clean build pkg
	rsync -v ./$(BUILD_DIR)/@ftchinese/$(LINUX_BIN) tk11:/home/node/next/
	ssh tk11 supervisorctl restart $(BINARY)

.PHONY: clean
clean :
	rm -rf dist/** && rm -rf build/@ftchinese/**
