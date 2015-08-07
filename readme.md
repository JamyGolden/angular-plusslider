# ngPlusSlider jQuery plugin

An agnostic, fluid jQuery content slider that is easily configurable and stylable.

This plugin makes use of (PlusSlider)[https://github.com/JamyGolden/PlusSlider]. Visit PlusSlider for more information.

## Usage instructions
Include the jQuery, PlusSlider, Angular and ngPlusSlider scripts to your page:
```
<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/jquery.easing/js/jquery.easing.min.js"></script>
<script type="text/javascript" src="bower_components/jquery.plusslider/js/jquery.plusslider.min.js"></script>
<script type='text/javascript' src='bower_components/angular-plusslider/dist/angular-plusslider.min.js'></script>
```

Add ngPlusSlider to your angular app dependencies:
```
angular.module('App', [
    'ngPlusSlider'
]);
```

You are now able to use the PlusSlider directive:
```
<div plusslider>
    <div>Slide item 1</div>
    <div>Slide item 2</div>
    <div>Slide item 3</div>
</div>
```

Options can be added to the directive via the plusslider-options attribute. The attribute accepts an object of options just as (PlusSlider)[https://github.com/JamyGolden/PlusSlider] does.
```
<div plusslider
 plusslider-options="{
    autoPlay: false,
    sliderEasing: 'easeInOutExpo',
    paginationPosition: 'append',
    sliderType: 'slider'
 }"
    <div>Slide item 1</div>
    <div>Slide item 2</div>
    <div>Slide item 3</div>
</div>
```
