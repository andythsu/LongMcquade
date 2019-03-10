#!/bin/bash
echo "Building..."

ng build --prod --base-href https://andythsu.github.io/LongMcquade/

echo "Deploying.."

ngh --no-silent