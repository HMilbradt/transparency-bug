const sharp = require('sharp')

sharp('./svg-bug-broken.svg').png().toFile('./broken.png')
sharp('./svg-bug-working.svg').png().toFile('./working.png')
