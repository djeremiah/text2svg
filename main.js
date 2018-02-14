#! /usr/bin/env node
const TextToSVG = require('text-to-svg');
var argv = require('minimist')(process.argv.slice(2), {string: ['text', 'fill', 'stroke'], number: ['fontSize'], default: {'text': 'hello', 'fontSize': 72, 'fill': 'black', 'stroke': 'black'}, unknown: function(){console.log('usage: text2svg --text arg1'); process.exit(2)}});

const textToSVG = TextToSVG.loadSync('fonts/OpenSans/OpenSans-Regular.ttf');
const svg = textToSVG.getSVG(argv.text,{fontSize: argv.fontSize, anchor: 'top', attributes: {fill: argv.fill, stroke: argv.stroke}});
console.log(svg);
