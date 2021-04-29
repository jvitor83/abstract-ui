# ABSTRACT-UI

Project to achieve 2 goals:

  - Create a component layer to abstract a ui library suite (bootstrap/material/ionic/kendo/primeng/etc)
  - Create web components from those (using angular elements)


This is a experiment!

## Getting started
`npm install`

## Develop
```
npm start
```

## Production
1) Comment the bootstrap line of app.module.ts (not found a solution to switch that yet)

2) `npm run build.prod`

3) Create a html and import the js and css files from the dist like:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Angular Elements</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <abs-button id="element" suite="ionic" clickEvent="console.log('dynamic');">DYNAMIC</abs-button>
    <!-- HTML <abs-button #htmlButton suite="html" (clickEvent)="click(htmlButton.suite, $event)">HTML</abs-button> -->
    <!-- IONIC <abs-button #ionicButton suite="ionic" (clickEvent)="click(ionicButton.suite, $event)">IONIC</abs-button> -->
    <!-- PRIMENG <abs-button #primengButton suite="primeng" (clickEvent)="click(primengButton.suite, $event)">PRIMENG</abs-button> -->
    <!-- MATERIAL <abs-button #materialButton suite="material" (clickEvent)="click(materialButton.suite, $event)">MATERIAL</abs-button> -->
    <!-- BOOTSTRAP <abs-button #bootstrapButton suite="bootstrap" (clickEvent)="click(bootstrapButton.suite, $event)">BOOTSTRAP</abs-button> -->
    <!-- KENDOUI <abs-button #kendouiButton suite="kendoui" (clickEvent)="click(kendouiButton.suite, $event)">KENDOUI</abs-button> -->

	<script>
		document.getElementById('element').addEventListener('clickEvent', e => console.log(e));
	</script>

    <script src="bundle.js" type="module"></script>
    <link rel="stylesheet" href="styles.css"/>
  </body>
</html>

```
