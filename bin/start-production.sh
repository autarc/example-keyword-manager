#!/usr/bin/env bash

set -e

docker build --no-cache -t example-keyword-manager:latest .

docker run --rm -it -p 10000:10000 example-keyword-manager:latest
