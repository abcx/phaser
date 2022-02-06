export function getTilesetData(scene) {
  // get data for all used tilesets
  const firstGids = scene.map.tilesets.map((item) => {
    return scene.map.getTileset(item.name).firstgid;
  });

  // get data for all used tilesets
  const tilesets = scene.map.tilesets.map((item) => {
    return item.name;
  });

//   console.log(firstGids, scene.map.tilesets);

  return { firstGids, tilesets };
}

export function checkGid(firstGids, tilesets, gid) {
  //   for (const [key, value] of Object.entries(firstGids)) {
  //     console.log(`${key}: ${value}`);
  //   }
  let out = 0;

  for (let i = 1; i < firstGids.length; i++) {
    if (gid > firstGids[i]) {
      out++;
    }
  }
  return {
    key: tilesets[out],
    gid: gid - firstGids[out],
  };
}
