export function getLayersNames(scene, needle) {
  let out = scene.map.getObjectLayerNames();

  return !!needle
    ? out.filter((_) => {
        return _.indexOf(needle) !== -1;
      }).sort()
    : out;
}

export function getFrameNamesFromAtlas(scene, atlasName) {
    const atlasTexture = scene.textures.get(atlasName);
    const frames = atlasTexture.getFrameNames();
    return frames;
}