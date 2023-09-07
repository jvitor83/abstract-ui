#!/bin/bash
#cat dist/ui-jus-ng/runtime.js dist/ui-jus-ng/polyfills.js dist/ui-jus-ng/styles.js dist/ui-jus-ng/scripts.js dist/ui-jus-ng/*.js dist/ui-jus-ng/main.js > dist/ui-jus-ng/bundle.js
cat dist/ui-jus-ng/*.js > dist/ui-jus-ng/bundle.js
cp dist/ui-jus-ng/bundle.js dist/ui-jus-ng/assets/
cp dist/ui-jus-ng/styles.css dist/ui-jus-ng/assets/