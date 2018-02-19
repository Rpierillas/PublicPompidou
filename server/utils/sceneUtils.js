const scenes = require('../databases/scenes');


exports.findScene = sceneID => (
  scenes.find(scene => (
    scene.id === sceneID
  ))
);
