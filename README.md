Simple platform game written in Phaser 3.

How to add new level:
* create new level in Tiled
* export project as JSON file to src/assets/json folder
* open any src/scenes/Level_00x.js file, increase number in filename and save it in same folder
* open new created file and Change all occurrences Level_00x to Level_00y
* open src/config/levels.conf.js and add configuration for new level, for example: Level_00x: standard
* open src/index.js and add import command for new level file, eq: import Level_00x from "./scenes/Level_00x.js";
* to config.scene array (inside index.js) add definition for new level, eq: Level_00x