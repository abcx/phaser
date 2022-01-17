// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assets = void 0;
var assets = ['ground', 'island', 'star', 'player', 'tile'];
exports.assets = assets;
},{}],"game-settings.json":[function(require,module,exports) {
module.exports = {
  "tileSize": 48,
  "scene": {
    "width": 23,
    "height": 15
  }
};
},{}],"level.json":[function(require,module,exports) {
module.exports = {
  "0": {
    "x": 0,
    "y": 0,
    "type": "star"
  },
  "1": {
    "x": 480,
    "y": 240,
    "type": "tile"
  },
  "2": {
    "x": 336,
    "y": 96,
    "type": "star"
  },
  "3": {
    "x": 480,
    "y": 192,
    "type": "star"
  },
  "27": {
    "x": 192,
    "y": 48,
    "type": "star"
  },
  "50": {
    "x": 192,
    "y": 96,
    "type": "tile"
  },
  "54": {
    "x": 384,
    "y": 96,
    "type": "player"
  },
  "77": {
    "x": 384,
    "y": 144,
    "type": "star"
  },
  "100": {
    "x": 384,
    "y": 192,
    "type": "tile"
  },
  "default": [{
    "x": 336,
    "y": 144,
    "type": "tile"
  }, {
    "x": 480,
    "y": 240,
    "type": "tile"
  }, {
    "x": 336,
    "y": 96,
    "type": "star"
  }, {
    "x": 480,
    "y": 192,
    "type": "star"
  }]
};
},{}],"editor.js":[function(require,module,exports) {
"use strict";

var _assets = require("./assets");

var SETTINGS = _interopRequireWildcard(require("./game-settings.json"));

var level = _interopRequireWildcard(require("./level.json"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Editor = function () {
  var panel;
  var panelTilesCounter = 0;
  var saveBtn;
  var scene;
  var scenePosition;
  var current;
  var currentImage;

  var init = function init() {
    getHtmlElements();
    new Promise(function (resolve) {
      _assets.assets.forEach(function (_) {
        loadAsset("assets/".concat(_, ".png")).then(function (img) {
          return addToPanel(_, img, resolve);
        }).catch(function (err) {
          return console.error(err);
        });
      });
    }).then(function (_) {
      createGridElements();
    });
    saveBtn.addEventListener("click", function (e) {
      return saveTemplateAsFile("level.json", level);
    }, true);
  };

  var loadAsset = function loadAsset(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.addEventListener("load", function () {
        return resolve(img);
      });
      img.addEventListener("error", function (err) {
        return reject(err);
      });
      img.src = url;
    });
  };

  var addToPanel = function addToPanel(name, img, resolve) {
    console.log(name, "w: ".concat(img.width, " | h: ").concat(img.height));
    img.dataset.id = name.split(".")[0];
    img.addEventListener("click", onClickPanel, true);
    panel.appendChild(img);
    panelTilesCounter++;

    if (panelTilesCounter === _assets.assets.length) {
      resolve(true);
    }
  };

  var getHtmlElements = function getHtmlElements() {
    panel = document.querySelector("#panel");
    scene = document.querySelector("#scene");
    saveBtn = panel.querySelector("#save");
    scene.style.width = "".concat(SETTINGS.tileSize * SETTINGS.scene.width, "px");
    scene.style.height = "".concat(SETTINGS.tileSize * SETTINGS.scene.height, "px");
    scenePosition = scene.getBoundingClientRect();
  };

  var createGridElements = function createGridElements() {
    var allGrids = SETTINGS.scene.width * SETTINGS.scene.height;
    var grid;
    var tile;

    for (var i = 0; i < allGrids; i++) {
      grid = document.createElement("div");
      grid.className = "grid";
      grid.dataset.id = i;
      grid.addEventListener("click", onGridClick, true);
      console.log(i, level[i]);

      if (level[i]) {
        tile = panel.querySelector("img[data-id=\"".concat(level[i].type, "\"]"));
        grid.appendChild(tile.cloneNode());
      }

      scene.appendChild(grid);
    }
  };

  var onClickPanel = function onClickPanel(e) {
    console.log("SELECT tile ".concat(e.target.dataset.id));
    current = e.target.dataset.id;
    currentImage = e.target;
  };

  var onGridClick = function onGridClick(e) {
    var id = e.target.dataset.id;

    if (isNaN(Number(id))) {
      return false;
    }

    var pos = e.target.getBoundingClientRect();
    e.target.appendChild(currentImage.cloneNode());
    level[id] = {
      x: pos.left - scenePosition.left - 1,
      y: pos.top - scenePosition.top - 1,
      type: current
    };
    console.log("INSERT ".concat(current, " on grid ").concat(id));
    console.log(level);
  };

  var saveTemplateAsFile = function saveTemplateAsFile(filename, data) {
    var blob = new Blob([JSON.stringify(data)], {
      type: "application/json"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    a.click();
    a.remove();
  };

  return {
    init: init
  };
}();

Editor.init();
},{"./assets":"assets.js","./game-settings.json":"game-settings.json","./level.json":"level.json"}],"../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37433" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","editor.js"], null)
//# sourceMappingURL=/editor.js.map