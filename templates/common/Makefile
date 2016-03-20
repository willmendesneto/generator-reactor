GIT_SHA = $(shell git rev-parse --short HEAD)

all: build

clean:
	npm run clean

install:
	npm install

test: install
	npm test

watch-test: install
	npm run watch-test

build: install
	NODE_ENV=production npm run build

start-api: install
	npm run start-api

start-dist: install
	npm run start-dist

eslint: install
	npm run eslint

ci-travis: test build

ci-clean:
	rm -rf dist
	rm -rf build/dist

.PHONY: all clean test build ci-travis ci-clean
