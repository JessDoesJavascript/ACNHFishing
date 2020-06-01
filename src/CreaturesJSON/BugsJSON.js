import React from 'react';

const bugsJSON = [{ "name": "Common butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/3/3a/NH-Icon-commonbutterfly.png/revision/latest?cb=20200401005428", "price": 160, "location": "Flying", "time": "4 AM - 7 PM", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": false, "aug": false, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Yellow butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/f/fa/NH-Icon-yellowbutterfly.png/revision/latest?cb=20200401005428", "price": 160, "location": "Flying", "time": "4 AM - 7 PM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": false, "aug": false, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Tiger butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest?cb=20200401005429", "price": 240, "location": "Flying", "time": "4 AM - 7 PM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Peacock butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-peacockbutterfly.png/revision/latest?cb=20200401005429", "price": 2500, "location": "Flying by Hybrid Flowers", "time": "4 AM - 7 PM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": false, "aug": false, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Common bluebottle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest?cb=20200401005428", "price": 300, "location": "Flying", "time": "4 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Paper kite butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest?cb=20200401005429", "price": 1000, "location": "Flying", "time": "8 AM - 7 PM", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Great purple emperor", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/2/27/NH-Icon-greatpurpleemperor.png/revision/latest?cb=20200401005428", "price": 3000, "location": "Flying", "time": "4 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Monarch butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-monarchbutterfly.png/revision/latest?cb=20200401005429", "price": 140, "location": "Flying", "time": "4 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": false, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Emperor butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest?cb=20200401005428", "price": 4000, "location": "Flying", "time": "5 PM - 8 AM", "jan": true, "feb": true, "mar": true, "apr": false, "may": false, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": true }, { "name": "Agrias butterfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-agriasbutterfly.png/revision/latest?cb=20200401005428", "price": 3000, "location": "Flying", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Rajah Brooke's birdwing", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest?cb=20200401005428", "price": 2500, "location": "Flying", "time": "8 AM - 5 PM", "jan": true, "feb": true, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": true }, { "name": "Queen Alexandra's birdwing", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest?cb=20200401005429", "price": 4000, "location": "Flying", "time": "8 AM - 4 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Moth", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-moth.png/revision/latest?cb=20200401005428", "price": 130, "location": "Flying by Light", "time": "7 PM - 4 AM", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Atlas moth", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest?cb=20200401005428", "price": 3000, "location": "On Trees", "time": "7 PM - 4 AM", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Madagascan sunset moth", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest?cb=20200401005429", "price": 2500, "location": "Flying", "time": "8 AM - 4 PM", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Long locust", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest?cb=20200401005429", "price": 200, "location": "On the Ground", "time": "8 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Migratory locust", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest?cb=20200401005429", "price": 600, "location": "On the Ground", "time": "8 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": true, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Rice grasshopper", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest?cb=20200401005428", "price": 160, "location": "On the Ground", "time": "8 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": true, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Grasshopper", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/NH-Icon-grasshopper.png/revision/latest?cb=20200401005428", "price": 160, "location": "On the Ground", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Cricket", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest?cb=20200401005428", "price": 130, "location": "On the Ground", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": false, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Bell cricket", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest?cb=20200401005428", "price": 430, "location": "On the Ground", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": false, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Mantis", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest?cb=20200401005429", "price": 430, "location": "On Flowers", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Orchid mantis", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-orchidmantis.png/revision/latest?cb=20200401005428", "price": 2400, "location": "On Flowers (White)", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Honeybee", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-honeybee.png/revision/latest?cb=20200401005428", "price": 200, "location": "Flying", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": false, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Wasp", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-wasp.png/revision/latest?cb=20200401005428", "price": 2500, "location": "Shaking Trees", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Brown cicada", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-browncicada.png/revision/latest?cb=20200401005428", "price": 250, "location": "On Trees", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Robust cicada", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-robustcicada.png/revision/latest?cb=20200401005429", "price": 300, "location": "On Trees", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Giant cicada", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/58/NH-Icon-giantcicada.png/revision/latest?cb=20200401005428", "price": 500, "location": "On Trees", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Walker cicada", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Icon-walkercicada.png/revision/latest?cb=20200401005429", "price": 400, "location": "On Trees", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Evening cicada", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-eveningcicada.png/revision/latest?cb=20200401005428", "price": 550, "location": "On Trees", "time": "4 AM - 8 AM & 4 PM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Cicada shell", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Icon-cicadashell.png/revision/latest?cb=20200401005428", "price": 10, "location": "On Trees", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Red dragonfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Icon-reddragonfly.png/revision/latest?cb=20200401005428", "price": 180, "location": "Flying", "time": "8 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": false, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Darner dragonfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/7/70/NH-Icon-darnerdragonfly.png/revision/latest?cb=20200401005428", "price": 230, "location": "Flying", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Banded dragonfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/6/64/NH-Icon-bandeddragonfly.png/revision/latest?cb=20200401005428", "price": 4500, "location": "Flying", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Damselfly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-damselfly.png/revision/latest?cb=20200401005428", "price": 500, "location": "Flying", "time": "All day", "jan": true, "feb": true, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": false, "sep": false, "oct": false, "nov": true, "dec": true }, { "name": "Firefly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-firefly.png/revision/latest?cb=20200401005428", "price": 300, "location": "Flying", "time": "7 PM - 4 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": true, "jul": false, "aug": false, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Mole cricket", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-molecricket.png/revision/latest?cb=20200401005429", "price": 500, "location": "Underground", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": false, "jul": false, "aug": false, "sep": false, "oct": false, "nov": true, "dec": true }, { "name": "Pondskater", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/NH-Icon-pondskater.png/revision/latest?cb=20200401005429", "price": 130, "location": "On Ponds and Rivers", "time": "8 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Diving beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-divingbeetle.png/revision/latest?cb=20200401005428", "price": 800, "location": "On Ponds and Rivers", "time": "8 AM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Giant water bug", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-giantwaterbug.png/revision/latest?cb=20200401005428", "price": 2000, "location": "On Ponds and Rivers", "time": "7 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Stinkbug", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/8/80/NH-Icon-stinkbug.png/revision/latest?cb=20200401005429", "price": 120, "location": "On Flowers", "time": "All day", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Man-faced stink bug", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-manfacedstinkbug.png/revision/latest?cb=20200401005429", "price": 1000, "location": "On Flowers", "time": "7 PM - 8 AM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Ladybug", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/18/NH-Icon-ladybug.png/revision/latest?cb=20200401005428", "price": 200, "location": "On Flowers", "time": "8 AM - 5 PM", "jan": false, "feb": false, "mar": true, "apr": true, "may": true, "jun": true, "jul": false, "aug": false, "sep": false, "oct": true, "nov": false, "dec": false }, { "name": "Tiger beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-tigerbeetle.png/revision/latest?cb=20200401005428", "price": 1500, "location": "On the Ground", "time": "All day", "jan": false, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": false, "dec": false }, { "name": "Jewel beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-jewelbeetle.png/revision/latest?cb=20200401005428", "price": 2400, "location": "On Tree Stumps", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Violin beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-violinbeetle.png/revision/latest?cb=20200401005429", "price": 450, "location": "On Tree Stumps", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": false, "aug": false, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Citrus long-horned beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-citruslonghornedbeetle.png/revision/latest?cb=20200401005428", "price": 350, "location": "On Tree Stumps", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Rosalia batesi beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/NH-Icon-rosaliabatesibeetle.png/revision/latest?cb=20200401005429", "price": 3000, "location": "On Tree Stumps", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Blue weevil beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/NH-Icon-blueweevilbeetle.png/revision/latest?cb=20200401005428", "price": 800, "location": "On Trees (Coconut?)", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Dung beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-dungbeetle.png/revision/latest?cb=20200401005431", "price": 3000, "location": "On the Ground (rolling snowballs)", "time": "All day", "jan": true, "feb": true, "mar": false, "apr": false, "may": false, "jun": false, "jul": false, "aug": false, "sep": false, "oct": false, "nov": false, "dec": true }, { "name": "Earth-boring dung beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-earthboringdungbeetle.png/revision/latest?cb=20200401005428", "price": 300, "location": "On the Ground", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Scarab beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Icon-scarabbeetle.png/revision/latest?cb=20200401005429", "price": 10000, "location": "On Trees", "time": "11 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Drone beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-dronebeetle.png/revision/latest?cb=20200401005428", "price": 200, "location": "On Trees", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": true, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Goliath beetle", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/NH-Icon-goliathbeetle.png/revision/latest?cb=20200401005428", "price": 8000, "location": "On Trees (Coconut)", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Saw stag", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/48/NH-Icon-sawstag.png/revision/latest?cb=20200401005429", "price": 2000, "location": "On Trees", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Miyama stag", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1b/NH-Icon-miyamastag.png/revision/latest?cb=20200401005429", "price": 1000, "location": "On Trees", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Giant stag", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-giantstag.png/revision/latest?cb=20200401005428", "price": 10000, "location": "On Trees", "time": "11 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Rainbow stag", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-rainbowstag.png/revision/latest?cb=20200401005429", "price": 6000, "location": "On Trees", "time": "7 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Cyclommatus stag", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/NH-Icon-cyclommatusstag.png/revision/latest?cb=20200401005428", "price": 8000, "location": "On Trees (Coconut)", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Golden stag", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-goldenstag.png/revision/latest?cb=20200401005428", "price": 12000, "location": "On Trees (Coconut)", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Giraffe stag", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-giraffestag.png/revision/latest?cb=20200401005428", "price": 12000, "location": "On Trees (Coconut?)", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Horned dynastid", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-horneddynastid.png/revision/latest?cb=20200401005428", "price": 1350, "location": "On Trees", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Horned atlas", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-hornedatlas.png/revision/latest?cb=20200401005428", "price": 8000, "location": "On Trees (Coconut)", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Horned elephant", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-hornedelephant.png/revision/latest?cb=20200401005429", "price": 8000, "location": "On Trees (Coconut)", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Horned hercules", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c2/NH-Icon-hornedhercules.png/revision/latest?cb=20200401005428", "price": 12000, "location": "On Trees (Coconut)", "time": "5 PM - 8 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": false, "oct": false, "nov": false, "dec": false }, { "name": "Walking stick", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/NH-Icon-walkingstick.png/revision/latest?cb=20200401005428", "price": 600, "location": "On Trees", "time": "4 AM - 8 AM & 5 PM - 7 PM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Walking leaf", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/cb/NH-Icon-walkingleaf.png/revision/latest?cb=20200401005429", "price": 600, "location": "Under Trees Disguised as Leafs", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": false, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Bagworm", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/8/81/NH-Icon-bagworm.png/revision/latest?cb=20200401005428", "price": 600, "location": "Shaking Trees", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Ant", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/45/NH-Icon-ant.png/revision/latest?cb=20200401005428", "price": 80, "location": "On rotten food", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Hermit crab", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-hermitcrab.png/revision/latest?cb=20200401005430", "price": 1000, "location": "Beach disguised as Shells", "time": "7 PM - 8 AM", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Wharf roach", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Icon-wharfroach.png/revision/latest?cb=20200401005428", "price": 200, "location": "On Beach Rocks", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Fly", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-fly.png/revision/latest?cb=20200401005428", "price": 60, "location": "On Trash Items", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Mosquito", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-mosquito.png/revision/latest?cb=20200401005429", "price": 130, "location": "Flying", "time": "5 PM - 4 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": false, "jun": true, "jul": true, "aug": true, "sep": true, "oct": false, "nov": false, "dec": false }, { "name": "Flea", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/NH-Icon-flea.png/revision/latest?cb=20200401005428", "price": 70, "location": "Villager's Heads", "time": "All day", "jan": false, "feb": false, "mar": false, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": false }, { "name": "Snail", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b1/NH-Icon-snail.png/revision/latest?cb=20200401005429", "price": 250, "location": "On Rocks (Rain)", "time": "All day", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Pill bug", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-pillbug.png/revision/latest?cb=20200401005428", "price": 250, "location": "Hitting Rocks", "time": "11 PM - 4 PM", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": false, "aug": false, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Centipede", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/3/30/NH-Icon-centipede.png/revision/latest?cb=20200401005429", "price": 300, "location": "Hitting Rocks", "time": "4 PM - 11 PM", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": false, "aug": false, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Spider", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-spider.png/revision/latest?cb=20200401005429", "price": 480, "location": "Shaking Trees", "time": "7 PM - 8 AM", "jan": true, "feb": true, "mar": true, "apr": true, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": true, "dec": true }, { "name": "Tarantula", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0a/NH-Icon-tarantula.png/revision/latest?cb=20200401005429", "price": 8000, "location": "On the Ground", "time": "7 PM - 4 AM", "jan": true, "feb": true, "mar": true, "apr": true, "may": false, "jun": false, "jul": false, "aug": false, "sep": false, "oct": false, "nov": true, "dec": true }, { "name": "Scorpion", "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/NH-Icon-scorpion.png/revision/latest?cb=20200401005429", "price": 8000, "location": "On the Ground", "time": "7 PM - 4 AM", "jan": false, "feb": false, "mar": false, "apr": false, "may": true, "jun": true, "jul": true, "aug": true, "sep": true, "oct": true, "nov": false, "dec": false }]

export default bugsJSON;