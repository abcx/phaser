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
})({"package-lock.json":[function(require,module,exports) {
module.exports = {
  "name": "phaser-mario",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "phaser-mario",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "phaser": "^3.55.2"
      },
      "devDependencies": {
        "del-cli": "^4.0.1",
        "marked": "^4.0.12",
        "parcel-bundler": "1.12.4",
        "sass": "1.32.5"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.11.tgz",
      "integrity": "sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.10.4"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.12.7.tgz",
      "integrity": "sha512-YaxPMGs/XIWtYqrdEOZOCPsVWfEoriXopnsz3/i7apYPXQ3698UFhS6dVT1KN5qOsWmVgw/FOrmQgpRaZayGsw==",
      "dev": true
    },
    "node_modules/@babel/core": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.12.10.tgz",
      "integrity": "sha512-eTAlQKq65zHfkHZV0sIVODCPGVgoo1HdBlbSLi9CqOzuZanMv2ihzY+4paiKr1mH+XmYESMAmJ/dpZ68eN6d8w==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.10.4",
        "@babel/generator": "^7.12.10",
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helpers": "^7.12.5",
        "@babel/parser": "^7.12.10",
        "@babel/template": "^7.12.7",
        "@babel/traverse": "^7.12.10",
        "@babel/types": "^7.12.10",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.1",
        "json5": "^2.1.2",
        "lodash": "^4.17.19",
        "semver": "^5.4.1",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/json5": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
      "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@babel/core/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.12.11.tgz",
      "integrity": "sha512-Ggg6WPOJtSi8yYQvLVjG8F/TlpWDlKx0OpS4Kt+xMQPs5OaGYWy+v1A+1TvxI6sAMGZpKWWoAQ1DaeQbImlItA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.11",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      }
    },
    "node_modules/@babel/generator/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.12.10.tgz",
      "integrity": "sha512-XplmVbC1n+KY6jL8/fgLVXXUauDIB+lD5+GsQEh6F6GBF1dq1qy4DP4yXWzDKcoqXB3X58t61e85Fitoww4JVQ==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.10"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.10.4.tgz",
      "integrity": "sha512-L0zGlFrGWZK4PbT8AszSfLTM5sDU1+Az/En9VrdT8/LmEiJt4zXt+Jve9DCAnQcbqDhCI+29y/L93mrDzddCcg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-explode-assignable-expression": "^7.10.4",
        "@babel/types": "^7.10.4"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.12.5.tgz",
      "integrity": "sha512-+qH6NrscMolUlzOYngSBMIOQpKUGPPsc61Bu5W10mg84LxZ7cmvnBHzARKbDoFxVvqqAbj6Tg6N7bSrWSPXMyw==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.12.5",
        "@babel/helper-validator-option": "^7.12.1",
        "browserslist": "^4.14.5",
        "semver": "^5.5.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.12.1.tgz",
      "integrity": "sha512-hkL++rWeta/OVOBTRJc9a5Azh5mt5WgZUGAKMD8JM141YsE08K//bp1unBBieO6rUKkIPyUE0USQ30jAy3Sk1w==",
      "dev": true,
      "dependencies": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/helper-member-expression-to-functions": "^7.12.1",
        "@babel/helper-optimise-call-expression": "^7.10.4",
        "@babel/helper-replace-supers": "^7.12.1",
        "@babel/helper-split-export-declaration": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.12.7.tgz",
      "integrity": "sha512-idnutvQPdpbduutvi3JVfEgcVIHooQnhvhx0Nk9isOINOIGYkZea1Pk2JlJRiUnMefrlvr0vkByATBY/mB4vjQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.10.4",
        "regexpu-core": "^4.7.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-map": {
      "version": "7.10.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-map/-/helper-define-map-7.10.5.tgz",
      "integrity": "sha512-fMw4kgFB720aQFXSVaXr79pjjcW5puTCM16+rECJ/plGS+zByelE8l9nCpV1GibxTnFVmUuYG9U8wYfQHdzOEQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/types": "^7.10.5",
        "lodash": "^4.17.19"
      }
    },
    "node_modules/@babel/helper-explode-assignable-expression": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.12.1.tgz",
      "integrity": "sha512-dmUwH8XmlrUpVqgtZ737tK88v07l840z9j3OEhCLwKTkjlvKpfqXVIZ0wpK3aeOxspwGrf/5AP5qLx4rO3w5rA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.1"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.12.11.tgz",
      "integrity": "sha512-AtQKjtYNolKNi6nNNVLQ27CP6D9oFR6bq/HPYSizlzbp7uC1M59XJe8L+0uXjbIaZaUJF99ruHqVGiKXU/7ybA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-get-function-arity": "^7.12.10",
        "@babel/template": "^7.12.7",
        "@babel/types": "^7.12.11"
      }
    },
    "node_modules/@babel/helper-get-function-arity": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.10.tgz",
      "integrity": "sha512-mm0n5BPjR06wh9mPQaDdXWDoll/j5UpCAPl1x8fS71GHm7HA6Ua2V4ylG1Ju8lvcTOietbPNNPaSilKj+pj+Ag==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.10"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.10.4.tgz",
      "integrity": "sha512-wljroF5PgCk2juF69kanHVs6vrLwIPNp6DLD+Lrl3hoQ3PpPPikaDRNFA+0t81NOoMt2DL6WW/mdU8k4k6ZzuA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.10.4"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.12.7.tgz",
      "integrity": "sha512-DCsuPyeWxeHgh1Dus7APn7iza42i/qXqiFPWyBDdOFtvS581JQePsc1F/nD+fHrcswhLlRc2UpYS1NwERxZhHw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.7"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.12.5.tgz",
      "integrity": "sha512-SR713Ogqg6++uexFRORf/+nPXMmWIn80TALu0uaFb+iQIUoR7bOC7zBWyzBs5b3tBBJXuyD0cRu1F15GyzjOWA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.5"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.12.1.tgz",
      "integrity": "sha512-QQzehgFAZ2bbISiCpmVGfiGux8YVFXQ0abBic2Envhej22DVXV9nCFaS5hIQbkyo1AdGb+gNME2TSh3hYJVV/w==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.12.1",
        "@babel/helper-replace-supers": "^7.12.1",
        "@babel/helper-simple-access": "^7.12.1",
        "@babel/helper-split-export-declaration": "^7.11.0",
        "@babel/helper-validator-identifier": "^7.10.4",
        "@babel/template": "^7.10.4",
        "@babel/traverse": "^7.12.1",
        "@babel/types": "^7.12.1",
        "lodash": "^4.17.19"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.12.10.tgz",
      "integrity": "sha512-4tpbU0SrSTjjt65UMWSrUOPZTsgvPgGG4S8QSTNHacKzpS51IVWGDj0yCwyeZND/i+LSN2g/O63jEXEWm49sYQ==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.10"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.10.4.tgz",
      "integrity": "sha512-O4KCvQA6lLiMU9l2eawBPMf1xPP8xPfB3iEQw150hOVTqj/rfXz0ThTb4HEzqQfs2Bmo5Ay8BzxfzVtBrr9dVg==",
      "dev": true
    },
    "node_modules/@babel/helper-remap-async-to-generator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.12.1.tgz",
      "integrity": "sha512-9d0KQCRM8clMPcDwo8SevNs+/9a8yWVVmaE80FGJcEP8N1qToREmWEGnBn8BUlJhYRFz6fqxeRL1sl5Ogsed7A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.10.4",
        "@babel/helper-wrap-function": "^7.10.4",
        "@babel/types": "^7.12.1"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.12.11.tgz",
      "integrity": "sha512-q+w1cqmhL7R0FNzth/PLLp2N+scXEK/L2AHbXUyydxp828F4FEa5WcVoqui9vFRiHDQErj9Zof8azP32uGVTRA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.12.7",
        "@babel/helper-optimise-call-expression": "^7.12.10",
        "@babel/traverse": "^7.12.10",
        "@babel/types": "^7.12.11"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.12.1.tgz",
      "integrity": "sha512-OxBp7pMrjVewSSC8fXDFrHrBcJATOOFssZwv16F3/6Xtc138GHybBfPbm9kfiqQHKhYQrlamWILwlDCeyMFEaA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.1"
      }
    },
    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.12.1.tgz",
      "integrity": "sha512-Mf5AUuhG1/OCChOJ/HcADmvcHM42WJockombn8ATJG3OnyiSxBK/Mm5x78BQWvmtXZKHgbjdGL2kin/HOLlZGA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.1"
      }
    },
    "node_modules/@babel/helper-split-export-declaration": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.12.11.tgz",
      "integrity": "sha512-LsIVN8j48gHgwzfocYUSkO/hjYAOJqlpJEc7tGXcIm4cubjVUf8LGW6eWRyxEu7gA25q02p0rQUWoCI33HNS5g==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.11"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.12.11.tgz",
      "integrity": "sha512-np/lG3uARFybkoHokJUmf1QfEvRVCPbmQeUQpKow5cQ3xWrV9i3rUHodKDJPQfTVX61qKi+UdYk8kik84n7XOw==",
      "dev": true
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.11.tgz",
      "integrity": "sha512-TBFCyj939mFSdeX7U7DDj32WtzYY7fDcalgq8v3fBZMNOJQNn7nOYzMaUCiPxPYfCup69mtIpqlKgMZLvQ8Xhw==",
      "dev": true
    },
    "node_modules/@babel/helper-wrap-function": {
      "version": "7.12.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.12.3.tgz",
      "integrity": "sha512-Cvb8IuJDln3rs6tzjW3Y8UeelAOdnpB8xtQ4sme2MSZ9wOxrbThporC0y/EtE16VAtoyEfLM404Xr1e0OOp+ow==",
      "dev": true,
      "dependencies": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/template": "^7.10.4",
        "@babel/traverse": "^7.10.4",
        "@babel/types": "^7.10.4"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.12.5.tgz",
      "integrity": "sha512-lgKGMQlKqA8meJqKsW6rUnc4MdUk35Ln0ATDqdM1a/UpARODdI4j5Y5lVfUScnSNkJcdCRAaWkspykNoFg9sJA==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.10.4",
        "@babel/traverse": "^7.12.5",
        "@babel/types": "^7.12.5"
      }
    },
    "node_modules/@babel/highlight": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.10.4.tgz",
      "integrity": "sha512-i6rgnR/YgPEQzZZnbTHHuZdlE8qyoBNalD6F+q4vAFlcMEcqmkoG+mPqJYJCo63qPf74+Y1UZsl3l6f7/RIkmA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.10.4",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.12.11.tgz",
      "integrity": "sha512-N3UxG+uuF4CMYoNj8AhnbAcJF0PiuJ9KHuy1lQmkYsxTer/MAH9UBNHsBoAX/4s6NvlDD047No8mYVGGzLL4hg==",
      "dev": true,
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-proposal-async-generator-functions": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.12.12.tgz",
      "integrity": "sha512-nrz9y0a4xmUrRq51bYkWJIO5SBZyG2ys2qinHsN0zHDHVsUaModrkpyWWWXfGqYQmOL3x9sQIcTNN/pBGpo09A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-remap-async-to-generator": "^7.12.1",
        "@babel/plugin-syntax-async-generators": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-class-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.12.1.tgz",
      "integrity": "sha512-cKp3dlQsFsEs5CWKnN7BnSHOd0EOW8EKpEjkoz1pO2E5KzIDNV9Ros1b0CnmbVgAGXJubOYVBOGCT1OmJwOI7w==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-dynamic-import": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.12.1.tgz",
      "integrity": "sha512-a4rhUSZFuq5W8/OO8H7BL5zspjnc1FLd9hlOxIK/f7qG4a0qsqk8uvF/ywgBA8/OmjsapjpvaEOYItfGG1qIvQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-dynamic-import": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-export-namespace-from": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.12.1.tgz",
      "integrity": "sha512-6CThGf0irEkzujYS5LQcjBx8j/4aQGiVv7J9+2f7pGfxqyKh3WnmVJYW3hdrQjyksErMGBPQrCnHfOtna+WLbw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-json-strings": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.12.1.tgz",
      "integrity": "sha512-GoLDUi6U9ZLzlSda2Df++VSqDJg3CG+dR0+iWsv6XRw1rEq+zwt4DirM9yrxW6XWaTpmai1cWJLMfM8qQJf+yw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-json-strings": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-logical-assignment-operators": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.12.1.tgz",
      "integrity": "sha512-k8ZmVv0JU+4gcUGeCDZOGd0lCIamU/sMtIiX3UWnUc5yzgq6YUGyEolNYD+MLYKfSzgECPcqetVcJP9Afe/aCA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.12.1.tgz",
      "integrity": "sha512-nZY0ESiaQDI1y96+jk6VxMOaL4LPo/QDHBqL+SF3/vl6dHkTwHlOI8L4ZwuRBHgakRBw5zsVylel7QPbbGuYgg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-numeric-separator": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.12.7.tgz",
      "integrity": "sha512-8c+uy0qmnRTeukiGsjLGy6uVs/TFjJchGXUeBqlG4VWYOdJWkhhVPdQ3uHwbmalfJwv2JsV0qffXP4asRfL2SQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-object-rest-spread": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.12.1.tgz",
      "integrity": "sha512-s6SowJIjzlhx8o7lsFx5zmY4At6CTtDvgNQDdPzkBQucle58A6b/TTeEBYtyDgmcXjUTM+vE8YOGHZzzbc/ioA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
        "@babel/plugin-transform-parameters": "^7.12.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.12.1.tgz",
      "integrity": "sha512-hFvIjgprh9mMw5v42sJWLI1lzU5L2sznP805zeT6rySVRA0Y18StRhDqhSxlap0oVgItRsB6WSROp4YnJTJz0g==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-optional-chaining": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.12.7.tgz",
      "integrity": "sha512-4ovylXZ0PWmwoOvhU2vhnzVNnm88/Sm9nx7V8BPgMvAzn5zDou3/Awy0EjglyubVHasJj+XCEkr/r1X3P5elCA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1",
        "@babel/plugin-syntax-optional-chaining": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-private-methods": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.12.1.tgz",
      "integrity": "sha512-mwZ1phvH7/NHK6Kf8LP7MYDogGV+DKB1mryFOEwx5EBNQrosvIczzZFTUmWaeujd5xT6G1ELYWUz3CutMhjE1w==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.12.1.tgz",
      "integrity": "sha512-MYq+l+PvHuw/rKUz1at/vb6nCnQ2gmJBNaM62z0OgH7B2W1D9pvkpYtlti9bGtizNIU1K3zm4bZF9F91efVY0w==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.1.tgz",
      "integrity": "sha512-U40A76x5gTwmESz+qiqssqmeEsKvcSyvtgktrm0uzcARAmM9I1jR221f6Oq+GmHrcD+LvZDag1UTOTe2fL3TeA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-dynamic-import": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
      "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-flow": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.12.1.tgz",
      "integrity": "sha512-1lBLLmtxrwpm4VKmtVFselI/P3pX+G63fAtUUt6b2Nzgao77KNDwyuRt90Mj2/9pKobtt68FdvjfqohZjg/FCA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.12.1.tgz",
      "integrity": "sha512-1yRi7yAtB0ETgxdY9ti/p2TivUxJkTdhu/ZbF9MshVGqOx1TdB3b7xCXs49Fupgg50N45KcAsRP/ZqWjs9SRjg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-top-level-await": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.12.1.tgz",
      "integrity": "sha512-i7ooMZFS+a/Om0crxZodrTzNEPJHZrlMVGMTEpFAj6rYY/bKCddB0Dk/YxfPuYXOopuhKk/e1jV6h+WUU9XN3A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-arrow-functions": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.12.1.tgz",
      "integrity": "sha512-5QB50qyN44fzzz4/qxDPQMBCTHgxg3n0xRBLJUmBlLoU/sFvxVWGZF/ZUfMVDQuJUKXaBhbupxIzIfZ6Fwk/0A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-async-to-generator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.12.1.tgz",
      "integrity": "sha512-SDtqoEcarK1DFlRJ1hHRY5HvJUj5kX4qmtpMAm2QnhOlyuMC4TMdCRgW6WXpv93rZeYNeLP22y8Aq2dbcDRM1A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-remap-async-to-generator": "^7.12.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoped-functions": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.12.1.tgz",
      "integrity": "sha512-5OpxfuYnSgPalRpo8EWGPzIYf0lHBWORCkj5M0oLBwHdlux9Ri36QqGW3/LR13RSVOAoUUMzoPI/jpE4ABcHoA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoping": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.12.12.tgz",
      "integrity": "sha512-VOEPQ/ExOVqbukuP7BYJtI5ZxxsmegTwzZ04j1aF0dkSypGo9XpDHuOrABsJu+ie+penpSJheDJ11x1BEZNiyQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-classes": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.12.1.tgz",
      "integrity": "sha512-/74xkA7bVdzQTBeSUhLLJgYIcxw/dpEpCdRDiHgPJ3Mv6uC11UhjpOhl72CgqbBCmt1qtssCyB2xnJm1+PFjog==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.10.4",
        "@babel/helper-define-map": "^7.10.4",
        "@babel/helper-function-name": "^7.10.4",
        "@babel/helper-optimise-call-expression": "^7.10.4",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-replace-supers": "^7.12.1",
        "@babel/helper-split-export-declaration": "^7.10.4",
        "globals": "^11.1.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-computed-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.12.1.tgz",
      "integrity": "sha512-vVUOYpPWB7BkgUWPo4C44mUQHpTZXakEqFjbv8rQMg7TC6S6ZhGZ3otQcRH6u7+adSlE5i0sp63eMC/XGffrzg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-destructuring": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.12.1.tgz",
      "integrity": "sha512-fRMYFKuzi/rSiYb2uRLiUENJOKq4Gnl+6qOv5f8z0TZXg3llUwUhsNNwrwaT/6dUhJTzNpBr+CUvEWBtfNY1cw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-dotall-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.12.1.tgz",
      "integrity": "sha512-B2pXeRKoLszfEW7J4Hg9LoFaWEbr/kzo3teWHmtFCszjRNa/b40f9mfeqZsIDLLt/FjwQ6pz/Gdlwy85xNckBA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-duplicate-keys": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.12.1.tgz",
      "integrity": "sha512-iRght0T0HztAb/CazveUpUQrZY+aGKKaWXMJ4uf9YJtqxSUe09j3wteztCUDRHs+SRAL7yMuFqUsLoAKKzgXjw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-exponentiation-operator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.12.1.tgz",
      "integrity": "sha512-7tqwy2bv48q+c1EHbXK0Zx3KXd2RVQp6OC7PbwFNt/dPTAV3Lu5sWtWuAj8owr5wqtWnqHfl2/mJlUmqkChKug==",
      "dev": true,
      "dependencies": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.10.4",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-flow-strip-types": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.12.10.tgz",
      "integrity": "sha512-0ti12wLTLeUIzu9U7kjqIn4MyOL7+Wibc7avsHhj4o1l5C0ATs8p2IMHrVYjm9t9wzhfEO6S3kxax0Rpdo8LTg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-flow": "^7.12.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-for-of": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.12.1.tgz",
      "integrity": "sha512-Zaeq10naAsuHo7heQvyV0ptj4dlZJwZgNAtBYBnu5nNKJoW62m0zKcIEyVECrUKErkUkg6ajMy4ZfnVZciSBhg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-function-name": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.12.1.tgz",
      "integrity": "sha512-JF3UgJUILoFrFMEnOJLJkRHSk6LUSXLmEFsA23aR2O5CSLUxbeUX1IZ1YQ7Sn0aXb601Ncwjx73a+FVqgcljVw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.12.1.tgz",
      "integrity": "sha512-+PxVGA+2Ag6uGgL0A5f+9rklOnnMccwEBzwYFL3EUaKuiyVnUipyXncFcfjSkbimLrODoqki1U9XxZzTvfN7IQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-member-expression-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.12.1.tgz",
      "integrity": "sha512-1sxePl6z9ad0gFMB9KqmYofk34flq62aqMt9NqliS/7hPEpURUCMbyHXrMPlo282iY7nAvUB1aQd5mg79UD9Jg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-amd": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.12.1.tgz",
      "integrity": "sha512-tDW8hMkzad5oDtzsB70HIQQRBiTKrhfgwC/KkJeGsaNFTdWhKNt/BiE8c5yj19XiGyrxpbkOfH87qkNg1YGlOQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-commonjs": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.12.1.tgz",
      "integrity": "sha512-dY789wq6l0uLY8py9c1B48V8mVL5gZh/+PQ5ZPrylPYsnAvnEMjqsUXkuoDVPeVK+0VyGar+D08107LzDQ6pag==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-simple-access": "^7.12.1",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-systemjs": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.12.1.tgz",
      "integrity": "sha512-Hn7cVvOavVh8yvW6fLwveFqSnd7rbQN3zJvoPNyNaQSvgfKmDBO9U1YL9+PCXGRlZD9tNdWTy5ACKqMuzyn32Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-hoist-variables": "^7.10.4",
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-validator-identifier": "^7.10.4",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-umd": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.12.1.tgz",
      "integrity": "sha512-aEIubCS0KHKM0zUos5fIoQm+AZUMt1ZvMpqz0/H5qAQ7vWylr9+PLYurT+Ic7ID/bKLd4q8hDovaG3Zch2uz5Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.12.1.tgz",
      "integrity": "sha512-tB43uQ62RHcoDp9v2Nsf+dSM8sbNodbEicbQNA53zHz8pWUhsgHSJCGpt7daXxRydjb0KnfmB+ChXOv3oADp1Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-new-target": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.12.1.tgz",
      "integrity": "sha512-+eW/VLcUL5L9IvJH7rT1sT0CzkdUTvPrXC2PXTn/7z7tXLBuKvezYbGdxD5WMRoyvyaujOq2fWoKl869heKjhw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-super": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.12.1.tgz",
      "integrity": "sha512-AvypiGJH9hsquNUn+RXVcBdeE3KHPZexWRdimhuV59cSoOt5kFBmqlByorAeUlGG2CJWd0U+4ZtNKga/TB0cAw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-replace-supers": "^7.12.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-parameters": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.12.1.tgz",
      "integrity": "sha512-xq9C5EQhdPK23ZeCdMxl8bbRnAgHFrw5EOC3KJUsSylZqdkCaFEXxGSBuTSObOpiiHHNyb82es8M1QYgfQGfNg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-property-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.12.1.tgz",
      "integrity": "sha512-6MTCR/mZ1MQS+AwZLplX4cEySjCpnIF26ToWo942nqn8hXSm7McaHQNeGx/pt7suI1TWOWMfa/NgBhiqSnX0cQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.12.12.tgz",
      "integrity": "sha512-JDWGuzGNWscYcq8oJVCtSE61a5+XAOos+V0HrxnDieUus4UMnBEosDnY1VJqU5iZ4pA04QY7l0+JvHL1hZEfsw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.12.10",
        "@babel/helper-module-imports": "^7.12.5",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-jsx": "^7.12.1",
        "@babel/types": "^7.12.12"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-regenerator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.12.1.tgz",
      "integrity": "sha512-gYrHqs5itw6i4PflFX3OdBPMQdPbF4bj2REIUxlMRUFk0/ZOAIpDFuViuxPjUL7YC8UPnf+XG7/utJvqXdPKng==",
      "dev": true,
      "dependencies": {
        "regenerator-transform": "^0.14.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-reserved-words": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.12.1.tgz",
      "integrity": "sha512-pOnUfhyPKvZpVyBHhSBoX8vfA09b7r00Pmm1sH+29ae2hMTKVmSp4Ztsr8KBKjLjx17H0eJqaRC3bR2iThM54A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-shorthand-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.12.1.tgz",
      "integrity": "sha512-GFZS3c/MhX1OusqB1MZ1ct2xRzX5ppQh2JU1h2Pnfk88HtFTM+TWQqJNfwkmxtPQtb/s1tk87oENfXJlx7rSDw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-spread": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.12.1.tgz",
      "integrity": "sha512-vuLp8CP0BE18zVYjsEBZ5xoCecMK6LBMMxYzJnh01rxQRvhNhH1csMMmBfNo5tGpGO+NhdSNW2mzIvBu3K1fng==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-sticky-regex": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.12.7.tgz",
      "integrity": "sha512-VEiqZL5N/QvDbdjfYQBhruN0HYjSPjC4XkeqW4ny/jNtH9gcbgaqBIXYEZCNnESMAGs0/K/R7oFGMhOyu/eIxg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-template-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.12.1.tgz",
      "integrity": "sha512-b4Zx3KHi+taXB1dVRBhVJtEPi9h1THCeKmae2qP0YdUHIFhVjtpqqNfxeVAa1xeHVhAy4SbHxEwx5cltAu5apw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typeof-symbol": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.12.10.tgz",
      "integrity": "sha512-JQ6H8Rnsogh//ijxspCjc21YPd3VLVoYtAwv3zQmqAt8YGYUtdo5usNhdl4b9/Vir2kPFZl6n1h0PfUz4hJhaA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-escapes": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.12.1.tgz",
      "integrity": "sha512-I8gNHJLIc7GdApm7wkVnStWssPNbSRMPtgHdmH3sRM1zopz09UWPS4x5V4n1yz/MIWTVnJ9sp6IkuXdWM4w+2Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.12.1.tgz",
      "integrity": "sha512-SqH4ClNngh/zGwHZOOQMTD+e8FGWexILV+ePMyiDJttAWRh5dhDL8rcl5lSgU3Huiq6Zn6pWTMvdPAb21Dwdyg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-env": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.12.11.tgz",
      "integrity": "sha512-j8Tb+KKIXKYlDBQyIOy4BLxzv1NUOwlHfZ74rvW+Z0Gp4/cI2IMDPBWAgWceGcE7aep9oL/0K9mlzlMGxA8yNw==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.12.7",
        "@babel/helper-compilation-targets": "^7.12.5",
        "@babel/helper-module-imports": "^7.12.5",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-validator-option": "^7.12.11",
        "@babel/plugin-proposal-async-generator-functions": "^7.12.1",
        "@babel/plugin-proposal-class-properties": "^7.12.1",
        "@babel/plugin-proposal-dynamic-import": "^7.12.1",
        "@babel/plugin-proposal-export-namespace-from": "^7.12.1",
        "@babel/plugin-proposal-json-strings": "^7.12.1",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.12.1",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.12.1",
        "@babel/plugin-proposal-numeric-separator": "^7.12.7",
        "@babel/plugin-proposal-object-rest-spread": "^7.12.1",
        "@babel/plugin-proposal-optional-catch-binding": "^7.12.1",
        "@babel/plugin-proposal-optional-chaining": "^7.12.7",
        "@babel/plugin-proposal-private-methods": "^7.12.1",
        "@babel/plugin-proposal-unicode-property-regex": "^7.12.1",
        "@babel/plugin-syntax-async-generators": "^7.8.0",
        "@babel/plugin-syntax-class-properties": "^7.12.1",
        "@babel/plugin-syntax-dynamic-import": "^7.8.0",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.0",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
        "@babel/plugin-syntax-optional-chaining": "^7.8.0",
        "@babel/plugin-syntax-top-level-await": "^7.12.1",
        "@babel/plugin-transform-arrow-functions": "^7.12.1",
        "@babel/plugin-transform-async-to-generator": "^7.12.1",
        "@babel/plugin-transform-block-scoped-functions": "^7.12.1",
        "@babel/plugin-transform-block-scoping": "^7.12.11",
        "@babel/plugin-transform-classes": "^7.12.1",
        "@babel/plugin-transform-computed-properties": "^7.12.1",
        "@babel/plugin-transform-destructuring": "^7.12.1",
        "@babel/plugin-transform-dotall-regex": "^7.12.1",
        "@babel/plugin-transform-duplicate-keys": "^7.12.1",
        "@babel/plugin-transform-exponentiation-operator": "^7.12.1",
        "@babel/plugin-transform-for-of": "^7.12.1",
        "@babel/plugin-transform-function-name": "^7.12.1",
        "@babel/plugin-transform-literals": "^7.12.1",
        "@babel/plugin-transform-member-expression-literals": "^7.12.1",
        "@babel/plugin-transform-modules-amd": "^7.12.1",
        "@babel/plugin-transform-modules-commonjs": "^7.12.1",
        "@babel/plugin-transform-modules-systemjs": "^7.12.1",
        "@babel/plugin-transform-modules-umd": "^7.12.1",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.12.1",
        "@babel/plugin-transform-new-target": "^7.12.1",
        "@babel/plugin-transform-object-super": "^7.12.1",
        "@babel/plugin-transform-parameters": "^7.12.1",
        "@babel/plugin-transform-property-literals": "^7.12.1",
        "@babel/plugin-transform-regenerator": "^7.12.1",
        "@babel/plugin-transform-reserved-words": "^7.12.1",
        "@babel/plugin-transform-shorthand-properties": "^7.12.1",
        "@babel/plugin-transform-spread": "^7.12.1",
        "@babel/plugin-transform-sticky-regex": "^7.12.7",
        "@babel/plugin-transform-template-literals": "^7.12.1",
        "@babel/plugin-transform-typeof-symbol": "^7.12.10",
        "@babel/plugin-transform-unicode-escapes": "^7.12.1",
        "@babel/plugin-transform-unicode-regex": "^7.12.1",
        "@babel/preset-modules": "^0.1.3",
        "@babel/types": "^7.12.11",
        "core-js-compat": "^3.8.0",
        "semver": "^5.5.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-modules": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
      "integrity": "sha512-J36NhwnfdzpmH41M1DrnkkgAqhZaqr/NBdPfQ677mLzlaXo+oDiv1deyCDtgAhz8p328otdob0Du7+xgHGZbKg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
        "@babel/plugin-transform-dotall-regex": "^7.4.4",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.12.5.tgz",
      "integrity": "sha512-plcc+hbExy3McchJCEQG3knOsuh3HH+Prx1P6cLIkET/0dLuQDEnrT+s27Axgc9bqfsmNUNHfscgMUdBpC9xfg==",
      "dev": true,
      "dependencies": {
        "regenerator-runtime": "^0.13.4"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.12.7.tgz",
      "integrity": "sha512-GkDzmHS6GV7ZeXfJZ0tLRBhZcMcY0/Lnb+eEbXDBfCAcZCjrZKe6p3J4we/D24O9Y8enxWAg1cWwof59yLh2ow==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.10.4",
        "@babel/parser": "^7.12.7",
        "@babel/types": "^7.12.7"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.12.12.tgz",
      "integrity": "sha512-s88i0X0lPy45RrLM8b9mz8RPH5FqO9G9p7ti59cToE44xFm1Q+Pjh5Gq4SXBbtb88X7Uy7pexeqRIQDDMNkL0w==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.12.11",
        "@babel/generator": "^7.12.11",
        "@babel/helper-function-name": "^7.12.11",
        "@babel/helper-split-export-declaration": "^7.12.11",
        "@babel/parser": "^7.12.11",
        "@babel/types": "^7.12.12",
        "debug": "^4.1.0",
        "globals": "^11.1.0",
        "lodash": "^4.17.19"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.12.12.tgz",
      "integrity": "sha512-lnIX7piTxOH22xE7fDXDbSHg9MM1/6ORnafpJmov5rs0kX5g4BZxeXNJLXsMRiO0U5Rb8/FvMS6xlTnTHvxonQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.12.11",
        "lodash": "^4.17.19",
        "to-fast-properties": "^2.0.0"
      }
    },
    "node_modules/@iarna/toml": {
      "version": "2.2.5",
      "resolved": "https://registry.npmjs.org/@iarna/toml/-/toml-2.2.5.tgz",
      "integrity": "sha512-trnsAYxU3xnS1gPHPyU961coFyLkh4gAD/0zQ5mymY4yOZ+CYvsPqUbOFSw0aDM4y0tV7tiFxL/1XfXPNC6IPg==",
      "dev": true
    },
    "node_modules/@mrmlnc/readdir-enhanced": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@mrmlnc/readdir-enhanced/-/readdir-enhanced-2.2.1.tgz",
      "integrity": "sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==",
      "dev": true,
      "dependencies": {
        "call-me-maybe": "^1.0.1",
        "glob-to-regexp": "^0.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.scandir/node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-1.1.3.tgz",
      "integrity": "sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@parcel/fs": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@parcel/fs/-/fs-1.11.0.tgz",
      "integrity": "sha512-86RyEqULbbVoeo8OLcv+LQ1Vq2PKBAvWTU9fCgALxuCTbbs5Ppcvll4Vr+Ko1AnmMzja/k++SzNAwJfeQXVlpA==",
      "dev": true,
      "dependencies": {
        "@parcel/utils": "^1.11.0",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.6.2"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/@parcel/logger": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@parcel/logger/-/logger-1.11.1.tgz",
      "integrity": "sha512-9NF3M6UVeP2udOBDILuoEHd8VrF4vQqoWHEafymO1pfSoOMfxrSJZw1MfyAAIUN/IFp9qjcpDCUbDZB+ioVevA==",
      "dev": true,
      "dependencies": {
        "@parcel/workers": "^1.11.0",
        "chalk": "^2.1.0",
        "grapheme-breaker": "^0.3.2",
        "ora": "^2.1.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/@parcel/utils": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@parcel/utils/-/utils-1.11.0.tgz",
      "integrity": "sha512-cA3p4jTlaMeOtAKR/6AadanOPvKeg8VwgnHhOyfi0yClD0TZS/hi9xu12w4EzA/8NtHu0g6o4RDfcNjqN8l1AQ==",
      "dev": true,
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/@parcel/watcher": {
      "version": "1.12.1",
      "resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-1.12.1.tgz",
      "integrity": "sha512-od+uCtCxC/KoNQAIE1vWx1YTyKYY+7CTrxBJPRh3cDWw/C0tCtlBMVlrbplscGoEpt6B27KhJDCv82PBxOERNA==",
      "dev": true,
      "dependencies": {
        "@parcel/utils": "^1.11.0",
        "chokidar": "^2.1.5"
      }
    },
    "node_modules/@parcel/workers": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@parcel/workers/-/workers-1.11.0.tgz",
      "integrity": "sha512-USSjRAAQYsZFlv43FUPdD+jEGML5/8oLF0rUzPQTtK4q9kvaXr49F5ZplyLz5lox78cLZ0TxN2bIDQ1xhOkulQ==",
      "dev": true,
      "dependencies": {
        "@parcel/utils": "^1.11.0",
        "physical-cpu-count": "^2.0.0"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/@types/minimist": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@types/minimist/-/minimist-1.2.2.tgz",
      "integrity": "sha512-jhuKLIRrhvCPLqwPcx6INqmKeiA5EWrsCOPhrlFSrbrmU4ZMPjj5Ul/oLCMDO98XRUIwVm78xICz4EPCektzeQ==",
      "dev": true
    },
    "node_modules/@types/normalize-package-data": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.1.tgz",
      "integrity": "sha512-Gj7cI7z+98M282Tqmp2K5EIsoouUEzbBJhQQzDE3jSIRk6r9gsz0oUokqIUR4u1R3dMHo0pDHM7sNOHyhulypw==",
      "dev": true
    },
    "node_modules/@types/q": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.4.tgz",
      "integrity": "sha512-1HcDas8SEj4z1Wc696tH56G8OlRaH/sqZOynNNB+HF0WOeXPaxTtbYzJY2oEfiUxjSKjhCKr+MvR7dCHcEelug==",
      "dev": true
    },
    "node_modules/abab": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
      "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q==",
      "dev": true
    },
    "node_modules/acorn": {
      "version": "7.4.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
      "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-globals": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
      "dev": true,
      "dependencies": {
        "acorn": "^6.0.1",
        "acorn-walk": "^6.0.1"
      }
    },
    "node_modules/acorn-globals/node_modules/acorn": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
      "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
      "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "dev": true,
      "dependencies": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/alphanum-sort": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/alphanum-sort/-/alphanum-sort-1.0.2.tgz",
      "integrity": "sha1-l6ERlkmyEa0zaR2fn0hqjsn74KM=",
      "dev": true
    },
    "node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-to-html": {
      "version": "0.6.14",
      "resolved": "https://registry.npmjs.org/ansi-to-html/-/ansi-to-html-0.6.14.tgz",
      "integrity": "sha512-7ZslfB1+EnFSDO5Ju+ue5Y6It19DRnZXWv8jrGHgIlPna5Mh4jz7BV5jCbQneXNFurQcKoolaaAjHtgSBfOIuA==",
      "dev": true,
      "dependencies": {
        "entities": "^1.1.2"
      },
      "bin": {
        "ansi-to-html": "bin/ansi-to-html"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dev": true,
      "dependencies": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      }
    },
    "node_modules/anymatch/node_modules/normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "dev": true,
      "dependencies": {
        "remove-trailing-separator": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
      "dev": true
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arrify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "dependencies": {
        "safer-buffer": "~2.1.0"
      }
    },
    "node_modules/asn1.js": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-5.4.1.tgz",
      "integrity": "sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==",
      "dev": true,
      "dependencies": {
        "bn.js": "^4.0.0",
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "node_modules/asn1.js/node_modules/bn.js": {
      "version": "4.11.9",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
      "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
      "dev": true
    },
    "node_modules/assert": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/assert/-/assert-1.5.0.tgz",
      "integrity": "sha512-EDsgawzwoun2CZkCgtxJbv392v4nbk9XDD06zI+kQYoBM/3RBWLlEyJARDOmhAAosBjWACEkKL6S+lIZtcAubA==",
      "dev": true,
      "dependencies": {
        "object-assign": "^4.1.1",
        "util": "0.10.3"
      }
    },
    "node_modules/assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true,
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/assert/node_modules/inherits": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
      "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
      "dev": true
    },
    "node_modules/assert/node_modules/util": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
      "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
      "dev": true,
      "dependencies": {
        "inherits": "2.0.1"
      }
    },
    "node_modules/assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/async-each": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
      "dev": true
    },
    "node_modules/async-limiter": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
      "dev": true
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "node_modules/atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true,
      "bin": {
        "atob": "bin/atob.js"
      },
      "engines": {
        "node": ">= 4.5.0"
      }
    },
    "node_modules/aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/aws4": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
      "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
      "dev": true
    },
    "node_modules/babel-plugin-dynamic-import-node": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
      "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
      "dev": true,
      "dependencies": {
        "object.assign": "^4.1.0"
      }
    },
    "node_modules/babel-runtime": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
      "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
      "dev": true,
      "dependencies": {
        "core-js": "^2.4.0",
        "regenerator-runtime": "^0.11.0"
      }
    },
    "node_modules/babel-runtime/node_modules/regenerator-runtime": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
      "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",
      "dev": true
    },
    "node_modules/babel-types": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
      "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
      "dev": true,
      "dependencies": {
        "babel-runtime": "^6.26.0",
        "esutils": "^2.0.2",
        "lodash": "^4.17.4",
        "to-fast-properties": "^1.0.3"
      }
    },
    "node_modules/babel-types/node_modules/to-fast-properties": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
      "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/babylon-walk": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/babylon-walk/-/babylon-walk-1.0.2.tgz",
      "integrity": "sha1-OxWl3btIKni0zpwByLoYFwLZ1s4=",
      "dev": true,
      "dependencies": {
        "babel-runtime": "^6.11.6",
        "babel-types": "^6.15.0",
        "lodash.clone": "^4.5.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "dev": true
    },
    "node_modules/base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "dependencies": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "dev": true,
      "funding": [{
        "type": "github",
        "url": "https://github.com/sponsors/feross"
      }, {
        "type": "patreon",
        "url": "https://www.patreon.com/feross"
      }, {
        "type": "consulting",
        "url": "https://feross.org/support"
      }]
    },
    "node_modules/bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "dependencies": {
        "tweetnacl": "^0.14.3"
      }
    },
    "node_modules/binary-extensions": {
      "version": "1.13.1",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
      "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/bindings": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "dev": true,
      "dependencies": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "node_modules/bn.js": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.1.3.tgz",
      "integrity": "sha512-GkTiFpjFtUzU9CbMeJ5iazkCzGL3jrhzerzZIuqLABjbwRaFt33I9tUdSNryIptM+RxDet6OKm2WnLXzW51KsQ==",
      "dev": true
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
      "dev": true
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dev": true,
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/brfs": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/brfs/-/brfs-1.6.1.tgz",
      "integrity": "sha512-OfZpABRQQf+Xsmju8XE9bDjs+uU4vLREGolP7bDgcpsI17QREyZ4Bl+2KLxxx1kCgA0fAIhKQBaBYh+PEcCqYQ==",
      "dev": true,
      "dependencies": {
        "quote-stream": "^1.0.1",
        "resolve": "^1.1.5",
        "static-module": "^2.2.0",
        "through2": "^2.0.0"
      },
      "bin": {
        "brfs": "bin/cmd.js"
      }
    },
    "node_modules/brorand": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
      "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
      "dev": true
    },
    "node_modules/browser-process-hrtime": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
      "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
      "dev": true
    },
    "node_modules/browserify-aes": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
      "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
      "dev": true,
      "dependencies": {
        "buffer-xor": "^1.0.3",
        "cipher-base": "^1.0.0",
        "create-hash": "^1.1.0",
        "evp_bytestokey": "^1.0.3",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/browserify-cipher": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
      "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
      "dev": true,
      "dependencies": {
        "browserify-aes": "^1.0.4",
        "browserify-des": "^1.0.0",
        "evp_bytestokey": "^1.0.0"
      }
    },
    "node_modules/browserify-des": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
      "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
      "dev": true,
      "dependencies": {
        "cipher-base": "^1.0.1",
        "des.js": "^1.0.0",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "node_modules/browserify-rsa": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.1.0.tgz",
      "integrity": "sha512-AdEER0Hkspgno2aR97SAf6vi0y0k8NuOpGnVH3O99rcA5Q6sh8QxcngtHuJ6uXwnfAXNM4Gn1Gb7/MV1+Ymbog==",
      "dev": true,
      "dependencies": {
        "bn.js": "^5.0.0",
        "randombytes": "^2.0.1"
      }
    },
    "node_modules/browserify-sign": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.2.1.tgz",
      "integrity": "sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==",
      "dev": true,
      "dependencies": {
        "bn.js": "^5.1.1",
        "browserify-rsa": "^4.0.1",
        "create-hash": "^1.2.0",
        "create-hmac": "^1.1.7",
        "elliptic": "^6.5.3",
        "inherits": "^2.0.4",
        "parse-asn1": "^5.1.5",
        "readable-stream": "^3.6.0",
        "safe-buffer": "^5.2.0"
      }
    },
    "node_modules/browserify-sign/node_modules/readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/browserify-sign/node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "dev": true,
      "funding": [{
        "type": "github",
        "url": "https://github.com/sponsors/feross"
      }, {
        "type": "patreon",
        "url": "https://www.patreon.com/feross"
      }, {
        "type": "consulting",
        "url": "https://feross.org/support"
      }]
    },
    "node_modules/browserify-zlib": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
      "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
      "dev": true,
      "dependencies": {
        "pako": "~1.0.5"
      }
    },
    "node_modules/browserify-zlib/node_modules/pako": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
      "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
      "dev": true
    },
    "node_modules/browserslist": {
      "version": "4.16.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.16.1.tgz",
      "integrity": "sha512-UXhDrwqsNcpTYJBTZsbGATDxZbiVDsx6UjpmRUmtnP10pr8wAYr5LgFoEFw9ixriQH2mv/NX2SfGzE/o8GndLA==",
      "dev": true,
      "dependencies": {
        "caniuse-lite": "^1.0.30001173",
        "colorette": "^1.2.1",
        "electron-to-chromium": "^1.3.634",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.69"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/browserslist"
      }
    },
    "node_modules/buffer": {
      "version": "4.9.2",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
      "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
      "dev": true,
      "dependencies": {
        "base64-js": "^1.0.2",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "node_modules/buffer-equal": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-0.0.1.tgz",
      "integrity": "sha1-kbx0sR6kBbyRa8aqkI+q+ltKrEs=",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
      "dev": true
    },
    "node_modules/buffer-xor": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
      "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
      "dev": true
    },
    "node_modules/builtin-status-codes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
      "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
      "dev": true
    },
    "node_modules/cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "dependencies": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-me-maybe": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
      "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms=",
      "dev": true
    },
    "node_modules/caller-callsite": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
      "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
      "dev": true,
      "dependencies": {
        "callsites": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/caller-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
      "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
      "dev": true,
      "dependencies": {
        "caller-callsite": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-7.0.1.tgz",
      "integrity": "sha512-P331lEls98pW8JLyodNWfzuz91BEDVA4VpW2/SwXnyv2K495tq1N777xzDbFgnEigfA7UIY0xa6PwR/H9jijjA==",
      "dev": true,
      "dependencies": {
        "camelcase": "^6.2.0",
        "map-obj": "^4.1.0",
        "quick-lru": "^5.1.1",
        "type-fest": "^1.2.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/caniuse-api": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/caniuse-api/-/caniuse-api-3.0.0.tgz",
      "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.0.0",
        "caniuse-lite": "^1.0.0",
        "lodash.memoize": "^4.1.2",
        "lodash.uniq": "^4.5.0"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001179",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001179.tgz",
      "integrity": "sha512-blMmO0QQujuUWZKyVrD1msR4WNDAqb/UPO1Sw2WWsQ7deoM5bJiicKnWJ1Y0NS/aGINSnKPIWBMw5luX+NDUCA==",
      "dev": true
    },
    "node_modules/caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/chokidar": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
      "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
      "deprecated": "Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.",
      "dev": true,
      "dependencies": {
        "anymatch": "^2.0.0",
        "async-each": "^1.0.1",
        "braces": "^2.3.2",
        "glob-parent": "^3.1.0",
        "inherits": "^2.0.3",
        "is-binary-path": "^1.0.0",
        "is-glob": "^4.0.0",
        "normalize-path": "^3.0.0",
        "path-is-absolute": "^1.0.0",
        "readdirp": "^2.2.1",
        "upath": "^1.1.1"
      },
      "optionalDependencies": {
        "fsevents": "^1.2.7"
      }
    },
    "node_modules/cipher-base": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
      "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "dev": true,
      "dependencies": {
        "restore-cursor": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cli-spinners": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-1.3.1.tgz",
      "integrity": "sha512-1QL4544moEsDVH9T/l6Cemov/37iv1RtoKf7NJ04A60+4MREXNfx/QvavbH6QoGdsD4N4Mwy49cmaINR/o2mdg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/clone": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",
      "dev": true,
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/coa": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/coa/-/coa-2.0.2.tgz",
      "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
      "dev": true,
      "dependencies": {
        "@types/q": "^1.5.1",
        "chalk": "^2.4.1",
        "q": "^1.1.2"
      },
      "engines": {
        "node": ">= 4.0"
      }
    },
    "node_modules/collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "dependencies": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/color": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/color/-/color-3.1.3.tgz",
      "integrity": "sha512-xgXAcTHa2HeFCGLE9Xs/R82hujGtu9Jd9x4NW3T34+OMs7VoPsjwzRczKHvTAHeJwWFwX5j15+MgAppE8ztObQ==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.1",
        "color-string": "^1.5.4"
      }
    },
    "node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/color-string": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.4.tgz",
      "integrity": "sha512-57yF5yt8Xa3czSEW1jfQDE79Idk0+AkN/4KWad6tbdxUmAs3MvjxlWSWD4deYytcRfoZ9nhKyFl1kj5tBvidbw==",
      "dev": true,
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/colorette": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.1.tgz",
      "integrity": "sha512-puCDz0CzydiSYOrnXpz/PKd69zRrribezjtE9yd4zvytoRc8+RY/KJPvtPFKZS3E3wP6neGyMe0vOTlHO5L3Pw==",
      "dev": true
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/command-exists": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/command-exists/-/command-exists-1.2.9.tgz",
      "integrity": "sha512-LTQ/SGc+s0Xc0Fu5WaKnR0YiygZkm9eKFvyS+fRsU7/ZWFF8ykFM6Pc9aCVf1+xasOOZpO3BAVgVrKvsqKHV7w==",
      "dev": true
    },
    "node_modules/commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
      "dev": true
    },
    "node_modules/component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "node_modules/concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "dev": true,
      "engines": ["node >= 0.8"],
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/console-browserify": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
      "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==",
      "dev": true
    },
    "node_modules/constants-browserify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
      "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
      "dev": true
    },
    "node_modules/convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.1.1"
      }
    },
    "node_modules/copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "deprecated": "core-js@<3.4 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.",
      "dev": true,
      "hasInstallScript": true
    },
    "node_modules/core-js-compat": {
      "version": "3.8.3",
      "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.8.3.tgz",
      "integrity": "sha512-1sCb0wBXnBIL16pfFG1Gkvei6UzvKyTNYpiC41yrdjEv0UoJoq9E/abTMzyYJ6JpTkAj15dLjbqifIzEBDVvog==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.16.1",
        "semver": "7.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/core-js-compat/node_modules/semver": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
      "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "node_modules/cosmiconfig": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
      "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
      "dev": true,
      "dependencies": {
        "import-fresh": "^2.0.0",
        "is-directory": "^0.3.1",
        "js-yaml": "^3.13.1",
        "parse-json": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/create-ecdh": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.4.tgz",
      "integrity": "sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==",
      "dev": true,
      "dependencies": {
        "bn.js": "^4.1.0",
        "elliptic": "^6.5.3"
      }
    },
    "node_modules/create-ecdh/node_modules/bn.js": {
      "version": "4.11.9",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
      "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
      "dev": true
    },
    "node_modules/create-hash": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
      "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
      "dev": true,
      "dependencies": {
        "cipher-base": "^1.0.1",
        "inherits": "^2.0.1",
        "md5.js": "^1.3.4",
        "ripemd160": "^2.0.1",
        "sha.js": "^2.4.0"
      }
    },
    "node_modules/create-hmac": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
      "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
      "dev": true,
      "dependencies": {
        "cipher-base": "^1.0.3",
        "create-hash": "^1.1.0",
        "inherits": "^2.0.1",
        "ripemd160": "^2.0.0",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      }
    },
    "node_modules/cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dev": true,
      "dependencies": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      },
      "engines": {
        "node": ">=4.8"
      }
    },
    "node_modules/crypto-browserify": {
      "version": "3.12.0",
      "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
      "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
      "dev": true,
      "dependencies": {
        "browserify-cipher": "^1.0.0",
        "browserify-sign": "^4.0.0",
        "create-ecdh": "^4.0.0",
        "create-hash": "^1.1.0",
        "create-hmac": "^1.1.0",
        "diffie-hellman": "^5.0.0",
        "inherits": "^2.0.1",
        "pbkdf2": "^3.0.3",
        "public-encrypt": "^4.0.0",
        "randombytes": "^2.0.0",
        "randomfill": "^1.0.3"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/css-color-names": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
      "integrity": "sha1-gIrcLnnPhHOAabZGyyDsJ762KeA=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/css-declaration-sorter": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/css-declaration-sorter/-/css-declaration-sorter-4.0.1.tgz",
      "integrity": "sha512-BcxQSKTSEEQUftYpBVnsH4SF05NTuBokb19/sBt6asXGKZ/6VP7PLG1CBCkFDYOnhXhPh0jMhO6xZ71oYHXHBA==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.1",
        "timsort": "^0.3.0"
      },
      "engines": {
        "node": ">4"
      }
    },
    "node_modules/css-modules-loader-core": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/css-modules-loader-core/-/css-modules-loader-core-1.1.0.tgz",
      "integrity": "sha1-WQhmgpShvs0mGuCkziGwtVHyHRY=",
      "dev": true,
      "dependencies": {
        "icss-replace-symbols": "1.1.0",
        "postcss": "6.0.1",
        "postcss-modules-extract-imports": "1.1.0",
        "postcss-modules-local-by-default": "1.2.0",
        "postcss-modules-scope": "1.1.0",
        "postcss-modules-values": "1.3.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/ansi-styles": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
      "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/chalk": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
      "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^2.2.1",
        "escape-string-regexp": "^1.0.2",
        "has-ansi": "^2.0.0",
        "strip-ansi": "^3.0.0",
        "supports-color": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/chalk/node_modules/supports-color": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
      "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/has-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-1.0.0.tgz",
      "integrity": "sha1-nZ55MWXOAXoA8AQYxD+UKnsdEfo=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/postcss": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.1.tgz",
      "integrity": "sha1-AA29H47vIXqjaLmiEsX8QLKo8/I=",
      "dev": true,
      "dependencies": {
        "chalk": "^1.1.3",
        "source-map": "^0.5.6",
        "supports-color": "^3.2.3"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/css-modules-loader-core/node_modules/supports-color": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-3.2.3.tgz",
      "integrity": "sha1-ZawFBLOVQXHYpklGsq48u4pfVPY=",
      "dev": true,
      "dependencies": {
        "has-flag": "^1.0.0"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/css-select": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
      "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
      "dev": true,
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-what": "^3.2.1",
        "domutils": "^1.7.0",
        "nth-check": "^1.0.2"
      }
    },
    "node_modules/css-select-base-adapter": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
      "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w==",
      "dev": true
    },
    "node_modules/css-selector-tokenizer": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/css-selector-tokenizer/-/css-selector-tokenizer-0.7.3.tgz",
      "integrity": "sha512-jWQv3oCEL5kMErj4wRnK/OPoBi0D+P1FR2cDCKYPaMeD2eW3/mttav8HT4hT1CKopiJI/psEULjkClhvJo4Lvg==",
      "dev": true,
      "dependencies": {
        "cssesc": "^3.0.0",
        "fastparse": "^1.1.2"
      }
    },
    "node_modules/css-tree": {
      "version": "1.0.0-alpha.37",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
      "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
      "dev": true,
      "dependencies": {
        "mdn-data": "2.0.4",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/css-what": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.4.2.tgz",
      "integrity": "sha512-ACUm3L0/jiZTqfzRM3Hi9Q8eZqd6IK37mMWPLz9PJxkLWllYeRf+EHUSHYEtFop2Eqytaq1FizFVh7XfBnXCDQ==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cssnano": {
      "version": "4.1.10",
      "resolved": "https://registry.npmjs.org/cssnano/-/cssnano-4.1.10.tgz",
      "integrity": "sha512-5wny+F6H4/8RgNlaqab4ktc3e0/blKutmq8yNlBFXA//nSFFAqAngjNVRzUvCgYROULmZZUoosL/KSoZo5aUaQ==",
      "dev": true,
      "dependencies": {
        "cosmiconfig": "^5.0.0",
        "cssnano-preset-default": "^4.0.7",
        "is-resolvable": "^1.0.0",
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/cssnano-preset-default": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/cssnano-preset-default/-/cssnano-preset-default-4.0.7.tgz",
      "integrity": "sha512-x0YHHx2h6p0fCl1zY9L9roD7rnlltugGu7zXSKQx6k2rYw0Hi3IqxcoAGF7u9Q5w1nt7vK0ulxV8Lo+EvllGsA==",
      "dev": true,
      "dependencies": {
        "css-declaration-sorter": "^4.0.1",
        "cssnano-util-raw-cache": "^4.0.1",
        "postcss": "^7.0.0",
        "postcss-calc": "^7.0.1",
        "postcss-colormin": "^4.0.3",
        "postcss-convert-values": "^4.0.1",
        "postcss-discard-comments": "^4.0.2",
        "postcss-discard-duplicates": "^4.0.2",
        "postcss-discard-empty": "^4.0.1",
        "postcss-discard-overridden": "^4.0.1",
        "postcss-merge-longhand": "^4.0.11",
        "postcss-merge-rules": "^4.0.3",
        "postcss-minify-font-values": "^4.0.2",
        "postcss-minify-gradients": "^4.0.2",
        "postcss-minify-params": "^4.0.2",
        "postcss-minify-selectors": "^4.0.2",
        "postcss-normalize-charset": "^4.0.1",
        "postcss-normalize-display-values": "^4.0.2",
        "postcss-normalize-positions": "^4.0.2",
        "postcss-normalize-repeat-style": "^4.0.2",
        "postcss-normalize-string": "^4.0.2",
        "postcss-normalize-timing-functions": "^4.0.2",
        "postcss-normalize-unicode": "^4.0.1",
        "postcss-normalize-url": "^4.0.1",
        "postcss-normalize-whitespace": "^4.0.2",
        "postcss-ordered-values": "^4.1.2",
        "postcss-reduce-initial": "^4.0.3",
        "postcss-reduce-transforms": "^4.0.2",
        "postcss-svgo": "^4.0.2",
        "postcss-unique-selectors": "^4.0.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/cssnano-util-get-arguments": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/cssnano-util-get-arguments/-/cssnano-util-get-arguments-4.0.0.tgz",
      "integrity": "sha1-7ToIKZ8h11dBsg87gfGU7UnMFQ8=",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/cssnano-util-get-match": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/cssnano-util-get-match/-/cssnano-util-get-match-4.0.0.tgz",
      "integrity": "sha1-wOTKB/U4a7F+xeUiULT1lhNlFW0=",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/cssnano-util-raw-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/cssnano-util-raw-cache/-/cssnano-util-raw-cache-4.0.1.tgz",
      "integrity": "sha512-qLuYtWK2b2Dy55I8ZX3ky1Z16WYsx544Q0UWViebptpwn/xDBmog2TLg4f+DBMg1rJ6JDWtn96WHbOKDWt1WQA==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/cssnano-util-same-parent": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/cssnano-util-same-parent/-/cssnano-util-same-parent-4.0.1.tgz",
      "integrity": "sha512-WcKx5OY+KoSIAxBW6UBBRay1U6vkYheCdjyVNDm85zt5K9mHoGOfsOsqIszfAqrQQFIIKgjh2+FDgIj/zsl21Q==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/csso": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/csso/-/csso-4.2.0.tgz",
      "integrity": "sha512-wvlcdIbf6pwKEk7vHj8/Bkc0B4ylXZruLvOgs9doS5eOsOpuodOV2zJChSpkp+pRpYQLQMeF04nr3Z68Sta9jA==",
      "dev": true,
      "dependencies": {
        "css-tree": "^1.1.2"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/csso/node_modules/css-tree": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.1.2.tgz",
      "integrity": "sha512-wCoWush5Aeo48GLhfHPbmvZs59Z+M7k5+B1xDnXbdWNcEF423DoFdqSWE0PM5aNk5nI5cp1q7ms36zGApY/sKQ==",
      "dev": true,
      "dependencies": {
        "mdn-data": "2.0.14",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/csso/node_modules/mdn-data": {
      "version": "2.0.14",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.14.tgz",
      "integrity": "sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow==",
      "dev": true
    },
    "node_modules/cssom": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
      "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
      "dev": true
    },
    "node_modules/cssstyle": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
      "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
      "dev": true,
      "dependencies": {
        "cssom": "0.3.x"
      }
    },
    "node_modules/dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/data-urls": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
      "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
      "dev": true,
      "dependencies": {
        "abab": "^2.0.0",
        "whatwg-mimetype": "^2.2.0",
        "whatwg-url": "^7.0.0"
      }
    },
    "node_modules/deasync": {
      "version": "0.1.21",
      "resolved": "https://registry.npmjs.org/deasync/-/deasync-0.1.21.tgz",
      "integrity": "sha512-kUmM8Y+PZpMpQ+B4AuOW9k2Pfx/mSupJtxOsLzmnHY2WqZUYRFccFn2RhzPAqt3Xb+sorK/badW2D4zNzqZz5w==",
      "dev": true,
      "hasInstallScript": true,
      "dependencies": {
        "bindings": "^1.5.0",
        "node-addon-api": "^1.7.1"
      },
      "engines": {
        "node": ">=0.11.0"
      }
    },
    "node_modules/debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dev": true,
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decamelize": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-5.0.1.tgz",
      "integrity": "sha512-VfxadyCECXgQlkoEAjeghAr5gY3Hf+IKjKb+X8tGVDtveCjN+USwprd2q3QXBR9T1+x2DG0XZF5/w+7HAtSaXA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/decamelize-keys": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/decamelize-keys/-/decamelize-keys-1.1.0.tgz",
      "integrity": "sha1-0XGoeTMlKAfrPLYdwcFEXQeN8tk=",
      "dev": true,
      "dependencies": {
        "decamelize": "^1.1.0",
        "map-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decamelize-keys/node_modules/decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decamelize-keys/node_modules/map-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
      "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "node_modules/defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dev": true,
      "dependencies": {
        "clone": "^1.0.2"
      }
    },
    "node_modules/defaults/node_modules/clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "dev": true,
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "dependencies": {
        "object-keys": "^1.0.12"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/del": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/del/-/del-6.0.0.tgz",
      "integrity": "sha512-1shh9DQ23L16oXSZKB2JxpL7iMy2E0S9d517ptA1P8iw0alkPtQcrKH7ru31rYtKwF499HkTu+DRzq3TCKDFRQ==",
      "dev": true,
      "dependencies": {
        "globby": "^11.0.1",
        "graceful-fs": "^4.2.4",
        "is-glob": "^4.0.1",
        "is-path-cwd": "^2.2.0",
        "is-path-inside": "^3.0.2",
        "p-map": "^4.0.0",
        "rimraf": "^3.0.2",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/del-cli": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/del-cli/-/del-cli-4.0.1.tgz",
      "integrity": "sha512-KtR/6cBfZkGDAP2NA7z+bP4p1OMob3wjN9mq13+SWvExx6jT9gFWfLgXEeX8J2B47OKeNCq9yTONmtryQ+m+6g==",
      "dev": true,
      "dependencies": {
        "del": "^6.0.0",
        "meow": "^10.1.0"
      },
      "bin": {
        "del": "cli.js",
        "del-cli": "cli.js"
      },
      "engines": {
        "node": ">=12.20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/del/node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/des.js": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
      "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0"
      }
    },
    "node_modules/destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
      "dev": true
    },
    "node_modules/diffie-hellman": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
      "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
      "dev": true,
      "dependencies": {
        "bn.js": "^4.1.0",
        "miller-rabin": "^4.0.0",
        "randombytes": "^2.0.0"
      }
    },
    "node_modules/diffie-hellman/node_modules/bn.js": {
      "version": "4.11.9",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
      "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
      "dev": true
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dom-serializer": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
      "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
      "dev": true,
      "dependencies": {
        "domelementtype": "^2.0.1",
        "entities": "^2.0.0"
      }
    },
    "node_modules/dom-serializer/node_modules/domelementtype": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.1.0.tgz",
      "integrity": "sha512-LsTgx/L5VpD+Q8lmsXSHW2WpA+eBlZ9HPf3erD1IoPF00/3JKHZ3BknUVA2QGDNu69ZNmyFmCWBSO45XjYKC5w==",
      "dev": true,
      "funding": [{
        "type": "github",
        "url": "https://github.com/sponsors/fb55"
      }]
    },
    "node_modules/dom-serializer/node_modules/entities": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-2.1.0.tgz",
      "integrity": "sha512-hCx1oky9PFrJ611mf0ifBLBRW8lUUVRlFolb5gWRfIELabBlbp9xZvrqZLZAs+NxFnbfQoeGd8wDkygjg7U85w==",
      "dev": true,
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/domain-browser": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
      "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
      "dev": true,
      "engines": {
        "node": ">=0.4",
        "npm": ">=1.2"
      }
    },
    "node_modules/domelementtype": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
      "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w==",
      "dev": true
    },
    "node_modules/domexception": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
      "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
      "dev": true,
      "dependencies": {
        "webidl-conversions": "^4.0.2"
      }
    },
    "node_modules/domhandler": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
      "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
      "dev": true,
      "dependencies": {
        "domelementtype": "1"
      }
    },
    "node_modules/domutils": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
      "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
      "dev": true,
      "dependencies": {
        "dom-serializer": "0",
        "domelementtype": "1"
      }
    },
    "node_modules/dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "dev": true,
      "dependencies": {
        "is-obj": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dotenv": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-5.0.1.tgz",
      "integrity": "sha512-4As8uPrjfwb7VXC+WnLCbXK7y+Ueb2B3zgNCePYfhxS1PYeaO1YTeplffTEcbfLhvFNGLAz90VvJs9yomG7bow==",
      "dev": true,
      "engines": {
        "node": ">=4.6.0"
      }
    },
    "node_modules/dotenv-expand": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-5.1.0.tgz",
      "integrity": "sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA==",
      "dev": true
    },
    "node_modules/duplexer2": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz",
      "integrity": "sha1-ixLauHjA1p4+eJEFFmKjL8a93ME=",
      "dev": true,
      "dependencies": {
        "readable-stream": "^2.0.2"
      }
    },
    "node_modules/ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "dependencies": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
      "dev": true
    },
    "node_modules/electron-to-chromium": {
      "version": "1.3.642",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.642.tgz",
      "integrity": "sha512-cev+jOrz/Zm1i+Yh334Hed6lQVOkkemk2wRozfMF4MtTR7pxf3r3L5Rbd7uX1zMcEqVJ7alJBnJL7+JffkC6FQ==",
      "dev": true
    },
    "node_modules/elliptic": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.3.tgz",
      "integrity": "sha512-IMqzv5wNQf+E6aHeIqATs0tOLeOTwj1QKbRcS3jBbYkl5oLAserA8yJTT7/VyHUYG91PRmPyeQDObKLPpeS4dw==",
      "dev": true,
      "dependencies": {
        "bn.js": "^4.4.0",
        "brorand": "^1.0.1",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.0",
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.0"
      }
    },
    "node_modules/elliptic/node_modules/bn.js": {
      "version": "4.11.9",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
      "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
      "dev": true
    },
    "node_modules/encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
      "dev": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/entities": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
      "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w==",
      "dev": true
    },
    "node_modules/envinfo": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.7.3.tgz",
      "integrity": "sha512-46+j5QxbPWza0PB1i15nZx0xQ4I/EfQxg9J8Had3b408SV63nEtor2e+oiY63amTo9KTuh2a3XLObNwduxYwwA==",
      "dev": true,
      "bin": {
        "envinfo": "dist/cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.18.0-next.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.2.tgz",
      "integrity": "sha512-Ih4ZMFHEtZupnUh6497zEL4y2+w8+1ljnCyaTa+adcoafI1GOvMwFlDjBLfWR7y9VLfrjRJe9ocuHY1PSR9jjw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1",
        "is-callable": "^1.2.2",
        "is-negative-zero": "^2.0.1",
        "is-regex": "^1.1.1",
        "object-inspect": "^1.9.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.2",
        "string.prototype.trimend": "^1.0.3",
        "string.prototype.trimstart": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-abstract/node_modules/object-inspect": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
      "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
      "dev": true
    },
    "node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/escodegen": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.9.1.tgz",
      "integrity": "sha512-6hTjO1NAWkHnDk3OqQ4YrCuwwmGHL9S3nPlzBOUG/R44rda3wLNrfvQ5fkSGjyhHFKM7ALPKcKGrwvCLe0lC7Q==",
      "dev": true,
      "dependencies": {
        "esprima": "^3.1.3",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1"
      },
      "bin": {
        "escodegen": "bin/escodegen.js",
        "esgenerate": "bin/esgenerate.js"
      },
      "engines": {
        "node": ">=4.0"
      },
      "optionalDependencies": {
        "source-map": "~0.6.1"
      }
    },
    "node_modules/esprima": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-3.1.3.tgz",
      "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
      "dev": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/eventemitter3": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
      "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw=="
    },
    "node_modules/events": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
      "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg==",
      "dev": true,
      "engines": {
        "node": ">=0.8.x"
      }
    },
    "node_modules/evp_bytestokey": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
      "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
      "dev": true,
      "dependencies": {
        "md5.js": "^1.3.4",
        "safe-buffer": "^5.1.1"
      }
    },
    "node_modules/expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "dependencies": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/expand-brackets/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend-shallow/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "dependencies": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true,
      "engines": ["node >=0.6.0"]
    },
    "node_modules/falafel": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/falafel/-/falafel-2.2.4.tgz",
      "integrity": "sha512-0HXjo8XASWRmsS0X1EkhwEMZaD3Qvp7FfURwjLKjG1ghfRm/MGZl2r4cWUTv41KdNghTw4OUMmVtdGQp3+H+uQ==",
      "dev": true,
      "dependencies": {
        "acorn": "^7.1.1",
        "foreach": "^2.0.5",
        "isarray": "^2.0.1",
        "object-keys": "^1.0.6"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/falafel/node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "2.2.7",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-2.2.7.tgz",
      "integrity": "sha512-g1KuQwHOZAmOZMuBtHdxDtju+T2RT8jgCC9aANsbpdiDDTSnjgfuVsIBNKbUeJI3oKMRExcfNDtJl4OhbffMsw==",
      "dev": true,
      "dependencies": {
        "@mrmlnc/readdir-enhanced": "^2.2.1",
        "@nodelib/fs.stat": "^1.1.2",
        "glob-parent": "^3.1.0",
        "is-glob": "^4.0.0",
        "merge2": "^1.2.3",
        "micromatch": "^3.1.10"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "node_modules/fastparse": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.2.tgz",
      "integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
      "integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "dev": true
    },
    "node_modules/filesize": {
      "version": "3.6.1",
      "resolved": "https://registry.npmjs.org/filesize/-/filesize-3.6.1.tgz",
      "integrity": "sha512-7KjR1vv6qnicaPMi1iiTcI85CyYwRO/PSFCu6SvqL8jN2Wjt/NIYQTFtFs7fSDCYOstUkEWIQGFUg5YZQfjlcg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/foreach": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/foreach/-/foreach-2.0.5.tgz",
      "integrity": "sha1-C+4AUBiusmDQo6865ljdATbsG5k=",
      "dev": true
    },
    "node_modules/forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 0.12"
      }
    },
    "node_modules/fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "dependencies": {
        "map-cache": "^0.2.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "node_modules/fsevents": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
      "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
      "deprecated": "fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": ["darwin"],
      "dependencies": {
        "bindings": "^1.5.0",
        "nan": "^2.12.1"
      },
      "engines": {
        "node": ">= 4.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.0.2.tgz",
      "integrity": "sha512-aeX0vrFm21ILl3+JpFFRNe9aUvp6VFZb2/CTbgLb8j75kOhvoNYjt9d8KA/tJG4gSo8nzEDedRl0h7vDmBYRVg==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-port": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/get-port/-/get-port-3.2.0.tgz",
      "integrity": "sha1-3Xzn3hh8Bsi/NTeWrHHgmfCYDrw=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0"
      }
    },
    "node_modules/glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dev": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
      "dev": true,
      "dependencies": {
        "is-glob": "^3.1.0",
        "path-dirname": "^1.0.0"
      }
    },
    "node_modules/glob-parent/node_modules/is-glob": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
      "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/glob-to-regexp": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
      "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs=",
      "dev": true
    },
    "node_modules/globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globby/node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/globby/node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/globby/node_modules/fast-glob": {
      "version": "3.2.11",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.11.tgz",
      "integrity": "sha512-xrO3+1bxSo3ZVHAnqzyuewYT6aMFHRAd4Kcs92MAonjwQZLsK9d0SF1IyQ3k5PoirxTW0Oe/RqFgMQ6TcNE5Ew==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/globby/node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/globby/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/globby/node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/globby/node_modules/micromatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
      "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.1",
        "picomatch": "^2.2.3"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/globby/node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
      "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==",
      "dev": true
    },
    "node_modules/grapheme-breaker": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/grapheme-breaker/-/grapheme-breaker-0.3.2.tgz",
      "integrity": "sha1-W55reMODJFLSuiuxy4MPlidkEKw=",
      "dev": true,
      "dependencies": {
        "brfs": "^1.2.0",
        "unicode-trie": "^0.3.1"
      }
    },
    "node_modules/har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/har-validator": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
      "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
      "deprecated": "this library is no longer supported",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.3",
        "har-schema": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/hard-rejection": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/hard-rejection/-/hard-rejection-2.1.0.tgz",
      "integrity": "sha512-VIZB+ibDhx7ObhAe7OVtoEbuP4h/MuOTHJ+J8h/eBXotJYl0fBgR72xDFCKgIh22OJZIOVNxBMWuhAr10r8HdA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-ansi": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-ansi/node_modules/ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
      "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "dependencies": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/kind-of": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
      "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/hash-base": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
      "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.4",
        "readable-stream": "^3.6.0",
        "safe-buffer": "^5.2.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/hash-base/node_modules/readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/hash-base/node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "dev": true,
      "funding": [{
        "type": "github",
        "url": "https://github.com/sponsors/feross"
      }, {
        "type": "patreon",
        "url": "https://www.patreon.com/feross"
      }, {
        "type": "consulting",
        "url": "https://feross.org/support"
      }]
    },
    "node_modules/hash.js": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
      "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.3",
        "minimalistic-assert": "^1.0.1"
      }
    },
    "node_modules/hex-color-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
      "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ==",
      "dev": true
    },
    "node_modules/hmac-drbg": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
      "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
      "dev": true,
      "dependencies": {
        "hash.js": "^1.0.3",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    },
    "node_modules/hosted-git-info": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.1.0.tgz",
      "integrity": "sha512-kyCuEOWjJqZuDbRHzL8V93NzQhwIB71oFWSyzVo+KPZI+pnQPPxucdkrOZvkLRnrf5URsQM+IJ09Dw29cRALIA==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/hsl-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/hsl-regex/-/hsl-regex-1.0.0.tgz",
      "integrity": "sha1-1JMwx4ntgZ4nakwNJy3/owsY/m4=",
      "dev": true
    },
    "node_modules/hsla-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/hsla-regex/-/hsla-regex-1.0.0.tgz",
      "integrity": "sha1-wc56MWjIxmFAM6S194d/OyJfnDg=",
      "dev": true
    },
    "node_modules/html-comment-regex": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
      "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ==",
      "dev": true
    },
    "node_modules/html-encoding-sniffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
      "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
      "dev": true,
      "dependencies": {
        "whatwg-encoding": "^1.0.1"
      }
    },
    "node_modules/html-tags": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/html-tags/-/html-tags-1.2.0.tgz",
      "integrity": "sha1-x43mW1Zjqll5id0rerSSANfk25g=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/htmlnano": {
      "version": "0.2.8",
      "resolved": "https://registry.npmjs.org/htmlnano/-/htmlnano-0.2.8.tgz",
      "integrity": "sha512-q5gbo4SIDAE5sfJ5V0UD6uu+n1dcO/Mpr0B6SlDlJBoV7xKPne4uG4UwrT8vUWjdjIPJl95TY8EDuEbBW2TG0A==",
      "dev": true,
      "dependencies": {
        "cssnano": "^4.1.10",
        "posthtml": "^0.13.4",
        "posthtml-render": "^1.3.0",
        "purgecss": "^2.3.0",
        "relateurl": "^0.2.7",
        "srcset": "^3.0.0",
        "svgo": "^1.3.2",
        "terser": "^4.8.0",
        "timsort": "^0.3.0",
        "uncss": "^0.17.3"
      }
    },
    "node_modules/htmlnano/node_modules/posthtml": {
      "version": "0.13.4",
      "resolved": "https://registry.npmjs.org/posthtml/-/posthtml-0.13.4.tgz",
      "integrity": "sha512-i2oTo/+dwXGC6zaAQSF6WZEQSbEqu10hsvg01DWzGAfZmy31Iiy9ktPh9nnXDfZiYytjxTIvxoK4TI0uk4QWpw==",
      "dev": true,
      "dependencies": {
        "posthtml-parser": "^0.5.0",
        "posthtml-render": "^1.2.3"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/htmlnano/node_modules/posthtml-parser": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/posthtml-parser/-/posthtml-parser-0.5.3.tgz",
      "integrity": "sha512-uHosRn0y+1wbnlYKrqMjBPoo/kK5LPYImLtiETszNFYfFwAD3cQdD1R2E13Mh5icBxkHj+yKtlIHozCsmVWD/Q==",
      "dev": true,
      "dependencies": {
        "htmlparser2": "^3.9.2"
      },
      "engines": {
        "node": ">=10.0.0"
      },
      "funding": {
        "type": "patreon",
        "url": "https://opencollective.com/posthtml"
      }
    },
    "node_modules/htmlnano/node_modules/terser": {
      "version": "4.8.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-4.8.0.tgz",
      "integrity": "sha512-EAPipTNeWsb/3wLPeup1tVPaXfIaU68xMnVdPafIL1TV05OhASArYyIfFvnvJCNrR2NIOvDVNNTFRa+Re2MWyw==",
      "dev": true,
      "dependencies": {
        "commander": "^2.20.0",
        "source-map": "~0.6.1",
        "source-map-support": "~0.5.12"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/htmlparser2": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
      "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
      "dev": true,
      "dependencies": {
        "domelementtype": "^1.3.1",
        "domhandler": "^2.3.0",
        "domutils": "^1.5.1",
        "entities": "^1.1.1",
        "inherits": "^2.0.1",
        "readable-stream": "^3.1.1"
      }
    },
    "node_modules/htmlparser2/node_modules/readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/http-errors": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.3.tgz",
      "integrity": "sha512-ZTTX0MWrsQ2ZAhA1cejAwDLycFsd7I7nVtnkT3Ol0aqodaKW+0CTZDQ1uBv5whptCnc8e8HeRRJxRs0kmm/Qfw==",
      "dev": true,
      "dependencies": {
        "depd": "~1.1.2",
        "inherits": "2.0.4",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      },
      "engines": {
        "node": ">=0.8",
        "npm": ">=1.3.7"
      }
    },
    "node_modules/https-browserify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
      "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
      "dev": true
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/icss-replace-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/icss-replace-symbols/-/icss-replace-symbols-1.1.0.tgz",
      "integrity": "sha1-Bupvg2ead0njhs/h/oEq5dsiPe0=",
      "dev": true
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "dev": true,
      "funding": [{
        "type": "github",
        "url": "https://github.com/sponsors/feross"
      }, {
        "type": "patreon",
        "url": "https://www.patreon.com/feross"
      }, {
        "type": "consulting",
        "url": "https://feross.org/support"
      }]
    },
    "node_modules/ignore": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.0.tgz",
      "integrity": "sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
      "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
      "dev": true,
      "dependencies": {
        "caller-path": "^2.0.0",
        "resolve-from": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/indexes-of": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/indexes-of/-/indexes-of-1.0.1.tgz",
      "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc=",
      "dev": true
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true
    },
    "node_modules/is-absolute-url": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-2.1.0.tgz",
      "integrity": "sha1-UFMN+4T8yap9vnhS6Do3uTufKqY=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "node_modules/is-binary-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
      "dev": true,
      "dependencies": {
        "binary-extensions": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true
    },
    "node_modules/is-callable": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.2.tgz",
      "integrity": "sha512-dnMqspv5nU3LoewK2N/y7KLtxtakvTuaCsU9FU50/QDmdbHNy/4/JuRtMHqRU22o3q+W89YQndQEeCVwK+3qrA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-color-stop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-color-stop/-/is-color-stop-1.1.0.tgz",
      "integrity": "sha1-z/9HGu5N1cnhWFmPvhKWe1za00U=",
      "dev": true,
      "dependencies": {
        "css-color-names": "^0.0.4",
        "hex-color-regex": "^1.1.0",
        "hsl-regex": "^1.0.0",
        "hsla-regex": "^1.0.0",
        "rgb-regex": "^1.0.1",
        "rgba-regex": "^1.0.0"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz",
      "integrity": "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==",
      "dev": true,
      "dependencies": {
        "has": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
      "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-descriptor/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-directory": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
      "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-html": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-html/-/is-html-1.1.0.tgz",
      "integrity": "sha1-4E8cGNOUhRETlvmgJz6rUa8hhGQ=",
      "dev": true,
      "dependencies": {
        "html-tags": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.1.tgz",
      "integrity": "sha512-2z6JzQvZRa9A2Y7xC6dQQm4FSTSTNWjKIYYTt4246eMTJmIo0Q+ZyOsU66X8lxK1AbB92dFeglPLrhwpeRKO6w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-path-cwd": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
      "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-regex": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
      "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-resolvable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-resolvable/-/is-resolvable-1.1.0.tgz",
      "integrity": "sha512-qgDYXFSR5WvEfuS5dMj6oTMEbrrSaM0CrFk2Yiq/gXnBvD9pMa2jGXxyhGLfvhZpuMZe18CJpFxAt3CRs42NMg==",
      "dev": true
    },
    "node_modules/is-svg": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-3.0.0.tgz",
      "integrity": "sha512-gi4iHK53LR2ujhLVVj+37Ykh9GLqYHX6JOVXbLAucaG/Cqw9xwdFOjDM2qeifLs1sF1npXXFvDu0r5HNgCMrzQ==",
      "dev": true,
      "dependencies": {
        "html-comment-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
      "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "node_modules/is-url": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz",
      "integrity": "sha512-ITvGim8FhRiYe4IQ5uHSkj7pVaPDrCTkNd3yq3cV7iZAcJdHTUMPMEHcqSOy9xZ9qFenQCvi+2wjH9a1nXqHww==",
      "dev": true
    },
    "node_modules/is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-wsl": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/js-yaml/node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "node_modules/jsdom": {
      "version": "14.1.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-14.1.0.tgz",
      "integrity": "sha512-O901mfJSuTdwU2w3Sn+74T+RnDVP+FuV5fH8tcPWyqrseRAb0s5xOtPgCFiPOtLcyK7CLIJwPyD83ZqQWvA5ng==",
      "dev": true,
      "dependencies": {
        "abab": "^2.0.0",
        "acorn": "^6.0.4",
        "acorn-globals": "^4.3.0",
        "array-equal": "^1.0.0",
        "cssom": "^0.3.4",
        "cssstyle": "^1.1.1",
        "data-urls": "^1.1.0",
        "domexception": "^1.0.1",
        "escodegen": "^1.11.0",
        "html-encoding-sniffer": "^1.0.2",
        "nwsapi": "^2.1.3",
        "parse5": "5.1.0",
        "pn": "^1.1.0",
        "request": "^2.88.0",
        "request-promise-native": "^1.0.5",
        "saxes": "^3.1.9",
        "symbol-tree": "^3.2.2",
        "tough-cookie": "^2.5.0",
        "w3c-hr-time": "^1.0.1",
        "w3c-xmlserializer": "^1.1.2",
        "webidl-conversions": "^4.0.2",
        "whatwg-encoding": "^1.0.5",
        "whatwg-mimetype": "^2.3.0",
        "whatwg-url": "^7.0.0",
        "ws": "^6.1.2",
        "xml-name-validator": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/jsdom/node_modules/acorn": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
      "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/jsdom/node_modules/escodegen": {
      "version": "1.14.3",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
      "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
      "dev": true,
      "dependencies": {
        "esprima": "^4.0.1",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1"
      },
      "bin": {
        "escodegen": "bin/escodegen.js",
        "esgenerate": "bin/esgenerate.js"
      },
      "engines": {
        "node": ">=4.0"
      },
      "optionalDependencies": {
        "source-map": "~0.6.1"
      }
    },
    "node_modules/jsdom/node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jsdom/node_modules/ws": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
      "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
      "dev": true,
      "dependencies": {
        "async-limiter": "~1.0.0"
      }
    },
    "node_modules/jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "dev": true
    },
    "node_modules/json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "node_modules/json5": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
      "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "engines": ["node >=0.6.0"],
      "dependencies": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "dependencies": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.20",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz",
      "integrity": "sha512-PlhdFcillOINfeV7Ni6oF1TAEayyZBoZ8bcshTHqOYJYlrqzRK5hagpagky5o4HfCzzd1TRkXPMFq6cKk9rGmA==",
      "dev": true
    },
    "node_modules/lodash.clone": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.clone/-/lodash.clone-4.5.0.tgz",
      "integrity": "sha1-GVhwRQ9aExkkeN9Lw9I9LeoZB7Y=",
      "dev": true
    },
    "node_modules/lodash.memoize": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
      "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4=",
      "dev": true
    },
    "node_modules/lodash.sortby": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
      "dev": true
    },
    "node_modules/lodash.uniq": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
      "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M=",
      "dev": true
    },
    "node_modules/log-symbols": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
      "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/magic-string": {
      "version": "0.22.5",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.22.5.tgz",
      "integrity": "sha512-oreip9rJZkzvA8Qzk9HFs8fZGF/u7H/gtrE8EN6RjKJ9kh2HlC+yQ2QezifqTZfGyiuAV0dRv5a+y/8gBb1m9w==",
      "dev": true,
      "dependencies": {
        "vlq": "^0.2.2"
      }
    },
    "node_modules/map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/map-obj": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-4.3.0.tgz",
      "integrity": "sha512-hdN1wVrZbb29eBGiGjJbeP8JbKjq1urkHJ/LIP/NY48MZ1QVXUsQBV1G1zvYFHn1XE06cwjBsOI2K3Ulnj1YXQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "dependencies": {
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/marked": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/marked/-/marked-4.0.12.tgz",
      "integrity": "sha512-hgibXWrEDNBWgGiK18j/4lkS6ihTe9sxtV4Q1OQppb/0zzyPSzoFANBa5MfsG/zgsWklmNnhm0XACZOH/0HBiQ==",
      "dev": true,
      "bin": {
        "marked": "bin/marked.js"
      },
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/md5.js": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
      "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
      "dev": true,
      "dependencies": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "node_modules/mdn-data": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
      "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA==",
      "dev": true
    },
    "node_modules/meow": {
      "version": "10.1.2",
      "resolved": "https://registry.npmjs.org/meow/-/meow-10.1.2.tgz",
      "integrity": "sha512-zbuAlN+V/sXlbGchNS9WTWjUzeamwMt/BApKCJi7B0QyZstZaMx0n4Unll/fg0njGtMdC9UP5SAscvOCLYdM+Q==",
      "dev": true,
      "dependencies": {
        "@types/minimist": "^1.2.2",
        "camelcase-keys": "^7.0.0",
        "decamelize": "^5.0.0",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "4.1.0",
        "normalize-package-data": "^3.0.2",
        "read-pkg-up": "^8.0.0",
        "redent": "^4.0.0",
        "trim-newlines": "^4.0.2",
        "type-fest": "^1.2.2",
        "yargs-parser": "^20.2.9"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/merge-source-map": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.0.4.tgz",
      "integrity": "sha1-pd5GU42uhNQRTMXqArR3KmNGcB8=",
      "dev": true,
      "dependencies": {
        "source-map": "^0.5.6"
      }
    },
    "node_modules/merge-source-map/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dev": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/miller-rabin": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
      "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
      "dev": true,
      "dependencies": {
        "bn.js": "^4.0.0",
        "brorand": "^1.0.1"
      },
      "bin": {
        "miller-rabin": "bin/miller-rabin"
      }
    },
    "node_modules/miller-rabin/node_modules/bn.js": {
      "version": "4.11.9",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
      "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
      "dev": true
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "dev": true,
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.45.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.45.0.tgz",
      "integrity": "sha512-CkqLUxUk15hofLoLyljJSrukZi8mAtgd+yE5uO4tqRZsdsAJKv0O+rFMhVDRJgozy+yG6md5KwuXhD4ocIoP+w==",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.28",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.28.tgz",
      "integrity": "sha512-0TO2yJ5YHYr7M2zzT7gDU1tbwHxEUWBCLt0lscSNpcdAfFyJOVEpRYNS7EXVcTLNj/25QO8gulHC5JtTzSE2UQ==",
      "dev": true,
      "dependencies": {
        "mime-db": "1.45.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/min-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
      "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
      "dev": true
    },
    "node_modules/minimalistic-crypto-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
      "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
      "dev": true
    },
    "node_modules/minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
      "dev": true
    },
    "node_modules/minimist-options": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/minimist-options/-/minimist-options-4.1.0.tgz",
      "integrity": "sha512-Q4r8ghd80yhO/0j1O3B2BjweX3fiHg9cdOwjJd2J76Q135c+NDxGCqdYKQ1SKBuFfgWbAUzBfvYjPUEeNgqN1A==",
      "dev": true,
      "dependencies": {
        "arrify": "^1.0.1",
        "is-plain-obj": "^1.1.0",
        "kind-of": "^6.0.3"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "dependencies": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mixin-deep/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "node_modules/nan": {
      "version": "2.14.2",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.2.tgz",
      "integrity": "sha512-M2ufzIiINKCuDfBSAUr1vWQ+vuVcA9kqx8JJUsbQi6yf1uGRyb7HfpdfUr5qLXf3B/t8dPvcjhKMmlfnP47EzQ==",
      "dev": true,
      "optional": true
    },
    "node_modules/nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "node_modules/node-addon-api": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-1.7.2.tgz",
      "integrity": "sha512-ibPK3iA+vaY1eEjESkQkM0BbCqFOaZMiXRTtdB0u7b4djtY6JnsjvPdUHVMg6xQt3B8fpTTWHI9A+ADjM9frzg==",
      "dev": true
    },
    "node_modules/node-forge": {
      "version": "0.7.6",
      "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.7.6.tgz",
      "integrity": "sha512-sol30LUpz1jQFBjOKwbjxijiE3b6pjd74YwfD0fJOKPjF+fONKb2Yg8rYgS6+bK6VDl+/wfr4IYpC7jDzLUIfw==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/node-libs-browser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
      "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
      "dev": true,
      "dependencies": {
        "assert": "^1.1.1",
        "browserify-zlib": "^0.2.0",
        "buffer": "^4.3.0",
        "console-browserify": "^1.1.0",
        "constants-browserify": "^1.0.0",
        "crypto-browserify": "^3.11.0",
        "domain-browser": "^1.1.1",
        "events": "^3.0.0",
        "https-browserify": "^1.0.0",
        "os-browserify": "^0.3.0",
        "path-browserify": "0.0.1",
        "process": "^0.11.10",
        "punycode": "^1.2.4",
        "querystring-es3": "^0.2.0",
        "readable-stream": "^2.3.3",
        "stream-browserify": "^2.0.1",
        "stream-http": "^2.7.2",
        "string_decoder": "^1.0.0",
        "timers-browserify": "^2.0.4",
        "tty-browserify": "0.0.0",
        "url": "^0.11.0",
        "util": "^0.11.0",
        "vm-browserify": "^1.0.1"
      }
    },
    "node_modules/node-libs-browser/node_modules/punycode": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
      "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
      "dev": true
    },
    "node_modules/node-releases": {
      "version": "1.1.70",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.70.tgz",
      "integrity": "sha512-Slf2s69+2/uAD79pVVQo8uSiC34+g8GWY8UH2Qtqv34ZfhYrxpYpfzs9Js9d6O0mbDmALuxaTlplnBTnSELcrw==",
      "dev": true
    },
    "node_modules/normalize-package-data": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.3.tgz",
      "integrity": "sha512-p2W1sgqij3zMMyRC067Dg16bfzVH+w7hyegmpIvZ4JNjqtGOVAIvLmjBx3yP7YTe9vKJgkoNOPjwQGogDoMXFA==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^4.0.1",
        "is-core-module": "^2.5.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/normalize-package-data/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-url": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-3.3.0.tgz",
      "integrity": "sha512-U+JJi7duF1o+u2pynbp2zXDW2/PADgC30f0GsHZtRh+HOcXHnw137TrNlyxxRvWW5fjKd3bcLHPxofWuCjaeZg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/nth-check": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
      "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
      "dev": true,
      "dependencies": {
        "boolbase": "~1.0.0"
      }
    },
    "node_modules/nwsapi": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
      "dev": true
    },
    "node_modules/oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "dependencies": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.4.1.tgz",
      "integrity": "sha512-wqdhLpfCUbEsoEwl3FXwGyv8ief1k/1aUdIPCqVnupM6e8l63BEJdiF/0swtn04/8p05tG/T0FrpTlfwvljOdw==",
      "dev": true
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.getownpropertydescriptors": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.1.tgz",
      "integrity": "sha512-6DtXgZ/lIZ9hqx4GtZETobXLR/ZLaa0aqV0kzbn80Rf8Z2e/XFnhA0I7p07N2wH8bBBltr2xQPi6sbKWAY2Eng==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.values": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.2.tgz",
      "integrity": "sha512-MYC0jvJopr8EK6dPBiO8Nb9mvjdypOachO5REGk6MXzujbBrAisKo3HmdEI6kZDL6fC31Mwee/5YbtMebixeag==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1",
        "has": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "dev": true,
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "dev": true,
      "dependencies": {
        "mimic-fn": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/opn": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/opn/-/opn-5.5.0.tgz",
      "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
      "dev": true,
      "dependencies": {
        "is-wsl": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/optionator": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
      "dev": true,
      "dependencies": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.6",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "word-wrap": "~1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/ora": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-2.1.0.tgz",
      "integrity": "sha512-hNNlAd3gfv/iPmsNxYoAPLvxg7HuPozww7fFonMZvL84tP6Ox5igfk5j/+a9rtJJwqMgKK+JgWsAQik5o0HTLA==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.3.1",
        "cli-cursor": "^2.1.0",
        "cli-spinners": "^1.1.0",
        "log-symbols": "^2.2.0",
        "strip-ansi": "^4.0.0",
        "wcwidth": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/os-browserify": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
      "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
      "dev": true
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-map": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
      "dev": true,
      "dependencies": {
        "aggregate-error": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/pako": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/pako/-/pako-0.2.9.tgz",
      "integrity": "sha1-8/dSL073gjSNqBYbrZ7P1Rv4OnU=",
      "dev": true
    },
    "node_modules/parcel-bundler": {
      "version": "1.12.4",
      "resolved": "https://registry.npmjs.org/parcel-bundler/-/parcel-bundler-1.12.4.tgz",
      "integrity": "sha512-G+iZGGiPEXcRzw0fiRxWYCKxdt/F7l9a0xkiU4XbcVRJCSlBnioWEwJMutOCCpoQmaQtjB4RBHDGIHN85AIhLQ==",
      "deprecated": "Parcel v1 is no longer maintained. Please migrate to v2, which is published under the 'parcel' package. See https://v2.parceljs.org/getting-started/migration for details.",
      "dev": true,
      "hasInstallScript": true,
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "@babel/core": "^7.4.4",
        "@babel/generator": "^7.4.4",
        "@babel/parser": "^7.4.4",
        "@babel/plugin-transform-flow-strip-types": "^7.4.4",
        "@babel/plugin-transform-modules-commonjs": "^7.4.4",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/preset-env": "^7.4.4",
        "@babel/runtime": "^7.4.4",
        "@babel/template": "^7.4.4",
        "@babel/traverse": "^7.4.4",
        "@babel/types": "^7.4.4",
        "@iarna/toml": "^2.2.0",
        "@parcel/fs": "^1.11.0",
        "@parcel/logger": "^1.11.1",
        "@parcel/utils": "^1.11.0",
        "@parcel/watcher": "^1.12.1",
        "@parcel/workers": "^1.11.0",
        "ansi-to-html": "^0.6.4",
        "babylon-walk": "^1.0.2",
        "browserslist": "^4.1.0",
        "chalk": "^2.1.0",
        "clone": "^2.1.1",
        "command-exists": "^1.2.6",
        "commander": "^2.11.0",
        "core-js": "^2.6.5",
        "cross-spawn": "^6.0.4",
        "css-modules-loader-core": "^1.1.0",
        "cssnano": "^4.0.0",
        "deasync": "^0.1.14",
        "dotenv": "^5.0.0",
        "dotenv-expand": "^5.1.0",
        "envinfo": "^7.3.1",
        "fast-glob": "^2.2.2",
        "filesize": "^3.6.0",
        "get-port": "^3.2.0",
        "htmlnano": "^0.2.2",
        "is-glob": "^4.0.0",
        "is-url": "^1.2.2",
        "js-yaml": "^3.10.0",
        "json5": "^1.0.1",
        "micromatch": "^3.0.4",
        "mkdirp": "^0.5.1",
        "node-forge": "^0.7.1",
        "node-libs-browser": "^2.0.0",
        "opn": "^5.1.0",
        "postcss": "^7.0.11",
        "postcss-value-parser": "^3.3.1",
        "posthtml": "^0.11.2",
        "posthtml-parser": "^0.4.0",
        "posthtml-render": "^1.1.3",
        "resolve": "^1.4.0",
        "semver": "^5.4.1",
        "serialize-to-js": "^3.0.0",
        "serve-static": "^1.12.4",
        "source-map": "0.6.1",
        "terser": "^3.7.3",
        "v8-compile-cache": "^2.0.0",
        "ws": "^5.1.1"
      },
      "bin": {
        "parcel": "bin/cli.js"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/parse-asn1": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.6.tgz",
      "integrity": "sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==",
      "dev": true,
      "dependencies": {
        "asn1.js": "^5.2.0",
        "browserify-aes": "^1.0.0",
        "evp_bytestokey": "^1.0.0",
        "pbkdf2": "^3.0.3",
        "safe-buffer": "^5.1.1"
      }
    },
    "node_modules/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
      "dev": true,
      "dependencies": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/parse5": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.0.tgz",
      "integrity": "sha512-fxNG2sQjHvlVAYmzBZS9YlDp6PTSSDwa98vkD4QgVDDCAo84z5X1t5XyJQ62ImdLXx5NdIIfihey6xpum9/gRQ==",
      "dev": true
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path": {
      "version": "0.12.7",
      "resolved": "https://registry.npmjs.org/path/-/path-0.12.7.tgz",
      "integrity": "sha1-1NwqUGxM4hl+tIHr/NWzbAFAsQ8=",
      "dependencies": {
        "process": "^0.11.1",
        "util": "^0.10.3"
      }
    },
    "node_modules/path-browserify": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.1.tgz",
      "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==",
      "dev": true
    },
    "node_modules/path-dirname": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
      "dev": true
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
      "dev": true
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path/node_modules/inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "node_modules/path/node_modules/util": {
      "version": "0.10.4",
      "resolved": "https://registry.npmjs.org/util/-/util-0.10.4.tgz",
      "integrity": "sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==",
      "dependencies": {
        "inherits": "2.0.3"
      }
    },
    "node_modules/pbkdf2": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.1.tgz",
      "integrity": "sha512-4Ejy1OPxi9f2tt1rRV7Go7zmfDQ+ZectEQz3VGUQhgq62HtIRPDyG/JtnwIxs6x3uNMwo2V7q1fMvKjb+Tnpqg==",
      "dev": true,
      "dependencies": {
        "create-hash": "^1.1.2",
        "create-hmac": "^1.1.4",
        "ripemd160": "^2.0.1",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      },
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "node_modules/phaser": {
      "version": "3.55.2",
      "resolved": "https://registry.npmjs.org/phaser/-/phaser-3.55.2.tgz",
      "integrity": "sha512-amKXsbb2Ht29dGPKvt1edq3yGGYKtq8373GpJYGKPNPnneYY6MtVTOgjHDuZwtmUyK4v86FugkT3hzW/N4tjxQ==",
      "dependencies": {
        "eventemitter3": "^4.0.7",
        "path": "^0.12.7"
      }
    },
    "node_modules/physical-cpu-count": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/physical-cpu-count/-/physical-cpu-count-2.0.0.tgz",
      "integrity": "sha1-GN4vl+S/epVRrXURlCtUlverpmA=",
      "dev": true
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pn": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
      "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA==",
      "dev": true
    },
    "node_modules/posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postcss": {
      "version": "7.0.35",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.35.tgz",
      "integrity": "sha512-3QT8bBJeX/S5zKTTjTCIjRF3If4avAT6kqxcASlTWEtAFCb9NH0OUxNDfgZSWdP5fJnBYCMEWkIFfWeugjzYMg==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.2",
        "source-map": "^0.6.1",
        "supports-color": "^6.1.0"
      },
      "engines": {
        "node": ">=6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      }
    },
    "node_modules/postcss-calc": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-7.0.5.tgz",
      "integrity": "sha512-1tKHutbGtLtEZF6PT4JSihCHfIVldU72mZ8SdZHIYriIZ9fh9k9aWSppaT8rHsyI3dX+KSR+W+Ix9BMY3AODrg==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.27",
        "postcss-selector-parser": "^6.0.2",
        "postcss-value-parser": "^4.0.2"
      }
    },
    "node_modules/postcss-calc/node_modules/postcss-value-parser": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.1.0.tgz",
      "integrity": "sha512-97DXOFbQJhk71ne5/Mt6cOu6yxsSfM0QGQyl0L25Gca4yGWEGJaig7l7gbCX623VqTBNGLRLaVUCnNkcedlRSQ==",
      "dev": true
    },
    "node_modules/postcss-colormin": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-4.0.3.tgz",
      "integrity": "sha512-WyQFAdDZpExQh32j0U0feWisZ0dmOtPl44qYmJKkq9xFWY3p+4qnRzCHeNrkeRhwPHz9bQ3mo0/yVkaply0MNw==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.0.0",
        "color": "^3.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-convert-values": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-4.0.1.tgz",
      "integrity": "sha512-Kisdo1y77KUC0Jmn0OXU/COOJbzM8cImvw1ZFsBgBgMgb1iL23Zs/LXRe3r+EZqM3vGYKdQ2YJVQ5VkJI+zEJQ==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-discard-comments": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-4.0.2.tgz",
      "integrity": "sha512-RJutN259iuRf3IW7GZyLM5Sw4GLTOH8FmsXBnv8Ab/Tc2k4SR4qbV4DNbyyY4+Sjo362SyDmW2DQ7lBSChrpkg==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-discard-duplicates": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-4.0.2.tgz",
      "integrity": "sha512-ZNQfR1gPNAiXZhgENFfEglF93pciw0WxMkJeVmw8eF+JZBbMD7jp6C67GqJAXVZP2BWbOztKfbsdmMp/k8c6oQ==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-discard-empty": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-4.0.1.tgz",
      "integrity": "sha512-B9miTzbznhDjTfjvipfHoqbWKwd0Mj+/fL5s1QOz06wufguil+Xheo4XpOnc4NqKYBCNqqEzgPv2aPBIJLox0w==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-discard-overridden": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-4.0.1.tgz",
      "integrity": "sha512-IYY2bEDD7g1XM1IDEsUT4//iEYCxAmP5oDSFMVU/JVvT7gh+l4fmjciLqGgwjdWpQIdb0Che2VX00QObS5+cTg==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-merge-longhand": {
      "version": "4.0.11",
      "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-4.0.11.tgz",
      "integrity": "sha512-alx/zmoeXvJjp7L4mxEMjh8lxVlDFX1gqWHzaaQewwMZiVhLo42TEClKaeHbRf6J7j82ZOdTJ808RtN0ZOZwvw==",
      "dev": true,
      "dependencies": {
        "css-color-names": "0.0.4",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "stylehacks": "^4.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-merge-rules": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-4.0.3.tgz",
      "integrity": "sha512-U7e3r1SbvYzO0Jr3UT/zKBVgYYyhAz0aitvGIYOYK5CPmkNih+WDSsS5tvPrJ8YMQYlEMvsZIiqmn7HdFUaeEQ==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.0.0",
        "caniuse-api": "^3.0.0",
        "cssnano-util-same-parent": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0",
        "vendors": "^1.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-merge-rules/node_modules/postcss-selector-parser": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
      "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
      "dev": true,
      "dependencies": {
        "dot-prop": "^5.2.0",
        "indexes-of": "^1.0.1",
        "uniq": "^1.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/postcss-minify-font-values": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-4.0.2.tgz",
      "integrity": "sha512-j85oO6OnRU9zPf04+PZv1LYIYOprWm6IA6zkXkrJXyRveDEuQggG6tvoy8ir8ZwjLxLuGfNkCZEQG7zan+Hbtg==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-minify-gradients": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-gradients/-/postcss-minify-gradients-4.0.2.tgz",
      "integrity": "sha512-qKPfwlONdcf/AndP1U8SJ/uzIJtowHlMaSioKzebAXSG4iJthlWC9iSWznQcX4f66gIWX44RSA841HTHj3wK+Q==",
      "dev": true,
      "dependencies": {
        "cssnano-util-get-arguments": "^4.0.0",
        "is-color-stop": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-minify-params": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-params/-/postcss-minify-params-4.0.2.tgz",
      "integrity": "sha512-G7eWyzEx0xL4/wiBBJxJOz48zAKV2WG3iZOqVhPet/9geefm/Px5uo1fzlHu+DOjT+m0Mmiz3jkQzVHe6wxAWg==",
      "dev": true,
      "dependencies": {
        "alphanum-sort": "^1.0.0",
        "browserslist": "^4.0.0",
        "cssnano-util-get-arguments": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "uniqs": "^2.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-minify-selectors": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-selectors/-/postcss-minify-selectors-4.0.2.tgz",
      "integrity": "sha512-D5S1iViljXBj9kflQo4YutWnJmwm8VvIsU1GeXJGiG9j8CIg9zs4voPMdQDUmIxetUOh60VilsNzCiAFTOqu3g==",
      "dev": true,
      "dependencies": {
        "alphanum-sort": "^1.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-minify-selectors/node_modules/postcss-selector-parser": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
      "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
      "dev": true,
      "dependencies": {
        "dot-prop": "^5.2.0",
        "indexes-of": "^1.0.1",
        "uniq": "^1.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/postcss-modules-extract-imports": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-1.1.0.tgz",
      "integrity": "sha1-thTJcgvmgW6u41+zpfqh26agXds=",
      "dev": true,
      "dependencies": {
        "postcss": "^6.0.1"
      }
    },
    "node_modules/postcss-modules-extract-imports/node_modules/postcss": {
      "version": "6.0.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
      "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.1",
        "source-map": "^0.6.1",
        "supports-color": "^5.4.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/postcss-modules-local-by-default": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-1.2.0.tgz",
      "integrity": "sha1-99gMOYxaOT+nlkRmvRlQCn1hwGk=",
      "dev": true,
      "dependencies": {
        "css-selector-tokenizer": "^0.7.0",
        "postcss": "^6.0.1"
      }
    },
    "node_modules/postcss-modules-local-by-default/node_modules/postcss": {
      "version": "6.0.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
      "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.1",
        "source-map": "^0.6.1",
        "supports-color": "^5.4.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/postcss-modules-scope": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-1.1.0.tgz",
      "integrity": "sha1-1upkmUx5+XtipytCb75gVqGUu5A=",
      "dev": true,
      "dependencies": {
        "css-selector-tokenizer": "^0.7.0",
        "postcss": "^6.0.1"
      }
    },
    "node_modules/postcss-modules-scope/node_modules/postcss": {
      "version": "6.0.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
      "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.1",
        "source-map": "^0.6.1",
        "supports-color": "^5.4.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/postcss-modules-values": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-1.3.0.tgz",
      "integrity": "sha1-7P+p1+GSUYOJ9CrQ6D9yrsRW6iA=",
      "dev": true,
      "dependencies": {
        "icss-replace-symbols": "^1.1.0",
        "postcss": "^6.0.1"
      }
    },
    "node_modules/postcss-modules-values/node_modules/postcss": {
      "version": "6.0.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
      "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.1",
        "source-map": "^0.6.1",
        "supports-color": "^5.4.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/postcss-normalize-charset": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-normalize-charset/-/postcss-normalize-charset-4.0.1.tgz",
      "integrity": "sha512-gMXCrrlWh6G27U0hF3vNvR3w8I1s2wOBILvA87iNXaPvSNo5uZAMYsZG7XjCUf1eVxuPfyL4TJ7++SGZLc9A3g==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-display-values": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-display-values/-/postcss-normalize-display-values-4.0.2.tgz",
      "integrity": "sha512-3F2jcsaMW7+VtRMAqf/3m4cPFhPD3EFRgNs18u+k3lTJJlVe7d0YPO+bnwqo2xg8YiRpDXJI2u8A0wqJxMsQuQ==",
      "dev": true,
      "dependencies": {
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-positions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-positions/-/postcss-normalize-positions-4.0.2.tgz",
      "integrity": "sha512-Dlf3/9AxpxE+NF1fJxYDeggi5WwV35MXGFnnoccP/9qDtFrTArZ0D0R+iKcg5WsUd8nUYMIl8yXDCtcrT8JrdA==",
      "dev": true,
      "dependencies": {
        "cssnano-util-get-arguments": "^4.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-repeat-style": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-repeat-style/-/postcss-normalize-repeat-style-4.0.2.tgz",
      "integrity": "sha512-qvigdYYMpSuoFs3Is/f5nHdRLJN/ITA7huIoCyqqENJe9PvPmLhNLMu7QTjPdtnVf6OcYYO5SHonx4+fbJE1+Q==",
      "dev": true,
      "dependencies": {
        "cssnano-util-get-arguments": "^4.0.0",
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-string": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-string/-/postcss-normalize-string-4.0.2.tgz",
      "integrity": "sha512-RrERod97Dnwqq49WNz8qo66ps0swYZDSb6rM57kN2J+aoyEAJfZ6bMx0sx/F9TIEX0xthPGCmeyiam/jXif0eA==",
      "dev": true,
      "dependencies": {
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-timing-functions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-timing-functions/-/postcss-normalize-timing-functions-4.0.2.tgz",
      "integrity": "sha512-acwJY95edP762e++00Ehq9L4sZCEcOPyaHwoaFOhIwWCDfik6YvqsYNxckee65JHLKzuNSSmAdxwD2Cud1Z54A==",
      "dev": true,
      "dependencies": {
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-unicode": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-normalize-unicode/-/postcss-normalize-unicode-4.0.1.tgz",
      "integrity": "sha512-od18Uq2wCYn+vZ/qCOeutvHjB5jm57ToxRaMeNuf0nWVHaP9Hua56QyMF6fs/4FSUnVIw0CBPsU0K4LnBPwYwg==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-url": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-normalize-url/-/postcss-normalize-url-4.0.1.tgz",
      "integrity": "sha512-p5oVaF4+IHwu7VpMan/SSpmpYxcJMtkGppYf0VbdH5B6hN8YNmVyJLuY9FmLQTzY3fag5ESUUHDqM+heid0UVA==",
      "dev": true,
      "dependencies": {
        "is-absolute-url": "^2.0.0",
        "normalize-url": "^3.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-normalize-whitespace": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-whitespace/-/postcss-normalize-whitespace-4.0.2.tgz",
      "integrity": "sha512-tO8QIgrsI3p95r8fyqKV+ufKlSHh9hMJqACqbv2XknufqEDhDvbguXGBBqxw9nsQoXWf0qOqppziKJKHMD4GtA==",
      "dev": true,
      "dependencies": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-ordered-values": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/postcss-ordered-values/-/postcss-ordered-values-4.1.2.tgz",
      "integrity": "sha512-2fCObh5UanxvSxeXrtLtlwVThBvHn6MQcu4ksNT2tsaV2Fg76R2CV98W7wNSlX+5/pFwEyaDwKLLoEV7uRybAw==",
      "dev": true,
      "dependencies": {
        "cssnano-util-get-arguments": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-reduce-initial": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/postcss-reduce-initial/-/postcss-reduce-initial-4.0.3.tgz",
      "integrity": "sha512-gKWmR5aUulSjbzOfD9AlJiHCGH6AEVLaM0AV+aSioxUDd16qXP1PCh8d1/BGVvpdWn8k/HiK7n6TjeoXN1F7DA==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.0.0",
        "caniuse-api": "^3.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-reduce-transforms": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-reduce-transforms/-/postcss-reduce-transforms-4.0.2.tgz",
      "integrity": "sha512-EEVig1Q2QJ4ELpJXMZR8Vt5DQx8/mo+dGWSR7vWXqcob2gQLyQGsionYcGKATXvQzMPn6DSN1vTN7yFximdIAg==",
      "dev": true,
      "dependencies": {
        "cssnano-util-get-match": "^4.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.4.tgz",
      "integrity": "sha512-gjMeXBempyInaBqpp8gODmwZ52WaYsVOsfr4L4lDQ7n3ncD6mEyySiDtgzCT+NYC0mmeOLvtsF8iaEf0YT6dBw==",
      "dev": true,
      "dependencies": {
        "cssesc": "^3.0.0",
        "indexes-of": "^1.0.1",
        "uniq": "^1.0.1",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-svgo": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-svgo/-/postcss-svgo-4.0.2.tgz",
      "integrity": "sha512-C6wyjo3VwFm0QgBy+Fu7gCYOkCmgmClghO+pjcxvrcBKtiKt0uCF+hvbMO1fyv5BMImRK90SMb+dwUnfbGd+jw==",
      "dev": true,
      "dependencies": {
        "is-svg": "^3.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "svgo": "^1.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-unique-selectors": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-unique-selectors/-/postcss-unique-selectors-4.0.1.tgz",
      "integrity": "sha512-+JanVaryLo9QwZjKrmJgkI4Fn8SBgRO6WXQBJi7KiAVPlmxikB5Jzc4EvXMT2H0/m0RjrVVm9rGNhZddm/8Spg==",
      "dev": true,
      "dependencies": {
        "alphanum-sort": "^1.0.0",
        "postcss": "^7.0.0",
        "uniqs": "^2.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
      "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
      "dev": true
    },
    "node_modules/postcss/node_modules/supports-color": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
      "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/posthtml": {
      "version": "0.11.6",
      "resolved": "https://registry.npmjs.org/posthtml/-/posthtml-0.11.6.tgz",
      "integrity": "sha512-C2hrAPzmRdpuL3iH0TDdQ6XCc9M7Dcc3zEW5BLerY65G4tWWszwv6nG/ksi6ul5i2mx22ubdljgktXCtNkydkw==",
      "dev": true,
      "dependencies": {
        "posthtml-parser": "^0.4.1",
        "posthtml-render": "^1.1.5"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/posthtml-parser": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/posthtml-parser/-/posthtml-parser-0.4.2.tgz",
      "integrity": "sha512-BUIorsYJTvS9UhXxPTzupIztOMVNPa/HtAm9KHni9z6qEfiJ1bpOBL5DfUOL9XAc3XkLIEzBzpph+Zbm4AdRAg==",
      "dev": true,
      "dependencies": {
        "htmlparser2": "^3.9.2"
      }
    },
    "node_modules/posthtml-render": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/posthtml-render/-/posthtml-render-1.4.0.tgz",
      "integrity": "sha512-W1779iVHGfq0Fvh2PROhCe2QhB8mEErgqzo1wpIt36tCgChafP+hbXIhLDOM8ePJrZcFs0vkNEtdibEWVqChqw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/process": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
      "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true
    },
    "node_modules/psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
      "dev": true
    },
    "node_modules/public-encrypt": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.3.tgz",
      "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
      "dev": true,
      "dependencies": {
        "bn.js": "^4.1.0",
        "browserify-rsa": "^4.0.0",
        "create-hash": "^1.1.0",
        "parse-asn1": "^5.0.0",
        "randombytes": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "node_modules/public-encrypt/node_modules/bn.js": {
      "version": "4.11.9",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
      "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
      "dev": true
    },
    "node_modules/punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/purgecss": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/purgecss/-/purgecss-2.3.0.tgz",
      "integrity": "sha512-BE5CROfVGsx2XIhxGuZAT7rTH9lLeQx/6M0P7DTXQH4IUc3BBzs9JUzt4yzGf3JrH9enkeq6YJBe9CTtkm1WmQ==",
      "dev": true,
      "dependencies": {
        "commander": "^5.0.0",
        "glob": "^7.0.0",
        "postcss": "7.0.32",
        "postcss-selector-parser": "^6.0.2"
      },
      "bin": {
        "purgecss": "bin/purgecss"
      }
    },
    "node_modules/purgecss/node_modules/commander": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-5.1.0.tgz",
      "integrity": "sha512-P0CysNDQ7rtVw4QIQtm+MRxV66vKFSvlsQvGYXZWR3qFU0jlMKHZZZgw8e+8DSah4UDKMqnknRDQz+xuQXQ/Zg==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/purgecss/node_modules/postcss": {
      "version": "7.0.32",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.32.tgz",
      "integrity": "sha512-03eXong5NLnNCD05xscnGKGDZ98CyzoqPSMjOe6SuoQY7Z2hIj0Ld1g/O/UQRuOle2aRtiIRDg9tDcTGAkLfKw==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.2",
        "source-map": "^0.6.1",
        "supports-color": "^6.1.0"
      },
      "engines": {
        "node": ">=6.0.0"
      },
      "funding": {
        "type": "tidelift",
        "url": "https://tidelift.com/funding/github/npm/postcss"
      }
    },
    "node_modules/purgecss/node_modules/supports-color": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
      "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/q": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
      "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
      "dev": true,
      "engines": {
        "node": ">=0.6.0",
        "teleport": ">=0.2.0"
      }
    },
    "node_modules/qs": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
      "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
      "dev": true,
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/querystring": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
      "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
      "deprecated": "The querystring API is considered Legacy. new code should use the URLSearchParams API instead.",
      "dev": true,
      "engines": {
        "node": ">=0.4.x"
      }
    },
    "node_modules/querystring-es3": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
      "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
      "dev": true,
      "engines": {
        "node": ">=0.4.x"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [{
        "type": "github",
        "url": "https://github.com/sponsors/feross"
      }, {
        "type": "patreon",
        "url": "https://www.patreon.com/feross"
      }, {
        "type": "consulting",
        "url": "https://feross.org/support"
      }]
    },
    "node_modules/quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/quote-stream": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/quote-stream/-/quote-stream-1.0.2.tgz",
      "integrity": "sha1-hJY/jJwmuULhU/7rU6rnRlK34LI=",
      "dev": true,
      "dependencies": {
        "buffer-equal": "0.0.1",
        "minimist": "^1.1.3",
        "through2": "^2.0.0"
      },
      "bin": {
        "quote-stream": "bin/cmd.js"
      }
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "^5.1.0"
      }
    },
    "node_modules/randomfill": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
      "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
      "dev": true,
      "dependencies": {
        "randombytes": "^2.0.5",
        "safe-buffer": "^5.1.0"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/read-pkg": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-6.0.0.tgz",
      "integrity": "sha512-X1Fu3dPuk/8ZLsMhEj5f4wFAF0DWoK7qhGJvgaijocXxBmSToKfbFtqbxMO7bVjNA1dmE5huAzjXj/ey86iw9Q==",
      "dev": true,
      "dependencies": {
        "@types/normalize-package-data": "^2.4.0",
        "normalize-package-data": "^3.0.2",
        "parse-json": "^5.2.0",
        "type-fest": "^1.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/read-pkg-up": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-8.0.0.tgz",
      "integrity": "sha512-snVCqPczksT0HS2EC+SxUndvSzn6LRCwpfSvLrIfR5BKDQQZMaI6jPRC9dYvYFDRAuFEAnkwww8kBBNE/3VvzQ==",
      "dev": true,
      "dependencies": {
        "find-up": "^5.0.0",
        "read-pkg": "^6.0.0",
        "type-fest": "^1.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/read-pkg/node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "dev": true,
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/readdirp": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
      "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.11",
        "micromatch": "^3.1.10",
        "readable-stream": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/redent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-4.0.0.tgz",
      "integrity": "sha512-tYkDkVVtYkSVhuQ4zBgfvciymHaeuel+zFKXShfDnFP5SyVEP7qo70Rf1jTOTCx3vGNAbnEi/xFkcfQVMIBWag==",
      "dev": true,
      "dependencies": {
        "indent-string": "^5.0.0",
        "strip-indent": "^4.0.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/redent/node_modules/indent-string": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-5.0.0.tgz",
      "integrity": "sha512-m6FAo/spmsW2Ab2fU35JTYwtOKa2yAwXSwgjSv1TJzh4Mh7mC3lzAOVLBprb72XsTrgkEIsl7YrFNAiDiRhIGg==",
      "dev": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
      "dev": true
    },
    "node_modules/regenerate-unicode-properties": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.2.0.tgz",
      "integrity": "sha512-F9DjY1vKLo/tPePDycuH3dn9H1OTPIkVD9Kz4LODu+F2C75mgjAJ7x/gwy6ZcSNRAAkhNlJSOHRe8k3p+K9WhA==",
      "dev": true,
      "dependencies": {
        "regenerate": "^1.4.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.13.7",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",
      "integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew==",
      "dev": true
    },
    "node_modules/regenerator-transform": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
      "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
      "dev": true,
      "dependencies": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "node_modules/regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/regexpu-core": {
      "version": "4.7.1",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.7.1.tgz",
      "integrity": "sha512-ywH2VUraA44DZQuRKzARmw6S66mr48pQVva4LBeRhcOltJ6hExvWly5ZjFLYo67xbIxb6W1q4bAGtgfEl20zfQ==",
      "dev": true,
      "dependencies": {
        "regenerate": "^1.4.0",
        "regenerate-unicode-properties": "^8.2.0",
        "regjsgen": "^0.5.1",
        "regjsparser": "^0.6.4",
        "unicode-match-property-ecmascript": "^1.0.4",
        "unicode-match-property-value-ecmascript": "^1.2.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regjsgen": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
      "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A==",
      "dev": true
    },
    "node_modules/regjsparser": {
      "version": "0.6.6",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.6.tgz",
      "integrity": "sha512-jjyuCp+IEMIm3N1H1LLTJW1EISEJV9+5oHdEyrt43Pg9cDSb6rrLZei2cVWpl0xTjmmlpec/lEQGYgM7xfpGCQ==",
      "dev": true,
      "dependencies": {
        "jsesc": "~0.5.0"
      },
      "bin": {
        "regjsparser": "bin/parser"
      }
    },
    "node_modules/regjsparser/node_modules/jsesc": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
      "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      }
    },
    "node_modules/relateurl": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz",
      "integrity": "sha1-VNvzd+UUQKypCkzSdGANP/LYiKk=",
      "dev": true,
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true
    },
    "node_modules/repeat-element": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
      "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/request": {
      "version": "2.88.2",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
      "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
      "deprecated": "request has been deprecated, see https://github.com/request/request/issues/3142",
      "dev": true,
      "dependencies": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.3",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.5.0",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/request-promise-core": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
      "integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
      "dev": true,
      "dependencies": {
        "lodash": "^4.17.19"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "peerDependencies": {
        "request": "^2.34"
      }
    },
    "node_modules/request-promise-native": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
      "integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
      "deprecated": "request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142",
      "dev": true,
      "dependencies": {
        "request-promise-core": "1.1.4",
        "stealthy-require": "^1.1.1",
        "tough-cookie": "^2.3.3"
      },
      "engines": {
        "node": ">=0.12.0"
      },
      "peerDependencies": {
        "request": "^2.34"
      }
    },
    "node_modules/resolve": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.19.0.tgz",
      "integrity": "sha512-rArEXAgsBG4UgRGcynxWIWKFvh/XZCcS8UJdHhwy91zwAvCZIbcs+vAbflgBnNjYMs/i/i+/Ux6IZhML1yPvxg==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.1.0",
        "path-parse": "^1.0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
      "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "deprecated": "https://github.com/lydell/resolve-url#deprecated",
      "dev": true
    },
    "node_modules/restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "dev": true,
      "dependencies": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true,
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rgb-regex": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/rgb-regex/-/rgb-regex-1.0.1.tgz",
      "integrity": "sha1-wODWiC3w4jviVKR16O3UGRX+rrE=",
      "dev": true
    },
    "node_modules/rgba-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/rgba-regex/-/rgba-regex-1.0.0.tgz",
      "integrity": "sha1-QzdOLiyglosO8VI0YLfXMP8i7rM=",
      "dev": true
    },
    "node_modules/rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      }
    },
    "node_modules/ripemd160": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
      "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
      "dev": true,
      "dependencies": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [{
        "type": "github",
        "url": "https://github.com/sponsors/feross"
      }, {
        "type": "patreon",
        "url": "https://www.patreon.com/feross"
      }, {
        "type": "consulting",
        "url": "https://feross.org/support"
      }],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "node_modules/safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "dependencies": {
        "ret": "~0.1.10"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "node_modules/sass": {
      "version": "1.32.5",
      "resolved": "https://registry.npmjs.org/sass/-/sass-1.32.5.tgz",
      "integrity": "sha512-kU1yJ5zUAmPxr7f3q0YXTAd1oZjSR1g3tYyv+xu0HZSl5JiNOaE987eiz7wCUvbm4I9fGWGU2TgApTtcP4GMNQ==",
      "dev": true,
      "dependencies": {
        "chokidar": ">=2.0.0 <4.0.0"
      },
      "bin": {
        "sass": "sass.js"
      },
      "engines": {
        "node": ">=8.9.0"
      }
    },
    "node_modules/sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
      "dev": true
    },
    "node_modules/saxes": {
      "version": "3.1.11",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-3.1.11.tgz",
      "integrity": "sha512-Ydydq3zC+WYDJK1+gRxRapLIED9PWeSuuS41wqyoRmzvhhh9nc+QQrVMKJYzJFULazeGhzSV0QleN2wD3boh2g==",
      "dev": true,
      "dependencies": {
        "xmlchars": "^2.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "dev": true,
      "dependencies": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/send/node_modules/debug/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
      "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
      "dev": true
    },
    "node_modules/serialize-to-js": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/serialize-to-js/-/serialize-to-js-3.1.1.tgz",
      "integrity": "sha512-F+NGU0UHMBO4Q965tjw7rvieNVjlH6Lqi2emq/Lc9LUURYJbiCzmpi4Cy1OOjjVPtxu0c+NE85LU6968Wko5ZA==",
      "dev": true,
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "dev": true,
      "dependencies": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/set-value/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
      "dev": true
    },
    "node_modules/setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
      "dev": true
    },
    "node_modules/sha.js": {
      "version": "2.4.11",
      "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
      "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      },
      "bin": {
        "sha.js": "bin.js"
      }
    },
    "node_modules/shallow-copy": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/shallow-copy/-/shallow-copy-0.0.1.tgz",
      "integrity": "sha1-QV9CcC1z2BAzApLMXuhurhoRoXA=",
      "dev": true
    },
    "node_modules/shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
      "dev": true
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
      "dev": true,
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/simple-swizzle/node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
      "dev": true
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "dependencies": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "dependencies": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/snapdragon/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/snapdragon/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "deprecated": "See https://github.com/lydell/source-map-resolve#deprecated",
      "dev": true,
      "dependencies": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-url": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
      "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
      "deprecated": "See https://github.com/lydell/source-map-url#deprecated",
      "dev": true
    },
    "node_modules/spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "dev": true,
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",
      "integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g==",
      "dev": true
    },
    "node_modules/split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "node_modules/srcset": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/srcset/-/srcset-3.0.0.tgz",
      "integrity": "sha512-D59vF08Qzu/C4GAOXVgMTLfgryt5fyWo93FZyhEWANo0PokFz/iWdDe13mX3O5TRf6l8vMTqckAfR4zPiaH0yQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/sshpk": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "dependencies": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      },
      "bin": {
        "sshpk-conv": "bin/sshpk-conv",
        "sshpk-sign": "bin/sshpk-sign",
        "sshpk-verify": "bin/sshpk-verify"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/stable/-/stable-0.1.8.tgz",
      "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==",
      "dev": true
    },
    "node_modules/static-eval": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/static-eval/-/static-eval-2.1.0.tgz",
      "integrity": "sha512-agtxZ/kWSsCkI5E4QifRwsaPs0P0JmZV6dkLz6ILYfFYQGn+5plctanRN+IC8dJRiFkyXHrwEE3W9Wmx67uDbw==",
      "dev": true,
      "dependencies": {
        "escodegen": "^1.11.1"
      }
    },
    "node_modules/static-eval/node_modules/escodegen": {
      "version": "1.14.3",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
      "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
      "dev": true,
      "dependencies": {
        "esprima": "^4.0.1",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1"
      },
      "bin": {
        "escodegen": "bin/escodegen.js",
        "esgenerate": "bin/esgenerate.js"
      },
      "engines": {
        "node": ">=4.0"
      },
      "optionalDependencies": {
        "source-map": "~0.6.1"
      }
    },
    "node_modules/static-eval/node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "dependencies": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-module": {
      "version": "2.2.5",
      "resolved": "https://registry.npmjs.org/static-module/-/static-module-2.2.5.tgz",
      "integrity": "sha512-D8vv82E/Kpmz3TXHKG8PPsCPg+RAX6cbCOyvjM6x04qZtQ47EtJFVwRsdov3n5d6/6ynrOY9XB4JkaZwB2xoRQ==",
      "dev": true,
      "dependencies": {
        "concat-stream": "~1.6.0",
        "convert-source-map": "^1.5.1",
        "duplexer2": "~0.1.4",
        "escodegen": "~1.9.0",
        "falafel": "^2.1.0",
        "has": "^1.0.1",
        "magic-string": "^0.22.4",
        "merge-source-map": "1.0.4",
        "object-inspect": "~1.4.0",
        "quote-stream": "~1.0.2",
        "readable-stream": "~2.3.3",
        "shallow-copy": "~0.0.1",
        "static-eval": "^2.0.0",
        "through2": "~2.0.3"
      }
    },
    "node_modules/statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/stealthy-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
      "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stream-browserify": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.2.tgz",
      "integrity": "sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==",
      "dev": true,
      "dependencies": {
        "inherits": "~2.0.1",
        "readable-stream": "^2.0.2"
      }
    },
    "node_modules/stream-http": {
      "version": "2.8.3",
      "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
      "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
      "dev": true,
      "dependencies": {
        "builtin-status-codes": "^3.0.0",
        "inherits": "^2.0.1",
        "readable-stream": "^2.3.6",
        "to-arraybuffer": "^1.0.0",
        "xtend": "^4.0.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.3.tgz",
      "integrity": "sha512-ayH0pB+uf0U28CtjlLvL7NaohvR1amUvVZk+y3DYb0Ey2PUV5zPkkKy9+U1ndVEIXO8hNg18eIv9Jntbii+dKw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.3.tgz",
      "integrity": "sha512-oBIBUy5lea5tt0ovtOFiEQaBkoBBkyJhZXzJYrSmDo5IUUqbOPvVezuRs/agBIdZ2p2Eo1FD6bD9USyBLfl3xg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-indent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-4.0.0.tgz",
      "integrity": "sha512-mnVSV2l+Zv6BLpSD/8V87CW/y9EmmbYzGCIavsnsI6/nwn26DwffM/yztm30Z/I2DY9wdS3vXVCMnHDgZaVNoA==",
      "dev": true,
      "dependencies": {
        "min-indent": "^1.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stylehacks": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/stylehacks/-/stylehacks-4.0.3.tgz",
      "integrity": "sha512-7GlLk9JwlElY4Y6a/rmbH2MhVlTyVmiJd1PfTCqFaIBEGMYNsrO/v3SeGTdhBThLg4Z+NbOk/qFMwCa+J+3p/g==",
      "dev": true,
      "dependencies": {
        "browserslist": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/stylehacks/node_modules/postcss-selector-parser": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
      "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
      "dev": true,
      "dependencies": {
        "dot-prop": "^5.2.0",
        "indexes-of": "^1.0.1",
        "uniq": "^1.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/svgo": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/svgo/-/svgo-1.3.2.tgz",
      "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
      "deprecated": "This SVGO version is no longer supported. Upgrade to v2.x.x.",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.1",
        "coa": "^2.0.2",
        "css-select": "^2.0.0",
        "css-select-base-adapter": "^0.1.1",
        "css-tree": "1.0.0-alpha.37",
        "csso": "^4.0.2",
        "js-yaml": "^3.13.1",
        "mkdirp": "~0.5.1",
        "object.values": "^1.1.0",
        "sax": "~1.2.4",
        "stable": "^0.1.8",
        "unquote": "~1.1.1",
        "util.promisify": "~1.0.0"
      },
      "bin": {
        "svgo": "bin/svgo"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true
    },
    "node_modules/terser": {
      "version": "3.17.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-3.17.0.tgz",
      "integrity": "sha512-/FQzzPJmCpjAH9Xvk2paiWrFq+5M6aVOf+2KRbwhByISDX/EujxsK+BAvrhb6H+2rtrLCHK9N01wO014vrIwVQ==",
      "dev": true,
      "dependencies": {
        "commander": "^2.19.0",
        "source-map": "~0.6.1",
        "source-map-support": "~0.5.10"
      },
      "bin": {
        "terser": "bin/uglifyjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/through2": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "dev": true,
      "dependencies": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "node_modules/timers-browserify": {
      "version": "2.0.12",
      "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.12.tgz",
      "integrity": "sha512-9phl76Cqm6FhSX9Xe1ZUAMLtm1BLkKj2Qd5ApyWkXzsMRaA7dgr81kf4wJmQf/hAvg8EEyJxDo3du/0KlhPiKQ==",
      "dev": true,
      "dependencies": {
        "setimmediate": "^1.0.4"
      },
      "engines": {
        "node": ">=0.6.0"
      }
    },
    "node_modules/timsort": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/timsort/-/timsort-0.3.0.tgz",
      "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q=",
      "dev": true
    },
    "node_modules/tiny-inflate": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz",
      "integrity": "sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==",
      "dev": true
    },
    "node_modules/to-arraybuffer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
      "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
      "dev": true
    },
    "node_modules/to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-object-path/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "dependencies": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
      "dev": true,
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tough-cookie": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
      "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
      "dev": true,
      "dependencies": {
        "psl": "^1.1.28",
        "punycode": "^2.1.1"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tr46": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
      "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/trim-newlines": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-4.0.2.tgz",
      "integrity": "sha512-GJtWyq9InR/2HRiLZgpIKv+ufIKrVrvjQWEj7PxAXNc5dwbNJkqhAUoAGgzRmULAnoOM5EIpveYd3J2VeSAIew==",
      "dev": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/tty-browserify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
      "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
      "dev": true
    },
    "node_modules/tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "dependencies": {
        "safe-buffer": "^5.0.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "node_modules/type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "dependencies": {
        "prelude-ls": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-1.4.0.tgz",
      "integrity": "sha512-yGSza74xk0UG8k+pLh5oeoYirvIiWo5t0/o3zHHAO2tRDiZcxWP7fywNlXhqb6/r6sWvwi+RsyQMWhVLe4BVuA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
      "dev": true
    },
    "node_modules/uncss": {
      "version": "0.17.3",
      "resolved": "https://registry.npmjs.org/uncss/-/uncss-0.17.3.tgz",
      "integrity": "sha512-ksdDWl81YWvF/X14fOSw4iu8tESDHFIeyKIeDrK6GEVTQvqJc1WlOEXqostNwOCi3qAj++4EaLsdAgPmUbEyog==",
      "dev": true,
      "dependencies": {
        "commander": "^2.20.0",
        "glob": "^7.1.4",
        "is-absolute-url": "^3.0.1",
        "is-html": "^1.1.0",
        "jsdom": "^14.1.0",
        "lodash": "^4.17.15",
        "postcss": "^7.0.17",
        "postcss-selector-parser": "6.0.2",
        "request": "^2.88.0"
      },
      "bin": {
        "uncss": "bin/uncss"
      },
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/uncss/node_modules/is-absolute-url": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-3.0.3.tgz",
      "integrity": "sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/uncss/node_modules/postcss-selector-parser": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.2.tgz",
      "integrity": "sha512-36P2QR59jDTOAiIkqEprfJDsoNrvwFei3eCqKd1Y0tUsBimsq39BLp7RD+JWny3WgB1zGhJX8XVePwm9k4wdBg==",
      "dev": true,
      "dependencies": {
        "cssesc": "^3.0.0",
        "indexes-of": "^1.0.1",
        "uniq": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-canonical-property-names-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
      "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
      "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
      "dev": true,
      "dependencies": {
        "unicode-canonical-property-names-ecmascript": "^1.0.4",
        "unicode-property-aliases-ecmascript": "^1.0.4"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-value-ecmascript": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.2.0.tgz",
      "integrity": "sha512-wjuQHGQVofmSJv1uVISKLE5zO2rNGzM/KCYZch/QQvez7C1hUhBIuZ701fYXExuufJFMPhv2SyL8CyoIfMLbIQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-property-aliases-ecmascript": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.1.0.tgz",
      "integrity": "sha512-PqSoPh/pWetQ2phoj5RLiaqIk4kCNwoV3CI+LfGmWLKI3rE3kl1h59XpX2BjgDrmbxD9ARtQobPGU1SguCYuQg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-trie": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/unicode-trie/-/unicode-trie-0.3.1.tgz",
      "integrity": "sha1-1nHd3YkQGgi6w3tqUWEBBgIFIIU=",
      "dev": true,
      "dependencies": {
        "pako": "^0.2.5",
        "tiny-inflate": "^1.0.0"
      }
    },
    "node_modules/union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/uniq": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/uniq/-/uniq-1.0.1.tgz",
      "integrity": "sha1-sxxa6CVIRKOoKBVBzisEuGWnNP8=",
      "dev": true
    },
    "node_modules/uniqs": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/uniqs/-/uniqs-2.0.0.tgz",
      "integrity": "sha1-/+3ks2slKQaW5uFl1KWe25mOawI=",
      "dev": true
    },
    "node_modules/unquote": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/unquote/-/unquote-1.1.1.tgz",
      "integrity": "sha1-j97XMk7G6IoP+LkF58CYzcCG1UQ=",
      "dev": true
    },
    "node_modules/unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "dependencies": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
      "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
      "dev": true,
      "dependencies": {
        "get-value": "^2.0.3",
        "has-values": "^0.1.4",
        "isobject": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value/node_modules/isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dev": true,
      "dependencies": {
        "isarray": "1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-values": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
      "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/upath": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
      "dev": true,
      "engines": {
        "node": ">=4",
        "yarn": "*"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "deprecated": "Please see https://github.com/lydell/urix#deprecated",
      "dev": true
    },
    "node_modules/url": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
      "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
      "dev": true,
      "dependencies": {
        "punycode": "1.3.2",
        "querystring": "0.2.0"
      }
    },
    "node_modules/url/node_modules/punycode": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
      "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
      "dev": true
    },
    "node_modules/use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/util": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/util/-/util-0.11.1.tgz",
      "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
      "dev": true,
      "dependencies": {
        "inherits": "2.0.3"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "node_modules/util.promisify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.1.tgz",
      "integrity": "sha512-g9JpC/3He3bm38zsLupWryXHoEcS22YHthuPQSJdMy6KNrzIRzWqcsHzD/WUnqe45whVou4VIsPew37DoXWNrA==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.2",
        "has-symbols": "^1.0.1",
        "object.getownpropertydescriptors": "^2.1.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/util.promisify/node_modules/es-abstract": {
      "version": "1.17.7",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.7.tgz",
      "integrity": "sha512-VBl/gnfcJ7OercKA9MVaegWsBHFjV492syMudcnQZvt/Dw8ezpcOHYZXa/J96O8vx+g4x65YKhxOwDUh63aS5g==",
      "dev": true,
      "dependencies": {
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1",
        "is-callable": "^1.2.2",
        "is-regex": "^1.1.1",
        "object-inspect": "^1.8.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.1",
        "string.prototype.trimend": "^1.0.1",
        "string.prototype.trimstart": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/util.promisify/node_modules/object-inspect": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
      "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/util/node_modules/inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
      "dev": true
    },
    "node_modules/uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
      "dev": true,
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/v8-compile-cache": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.2.0.tgz",
      "integrity": "sha512-gTpR5XQNKFwOd4clxfnhaqvfqMpqEwr4tOtCyz4MtYZX2JYhfr1JvBFKdS+7K/9rfpZR3VLX+YWBbKoxCgS43Q==",
      "dev": true
    },
    "node_modules/validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "dependencies": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "node_modules/vendors": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/vendors/-/vendors-1.0.4.tgz",
      "integrity": "sha512-/juG65kTL4Cy2su4P8HjtkTxk6VmJDiOPBufWniqQ6wknac6jNiXS9vU+hO3wgusiyqWlzTbVHi0dyJqRONg3w==",
      "dev": true,
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "engines": ["node >=0.6.0"],
      "dependencies": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "node_modules/vlq": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/vlq/-/vlq-0.2.3.tgz",
      "integrity": "sha512-DRibZL6DsNhIgYQ+wNdWDL2SL3bKPlVrRiBqV5yuMm++op8W4kGFtaQfCs4KEJn0wBZcHVHJ3eoywX8983k1ow==",
      "dev": true
    },
    "node_modules/vm-browserify": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-1.1.2.tgz",
      "integrity": "sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==",
      "dev": true
    },
    "node_modules/w3c-hr-time": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
      "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
      "dev": true,
      "dependencies": {
        "browser-process-hrtime": "^1.0.0"
      }
    },
    "node_modules/w3c-xmlserializer": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-1.1.2.tgz",
      "integrity": "sha512-p10l/ayESzrBMYWRID6xbuCKh2Fp77+sA0doRuGn4tTIMrrZVeqfpKjXHY+oDh3K4nLdPgNwMTVP6Vp4pvqbNg==",
      "dev": true,
      "dependencies": {
        "domexception": "^1.0.1",
        "webidl-conversions": "^4.0.2",
        "xml-name-validator": "^3.0.0"
      }
    },
    "node_modules/wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dev": true,
      "dependencies": {
        "defaults": "^1.0.3"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
      "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
      "dev": true
    },
    "node_modules/whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "dev": true,
      "dependencies": {
        "iconv-lite": "0.4.24"
      }
    },
    "node_modules/whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
      "dev": true
    },
    "node_modules/whatwg-url": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
      "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
      "dev": true,
      "dependencies": {
        "lodash.sortby": "^4.7.0",
        "tr46": "^1.0.1",
        "webidl-conversions": "^4.0.2"
      }
    },
    "node_modules/which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "which": "bin/which"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "node_modules/ws": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/ws/-/ws-5.2.2.tgz",
      "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
      "dev": true,
      "dependencies": {
        "async-limiter": "~1.0.0"
      }
    },
    "node_modules/xml-name-validator": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
      "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
      "dev": true
    },
    "node_modules/xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
      "dev": true
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "dev": true,
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "node_modules/yargs-parser": {
      "version": "20.2.9",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
      "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  },
  "dependencies": {
    "@babel/code-frame": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.11.tgz",
      "integrity": "sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==",
      "dev": true,
      "requires": {
        "@babel/highlight": "^7.10.4"
      }
    },
    "@babel/compat-data": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.12.7.tgz",
      "integrity": "sha512-YaxPMGs/XIWtYqrdEOZOCPsVWfEoriXopnsz3/i7apYPXQ3698UFhS6dVT1KN5qOsWmVgw/FOrmQgpRaZayGsw==",
      "dev": true
    },
    "@babel/core": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.12.10.tgz",
      "integrity": "sha512-eTAlQKq65zHfkHZV0sIVODCPGVgoo1HdBlbSLi9CqOzuZanMv2ihzY+4paiKr1mH+XmYESMAmJ/dpZ68eN6d8w==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.10.4",
        "@babel/generator": "^7.12.10",
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helpers": "^7.12.5",
        "@babel/parser": "^7.12.10",
        "@babel/template": "^7.12.7",
        "@babel/traverse": "^7.12.10",
        "@babel/types": "^7.12.10",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.1",
        "json5": "^2.1.2",
        "lodash": "^4.17.19",
        "semver": "^5.4.1",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "json5": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
          "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/generator": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.12.11.tgz",
      "integrity": "sha512-Ggg6WPOJtSi8yYQvLVjG8F/TlpWDlKx0OpS4Kt+xMQPs5OaGYWy+v1A+1TvxI6sAMGZpKWWoAQ1DaeQbImlItA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.11",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/helper-annotate-as-pure": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.12.10.tgz",
      "integrity": "sha512-XplmVbC1n+KY6jL8/fgLVXXUauDIB+lD5+GsQEh6F6GBF1dq1qy4DP4yXWzDKcoqXB3X58t61e85Fitoww4JVQ==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.10"
      }
    },
    "@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.10.4.tgz",
      "integrity": "sha512-L0zGlFrGWZK4PbT8AszSfLTM5sDU1+Az/En9VrdT8/LmEiJt4zXt+Jve9DCAnQcbqDhCI+29y/L93mrDzddCcg==",
      "dev": true,
      "requires": {
        "@babel/helper-explode-assignable-expression": "^7.10.4",
        "@babel/types": "^7.10.4"
      }
    },
    "@babel/helper-compilation-targets": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.12.5.tgz",
      "integrity": "sha512-+qH6NrscMolUlzOYngSBMIOQpKUGPPsc61Bu5W10mg84LxZ7cmvnBHzARKbDoFxVvqqAbj6Tg6N7bSrWSPXMyw==",
      "dev": true,
      "requires": {
        "@babel/compat-data": "^7.12.5",
        "@babel/helper-validator-option": "^7.12.1",
        "browserslist": "^4.14.5",
        "semver": "^5.5.0"
      }
    },
    "@babel/helper-create-class-features-plugin": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.12.1.tgz",
      "integrity": "sha512-hkL++rWeta/OVOBTRJc9a5Azh5mt5WgZUGAKMD8JM141YsE08K//bp1unBBieO6rUKkIPyUE0USQ30jAy3Sk1w==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/helper-member-expression-to-functions": "^7.12.1",
        "@babel/helper-optimise-call-expression": "^7.10.4",
        "@babel/helper-replace-supers": "^7.12.1",
        "@babel/helper-split-export-declaration": "^7.10.4"
      }
    },
    "@babel/helper-create-regexp-features-plugin": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.12.7.tgz",
      "integrity": "sha512-idnutvQPdpbduutvi3JVfEgcVIHooQnhvhx0Nk9isOINOIGYkZea1Pk2JlJRiUnMefrlvr0vkByATBY/mB4vjQ==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.10.4",
        "regexpu-core": "^4.7.1"
      }
    },
    "@babel/helper-define-map": {
      "version": "7.10.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-map/-/helper-define-map-7.10.5.tgz",
      "integrity": "sha512-fMw4kgFB720aQFXSVaXr79pjjcW5puTCM16+rECJ/plGS+zByelE8l9nCpV1GibxTnFVmUuYG9U8wYfQHdzOEQ==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/types": "^7.10.5",
        "lodash": "^4.17.19"
      }
    },
    "@babel/helper-explode-assignable-expression": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.12.1.tgz",
      "integrity": "sha512-dmUwH8XmlrUpVqgtZ737tK88v07l840z9j3OEhCLwKTkjlvKpfqXVIZ0wpK3aeOxspwGrf/5AP5qLx4rO3w5rA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.1"
      }
    },
    "@babel/helper-function-name": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.12.11.tgz",
      "integrity": "sha512-AtQKjtYNolKNi6nNNVLQ27CP6D9oFR6bq/HPYSizlzbp7uC1M59XJe8L+0uXjbIaZaUJF99ruHqVGiKXU/7ybA==",
      "dev": true,
      "requires": {
        "@babel/helper-get-function-arity": "^7.12.10",
        "@babel/template": "^7.12.7",
        "@babel/types": "^7.12.11"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.10.tgz",
      "integrity": "sha512-mm0n5BPjR06wh9mPQaDdXWDoll/j5UpCAPl1x8fS71GHm7HA6Ua2V4ylG1Ju8lvcTOietbPNNPaSilKj+pj+Ag==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.10"
      }
    },
    "@babel/helper-hoist-variables": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.10.4.tgz",
      "integrity": "sha512-wljroF5PgCk2juF69kanHVs6vrLwIPNp6DLD+Lrl3hoQ3PpPPikaDRNFA+0t81NOoMt2DL6WW/mdU8k4k6ZzuA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.10.4"
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.12.7.tgz",
      "integrity": "sha512-DCsuPyeWxeHgh1Dus7APn7iza42i/qXqiFPWyBDdOFtvS581JQePsc1F/nD+fHrcswhLlRc2UpYS1NwERxZhHw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.7"
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.12.5.tgz",
      "integrity": "sha512-SR713Ogqg6++uexFRORf/+nPXMmWIn80TALu0uaFb+iQIUoR7bOC7zBWyzBs5b3tBBJXuyD0cRu1F15GyzjOWA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.5"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.12.1.tgz",
      "integrity": "sha512-QQzehgFAZ2bbISiCpmVGfiGux8YVFXQ0abBic2Envhej22DVXV9nCFaS5hIQbkyo1AdGb+gNME2TSh3hYJVV/w==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.12.1",
        "@babel/helper-replace-supers": "^7.12.1",
        "@babel/helper-simple-access": "^7.12.1",
        "@babel/helper-split-export-declaration": "^7.11.0",
        "@babel/helper-validator-identifier": "^7.10.4",
        "@babel/template": "^7.10.4",
        "@babel/traverse": "^7.12.1",
        "@babel/types": "^7.12.1",
        "lodash": "^4.17.19"
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.12.10.tgz",
      "integrity": "sha512-4tpbU0SrSTjjt65UMWSrUOPZTsgvPgGG4S8QSTNHacKzpS51IVWGDj0yCwyeZND/i+LSN2g/O63jEXEWm49sYQ==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.10"
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.10.4.tgz",
      "integrity": "sha512-O4KCvQA6lLiMU9l2eawBPMf1xPP8xPfB3iEQw150hOVTqj/rfXz0ThTb4HEzqQfs2Bmo5Ay8BzxfzVtBrr9dVg==",
      "dev": true
    },
    "@babel/helper-remap-async-to-generator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.12.1.tgz",
      "integrity": "sha512-9d0KQCRM8clMPcDwo8SevNs+/9a8yWVVmaE80FGJcEP8N1qToREmWEGnBn8BUlJhYRFz6fqxeRL1sl5Ogsed7A==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.10.4",
        "@babel/helper-wrap-function": "^7.10.4",
        "@babel/types": "^7.12.1"
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.12.11.tgz",
      "integrity": "sha512-q+w1cqmhL7R0FNzth/PLLp2N+scXEK/L2AHbXUyydxp828F4FEa5WcVoqui9vFRiHDQErj9Zof8azP32uGVTRA==",
      "dev": true,
      "requires": {
        "@babel/helper-member-expression-to-functions": "^7.12.7",
        "@babel/helper-optimise-call-expression": "^7.12.10",
        "@babel/traverse": "^7.12.10",
        "@babel/types": "^7.12.11"
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.12.1.tgz",
      "integrity": "sha512-OxBp7pMrjVewSSC8fXDFrHrBcJATOOFssZwv16F3/6Xtc138GHybBfPbm9kfiqQHKhYQrlamWILwlDCeyMFEaA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.1"
      }
    },
    "@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.12.1.tgz",
      "integrity": "sha512-Mf5AUuhG1/OCChOJ/HcADmvcHM42WJockombn8ATJG3OnyiSxBK/Mm5x78BQWvmtXZKHgbjdGL2kin/HOLlZGA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.1"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.12.11.tgz",
      "integrity": "sha512-LsIVN8j48gHgwzfocYUSkO/hjYAOJqlpJEc7tGXcIm4cubjVUf8LGW6eWRyxEu7gA25q02p0rQUWoCI33HNS5g==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.11"
      }
    },
    "@babel/helper-validator-identifier": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.12.11.tgz",
      "integrity": "sha512-np/lG3uARFybkoHokJUmf1QfEvRVCPbmQeUQpKow5cQ3xWrV9i3rUHodKDJPQfTVX61qKi+UdYk8kik84n7XOw==",
      "dev": true
    },
    "@babel/helper-validator-option": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.11.tgz",
      "integrity": "sha512-TBFCyj939mFSdeX7U7DDj32WtzYY7fDcalgq8v3fBZMNOJQNn7nOYzMaUCiPxPYfCup69mtIpqlKgMZLvQ8Xhw==",
      "dev": true
    },
    "@babel/helper-wrap-function": {
      "version": "7.12.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.12.3.tgz",
      "integrity": "sha512-Cvb8IuJDln3rs6tzjW3Y8UeelAOdnpB8xtQ4sme2MSZ9wOxrbThporC0y/EtE16VAtoyEfLM404Xr1e0OOp+ow==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/template": "^7.10.4",
        "@babel/traverse": "^7.10.4",
        "@babel/types": "^7.10.4"
      }
    },
    "@babel/helpers": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.12.5.tgz",
      "integrity": "sha512-lgKGMQlKqA8meJqKsW6rUnc4MdUk35Ln0ATDqdM1a/UpARODdI4j5Y5lVfUScnSNkJcdCRAaWkspykNoFg9sJA==",
      "dev": true,
      "requires": {
        "@babel/template": "^7.10.4",
        "@babel/traverse": "^7.12.5",
        "@babel/types": "^7.12.5"
      }
    },
    "@babel/highlight": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.10.4.tgz",
      "integrity": "sha512-i6rgnR/YgPEQzZZnbTHHuZdlE8qyoBNalD6F+q4vAFlcMEcqmkoG+mPqJYJCo63qPf74+Y1UZsl3l6f7/RIkmA==",
      "dev": true,
      "requires": {
        "@babel/helper-validator-identifier": "^7.10.4",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.12.11.tgz",
      "integrity": "sha512-N3UxG+uuF4CMYoNj8AhnbAcJF0PiuJ9KHuy1lQmkYsxTer/MAH9UBNHsBoAX/4s6NvlDD047No8mYVGGzLL4hg==",
      "dev": true
    },
    "@babel/plugin-proposal-async-generator-functions": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.12.12.tgz",
      "integrity": "sha512-nrz9y0a4xmUrRq51bYkWJIO5SBZyG2ys2qinHsN0zHDHVsUaModrkpyWWWXfGqYQmOL3x9sQIcTNN/pBGpo09A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-remap-async-to-generator": "^7.12.1",
        "@babel/plugin-syntax-async-generators": "^7.8.0"
      }
    },
    "@babel/plugin-proposal-class-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.12.1.tgz",
      "integrity": "sha512-cKp3dlQsFsEs5CWKnN7BnSHOd0EOW8EKpEjkoz1pO2E5KzIDNV9Ros1b0CnmbVgAGXJubOYVBOGCT1OmJwOI7w==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-dynamic-import": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.12.1.tgz",
      "integrity": "sha512-a4rhUSZFuq5W8/OO8H7BL5zspjnc1FLd9hlOxIK/f7qG4a0qsqk8uvF/ywgBA8/OmjsapjpvaEOYItfGG1qIvQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-dynamic-import": "^7.8.0"
      }
    },
    "@babel/plugin-proposal-export-namespace-from": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.12.1.tgz",
      "integrity": "sha512-6CThGf0irEkzujYS5LQcjBx8j/4aQGiVv7J9+2f7pGfxqyKh3WnmVJYW3hdrQjyksErMGBPQrCnHfOtna+WLbw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-json-strings": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.12.1.tgz",
      "integrity": "sha512-GoLDUi6U9ZLzlSda2Df++VSqDJg3CG+dR0+iWsv6XRw1rEq+zwt4DirM9yrxW6XWaTpmai1cWJLMfM8qQJf+yw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-json-strings": "^7.8.0"
      }
    },
    "@babel/plugin-proposal-logical-assignment-operators": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.12.1.tgz",
      "integrity": "sha512-k8ZmVv0JU+4gcUGeCDZOGd0lCIamU/sMtIiX3UWnUc5yzgq6YUGyEolNYD+MLYKfSzgECPcqetVcJP9Afe/aCA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.12.1.tgz",
      "integrity": "sha512-nZY0ESiaQDI1y96+jk6VxMOaL4LPo/QDHBqL+SF3/vl6dHkTwHlOI8L4ZwuRBHgakRBw5zsVylel7QPbbGuYgg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0"
      }
    },
    "@babel/plugin-proposal-numeric-separator": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.12.7.tgz",
      "integrity": "sha512-8c+uy0qmnRTeukiGsjLGy6uVs/TFjJchGXUeBqlG4VWYOdJWkhhVPdQ3uHwbmalfJwv2JsV0qffXP4asRfL2SQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-object-rest-spread": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.12.1.tgz",
      "integrity": "sha512-s6SowJIjzlhx8o7lsFx5zmY4At6CTtDvgNQDdPzkBQucle58A6b/TTeEBYtyDgmcXjUTM+vE8YOGHZzzbc/ioA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
        "@babel/plugin-transform-parameters": "^7.12.1"
      }
    },
    "@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.12.1.tgz",
      "integrity": "sha512-hFvIjgprh9mMw5v42sJWLI1lzU5L2sznP805zeT6rySVRA0Y18StRhDqhSxlap0oVgItRsB6WSROp4YnJTJz0g==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.0"
      }
    },
    "@babel/plugin-proposal-optional-chaining": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.12.7.tgz",
      "integrity": "sha512-4ovylXZ0PWmwoOvhU2vhnzVNnm88/Sm9nx7V8BPgMvAzn5zDou3/Awy0EjglyubVHasJj+XCEkr/r1X3P5elCA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1",
        "@babel/plugin-syntax-optional-chaining": "^7.8.0"
      }
    },
    "@babel/plugin-proposal-private-methods": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.12.1.tgz",
      "integrity": "sha512-mwZ1phvH7/NHK6Kf8LP7MYDogGV+DKB1mryFOEwx5EBNQrosvIczzZFTUmWaeujd5xT6G1ELYWUz3CutMhjE1w==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.12.1.tgz",
      "integrity": "sha512-MYq+l+PvHuw/rKUz1at/vb6nCnQ2gmJBNaM62z0OgH7B2W1D9pvkpYtlti9bGtizNIU1K3zm4bZF9F91efVY0w==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-class-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.1.tgz",
      "integrity": "sha512-U40A76x5gTwmESz+qiqssqmeEsKvcSyvtgktrm0uzcARAmM9I1jR221f6Oq+GmHrcD+LvZDag1UTOTe2fL3TeA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-dynamic-import": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
      "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.3"
      }
    },
    "@babel/plugin-syntax-flow": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.12.1.tgz",
      "integrity": "sha512-1lBLLmtxrwpm4VKmtVFselI/P3pX+G63fAtUUt6b2Nzgao77KNDwyuRt90Mj2/9pKobtt68FdvjfqohZjg/FCA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-jsx": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.12.1.tgz",
      "integrity": "sha512-1yRi7yAtB0ETgxdY9ti/p2TivUxJkTdhu/ZbF9MshVGqOx1TdB3b7xCXs49Fupgg50N45KcAsRP/ZqWjs9SRjg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-top-level-await": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.12.1.tgz",
      "integrity": "sha512-i7ooMZFS+a/Om0crxZodrTzNEPJHZrlMVGMTEpFAj6rYY/bKCddB0Dk/YxfPuYXOopuhKk/e1jV6h+WUU9XN3A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-arrow-functions": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.12.1.tgz",
      "integrity": "sha512-5QB50qyN44fzzz4/qxDPQMBCTHgxg3n0xRBLJUmBlLoU/sFvxVWGZF/ZUfMVDQuJUKXaBhbupxIzIfZ6Fwk/0A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-async-to-generator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.12.1.tgz",
      "integrity": "sha512-SDtqoEcarK1DFlRJ1hHRY5HvJUj5kX4qmtpMAm2QnhOlyuMC4TMdCRgW6WXpv93rZeYNeLP22y8Aq2dbcDRM1A==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-remap-async-to-generator": "^7.12.1"
      }
    },
    "@babel/plugin-transform-block-scoped-functions": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.12.1.tgz",
      "integrity": "sha512-5OpxfuYnSgPalRpo8EWGPzIYf0lHBWORCkj5M0oLBwHdlux9Ri36QqGW3/LR13RSVOAoUUMzoPI/jpE4ABcHoA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-block-scoping": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.12.12.tgz",
      "integrity": "sha512-VOEPQ/ExOVqbukuP7BYJtI5ZxxsmegTwzZ04j1aF0dkSypGo9XpDHuOrABsJu+ie+penpSJheDJ11x1BEZNiyQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-classes": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.12.1.tgz",
      "integrity": "sha512-/74xkA7bVdzQTBeSUhLLJgYIcxw/dpEpCdRDiHgPJ3Mv6uC11UhjpOhl72CgqbBCmt1qtssCyB2xnJm1+PFjog==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.10.4",
        "@babel/helper-define-map": "^7.10.4",
        "@babel/helper-function-name": "^7.10.4",
        "@babel/helper-optimise-call-expression": "^7.10.4",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-replace-supers": "^7.12.1",
        "@babel/helper-split-export-declaration": "^7.10.4",
        "globals": "^11.1.0"
      }
    },
    "@babel/plugin-transform-computed-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.12.1.tgz",
      "integrity": "sha512-vVUOYpPWB7BkgUWPo4C44mUQHpTZXakEqFjbv8rQMg7TC6S6ZhGZ3otQcRH6u7+adSlE5i0sp63eMC/XGffrzg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-destructuring": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.12.1.tgz",
      "integrity": "sha512-fRMYFKuzi/rSiYb2uRLiUENJOKq4Gnl+6qOv5f8z0TZXg3llUwUhsNNwrwaT/6dUhJTzNpBr+CUvEWBtfNY1cw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-dotall-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.12.1.tgz",
      "integrity": "sha512-B2pXeRKoLszfEW7J4Hg9LoFaWEbr/kzo3teWHmtFCszjRNa/b40f9mfeqZsIDLLt/FjwQ6pz/Gdlwy85xNckBA==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-duplicate-keys": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.12.1.tgz",
      "integrity": "sha512-iRght0T0HztAb/CazveUpUQrZY+aGKKaWXMJ4uf9YJtqxSUe09j3wteztCUDRHs+SRAL7yMuFqUsLoAKKzgXjw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-exponentiation-operator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.12.1.tgz",
      "integrity": "sha512-7tqwy2bv48q+c1EHbXK0Zx3KXd2RVQp6OC7PbwFNt/dPTAV3Lu5sWtWuAj8owr5wqtWnqHfl2/mJlUmqkChKug==",
      "dev": true,
      "requires": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.10.4",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-flow-strip-types": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.12.10.tgz",
      "integrity": "sha512-0ti12wLTLeUIzu9U7kjqIn4MyOL7+Wibc7avsHhj4o1l5C0ATs8p2IMHrVYjm9t9wzhfEO6S3kxax0Rpdo8LTg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-flow": "^7.12.1"
      }
    },
    "@babel/plugin-transform-for-of": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.12.1.tgz",
      "integrity": "sha512-Zaeq10naAsuHo7heQvyV0ptj4dlZJwZgNAtBYBnu5nNKJoW62m0zKcIEyVECrUKErkUkg6ajMy4ZfnVZciSBhg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-function-name": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.12.1.tgz",
      "integrity": "sha512-JF3UgJUILoFrFMEnOJLJkRHSk6LUSXLmEFsA23aR2O5CSLUxbeUX1IZ1YQ7Sn0aXb601Ncwjx73a+FVqgcljVw==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.10.4",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.12.1.tgz",
      "integrity": "sha512-+PxVGA+2Ag6uGgL0A5f+9rklOnnMccwEBzwYFL3EUaKuiyVnUipyXncFcfjSkbimLrODoqki1U9XxZzTvfN7IQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-member-expression-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.12.1.tgz",
      "integrity": "sha512-1sxePl6z9ad0gFMB9KqmYofk34flq62aqMt9NqliS/7hPEpURUCMbyHXrMPlo282iY7nAvUB1aQd5mg79UD9Jg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-modules-amd": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.12.1.tgz",
      "integrity": "sha512-tDW8hMkzad5oDtzsB70HIQQRBiTKrhfgwC/KkJeGsaNFTdWhKNt/BiE8c5yj19XiGyrxpbkOfH87qkNg1YGlOQ==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-commonjs": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.12.1.tgz",
      "integrity": "sha512-dY789wq6l0uLY8py9c1B48V8mVL5gZh/+PQ5ZPrylPYsnAvnEMjqsUXkuoDVPeVK+0VyGar+D08107LzDQ6pag==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-simple-access": "^7.12.1",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-systemjs": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.12.1.tgz",
      "integrity": "sha512-Hn7cVvOavVh8yvW6fLwveFqSnd7rbQN3zJvoPNyNaQSvgfKmDBO9U1YL9+PCXGRlZD9tNdWTy5ACKqMuzyn32Q==",
      "dev": true,
      "requires": {
        "@babel/helper-hoist-variables": "^7.10.4",
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-validator-identifier": "^7.10.4",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-umd": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.12.1.tgz",
      "integrity": "sha512-aEIubCS0KHKM0zUos5fIoQm+AZUMt1ZvMpqz0/H5qAQ7vWylr9+PLYurT+Ic7ID/bKLd4q8hDovaG3Zch2uz5Q==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.12.1.tgz",
      "integrity": "sha512-tB43uQ62RHcoDp9v2Nsf+dSM8sbNodbEicbQNA53zHz8pWUhsgHSJCGpt7daXxRydjb0KnfmB+ChXOv3oADp1Q==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1"
      }
    },
    "@babel/plugin-transform-new-target": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.12.1.tgz",
      "integrity": "sha512-+eW/VLcUL5L9IvJH7rT1sT0CzkdUTvPrXC2PXTn/7z7tXLBuKvezYbGdxD5WMRoyvyaujOq2fWoKl869heKjhw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-object-super": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.12.1.tgz",
      "integrity": "sha512-AvypiGJH9hsquNUn+RXVcBdeE3KHPZexWRdimhuV59cSoOt5kFBmqlByorAeUlGG2CJWd0U+4ZtNKga/TB0cAw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-replace-supers": "^7.12.1"
      }
    },
    "@babel/plugin-transform-parameters": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.12.1.tgz",
      "integrity": "sha512-xq9C5EQhdPK23ZeCdMxl8bbRnAgHFrw5EOC3KJUsSylZqdkCaFEXxGSBuTSObOpiiHHNyb82es8M1QYgfQGfNg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-property-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.12.1.tgz",
      "integrity": "sha512-6MTCR/mZ1MQS+AwZLplX4cEySjCpnIF26ToWo942nqn8hXSm7McaHQNeGx/pt7suI1TWOWMfa/NgBhiqSnX0cQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-react-jsx": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.12.12.tgz",
      "integrity": "sha512-JDWGuzGNWscYcq8oJVCtSE61a5+XAOos+V0HrxnDieUus4UMnBEosDnY1VJqU5iZ4pA04QY7l0+JvHL1hZEfsw==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.12.10",
        "@babel/helper-module-imports": "^7.12.5",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/plugin-syntax-jsx": "^7.12.1",
        "@babel/types": "^7.12.12"
      }
    },
    "@babel/plugin-transform-regenerator": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.12.1.tgz",
      "integrity": "sha512-gYrHqs5itw6i4PflFX3OdBPMQdPbF4bj2REIUxlMRUFk0/ZOAIpDFuViuxPjUL7YC8UPnf+XG7/utJvqXdPKng==",
      "dev": true,
      "requires": {
        "regenerator-transform": "^0.14.2"
      }
    },
    "@babel/plugin-transform-reserved-words": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.12.1.tgz",
      "integrity": "sha512-pOnUfhyPKvZpVyBHhSBoX8vfA09b7r00Pmm1sH+29ae2hMTKVmSp4Ztsr8KBKjLjx17H0eJqaRC3bR2iThM54A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-shorthand-properties": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.12.1.tgz",
      "integrity": "sha512-GFZS3c/MhX1OusqB1MZ1ct2xRzX5ppQh2JU1h2Pnfk88HtFTM+TWQqJNfwkmxtPQtb/s1tk87oENfXJlx7rSDw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-spread": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.12.1.tgz",
      "integrity": "sha512-vuLp8CP0BE18zVYjsEBZ5xoCecMK6LBMMxYzJnh01rxQRvhNhH1csMMmBfNo5tGpGO+NhdSNW2mzIvBu3K1fng==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1"
      }
    },
    "@babel/plugin-transform-sticky-regex": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.12.7.tgz",
      "integrity": "sha512-VEiqZL5N/QvDbdjfYQBhruN0HYjSPjC4XkeqW4ny/jNtH9gcbgaqBIXYEZCNnESMAGs0/K/R7oFGMhOyu/eIxg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-template-literals": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.12.1.tgz",
      "integrity": "sha512-b4Zx3KHi+taXB1dVRBhVJtEPi9h1THCeKmae2qP0YdUHIFhVjtpqqNfxeVAa1xeHVhAy4SbHxEwx5cltAu5apw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-typeof-symbol": {
      "version": "7.12.10",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.12.10.tgz",
      "integrity": "sha512-JQ6H8Rnsogh//ijxspCjc21YPd3VLVoYtAwv3zQmqAt8YGYUtdo5usNhdl4b9/Vir2kPFZl6n1h0PfUz4hJhaA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-unicode-escapes": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.12.1.tgz",
      "integrity": "sha512-I8gNHJLIc7GdApm7wkVnStWssPNbSRMPtgHdmH3sRM1zopz09UWPS4x5V4n1yz/MIWTVnJ9sp6IkuXdWM4w+2Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-transform-unicode-regex": {
      "version": "7.12.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.12.1.tgz",
      "integrity": "sha512-SqH4ClNngh/zGwHZOOQMTD+e8FGWexILV+ePMyiDJttAWRh5dhDL8rcl5lSgU3Huiq6Zn6pWTMvdPAb21Dwdyg==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.12.1",
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/preset-env": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.12.11.tgz",
      "integrity": "sha512-j8Tb+KKIXKYlDBQyIOy4BLxzv1NUOwlHfZ74rvW+Z0Gp4/cI2IMDPBWAgWceGcE7aep9oL/0K9mlzlMGxA8yNw==",
      "dev": true,
      "requires": {
        "@babel/compat-data": "^7.12.7",
        "@babel/helper-compilation-targets": "^7.12.5",
        "@babel/helper-module-imports": "^7.12.5",
        "@babel/helper-plugin-utils": "^7.10.4",
        "@babel/helper-validator-option": "^7.12.11",
        "@babel/plugin-proposal-async-generator-functions": "^7.12.1",
        "@babel/plugin-proposal-class-properties": "^7.12.1",
        "@babel/plugin-proposal-dynamic-import": "^7.12.1",
        "@babel/plugin-proposal-export-namespace-from": "^7.12.1",
        "@babel/plugin-proposal-json-strings": "^7.12.1",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.12.1",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.12.1",
        "@babel/plugin-proposal-numeric-separator": "^7.12.7",
        "@babel/plugin-proposal-object-rest-spread": "^7.12.1",
        "@babel/plugin-proposal-optional-catch-binding": "^7.12.1",
        "@babel/plugin-proposal-optional-chaining": "^7.12.7",
        "@babel/plugin-proposal-private-methods": "^7.12.1",
        "@babel/plugin-proposal-unicode-property-regex": "^7.12.1",
        "@babel/plugin-syntax-async-generators": "^7.8.0",
        "@babel/plugin-syntax-class-properties": "^7.12.1",
        "@babel/plugin-syntax-dynamic-import": "^7.8.0",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.0",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
        "@babel/plugin-syntax-optional-chaining": "^7.8.0",
        "@babel/plugin-syntax-top-level-await": "^7.12.1",
        "@babel/plugin-transform-arrow-functions": "^7.12.1",
        "@babel/plugin-transform-async-to-generator": "^7.12.1",
        "@babel/plugin-transform-block-scoped-functions": "^7.12.1",
        "@babel/plugin-transform-block-scoping": "^7.12.11",
        "@babel/plugin-transform-classes": "^7.12.1",
        "@babel/plugin-transform-computed-properties": "^7.12.1",
        "@babel/plugin-transform-destructuring": "^7.12.1",
        "@babel/plugin-transform-dotall-regex": "^7.12.1",
        "@babel/plugin-transform-duplicate-keys": "^7.12.1",
        "@babel/plugin-transform-exponentiation-operator": "^7.12.1",
        "@babel/plugin-transform-for-of": "^7.12.1",
        "@babel/plugin-transform-function-name": "^7.12.1",
        "@babel/plugin-transform-literals": "^7.12.1",
        "@babel/plugin-transform-member-expression-literals": "^7.12.1",
        "@babel/plugin-transform-modules-amd": "^7.12.1",
        "@babel/plugin-transform-modules-commonjs": "^7.12.1",
        "@babel/plugin-transform-modules-systemjs": "^7.12.1",
        "@babel/plugin-transform-modules-umd": "^7.12.1",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.12.1",
        "@babel/plugin-transform-new-target": "^7.12.1",
        "@babel/plugin-transform-object-super": "^7.12.1",
        "@babel/plugin-transform-parameters": "^7.12.1",
        "@babel/plugin-transform-property-literals": "^7.12.1",
        "@babel/plugin-transform-regenerator": "^7.12.1",
        "@babel/plugin-transform-reserved-words": "^7.12.1",
        "@babel/plugin-transform-shorthand-properties": "^7.12.1",
        "@babel/plugin-transform-spread": "^7.12.1",
        "@babel/plugin-transform-sticky-regex": "^7.12.7",
        "@babel/plugin-transform-template-literals": "^7.12.1",
        "@babel/plugin-transform-typeof-symbol": "^7.12.10",
        "@babel/plugin-transform-unicode-escapes": "^7.12.1",
        "@babel/plugin-transform-unicode-regex": "^7.12.1",
        "@babel/preset-modules": "^0.1.3",
        "@babel/types": "^7.12.11",
        "core-js-compat": "^3.8.0",
        "semver": "^5.5.0"
      }
    },
    "@babel/preset-modules": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
      "integrity": "sha512-J36NhwnfdzpmH41M1DrnkkgAqhZaqr/NBdPfQ677mLzlaXo+oDiv1deyCDtgAhz8p328otdob0Du7+xgHGZbKg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
        "@babel/plugin-transform-dotall-regex": "^7.4.4",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      }
    },
    "@babel/runtime": {
      "version": "7.12.5",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.12.5.tgz",
      "integrity": "sha512-plcc+hbExy3McchJCEQG3knOsuh3HH+Prx1P6cLIkET/0dLuQDEnrT+s27Axgc9bqfsmNUNHfscgMUdBpC9xfg==",
      "dev": true,
      "requires": {
        "regenerator-runtime": "^0.13.4"
      }
    },
    "@babel/template": {
      "version": "7.12.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.12.7.tgz",
      "integrity": "sha512-GkDzmHS6GV7ZeXfJZ0tLRBhZcMcY0/Lnb+eEbXDBfCAcZCjrZKe6p3J4we/D24O9Y8enxWAg1cWwof59yLh2ow==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.10.4",
        "@babel/parser": "^7.12.7",
        "@babel/types": "^7.12.7"
      }
    },
    "@babel/traverse": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.12.12.tgz",
      "integrity": "sha512-s88i0X0lPy45RrLM8b9mz8RPH5FqO9G9p7ti59cToE44xFm1Q+Pjh5Gq4SXBbtb88X7Uy7pexeqRIQDDMNkL0w==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.12.11",
        "@babel/generator": "^7.12.11",
        "@babel/helper-function-name": "^7.12.11",
        "@babel/helper-split-export-declaration": "^7.12.11",
        "@babel/parser": "^7.12.11",
        "@babel/types": "^7.12.12",
        "debug": "^4.1.0",
        "globals": "^11.1.0",
        "lodash": "^4.17.19"
      }
    },
    "@babel/types": {
      "version": "7.12.12",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.12.12.tgz",
      "integrity": "sha512-lnIX7piTxOH22xE7fDXDbSHg9MM1/6ORnafpJmov5rs0kX5g4BZxeXNJLXsMRiO0U5Rb8/FvMS6xlTnTHvxonQ==",
      "dev": true,
      "requires": {
        "@babel/helper-validator-identifier": "^7.12.11",
        "lodash": "^4.17.19",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@iarna/toml": {
      "version": "2.2.5",
      "resolved": "https://registry.npmjs.org/@iarna/toml/-/toml-2.2.5.tgz",
      "integrity": "sha512-trnsAYxU3xnS1gPHPyU961coFyLkh4gAD/0zQ5mymY4yOZ+CYvsPqUbOFSw0aDM4y0tV7tiFxL/1XfXPNC6IPg==",
      "dev": true
    },
    "@mrmlnc/readdir-enhanced": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@mrmlnc/readdir-enhanced/-/readdir-enhanced-2.2.1.tgz",
      "integrity": "sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==",
      "dev": true,
      "requires": {
        "call-me-maybe": "^1.0.1",
        "glob-to-regexp": "^0.3.0"
      }
    },
    "@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "requires": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "dependencies": {
        "@nodelib/fs.stat": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
          "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
          "dev": true
        }
      }
    },
    "@nodelib/fs.stat": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-1.1.3.tgz",
      "integrity": "sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw==",
      "dev": true
    },
    "@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "requires": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      }
    },
    "@parcel/fs": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@parcel/fs/-/fs-1.11.0.tgz",
      "integrity": "sha512-86RyEqULbbVoeo8OLcv+LQ1Vq2PKBAvWTU9fCgALxuCTbbs5Ppcvll4Vr+Ko1AnmMzja/k++SzNAwJfeQXVlpA==",
      "dev": true,
      "requires": {
        "@parcel/utils": "^1.11.0",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.6.2"
      }
    },
    "@parcel/logger": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@parcel/logger/-/logger-1.11.1.tgz",
      "integrity": "sha512-9NF3M6UVeP2udOBDILuoEHd8VrF4vQqoWHEafymO1pfSoOMfxrSJZw1MfyAAIUN/IFp9qjcpDCUbDZB+ioVevA==",
      "dev": true,
      "requires": {
        "@parcel/workers": "^1.11.0",
        "chalk": "^2.1.0",
        "grapheme-breaker": "^0.3.2",
        "ora": "^2.1.0",
        "strip-ansi": "^4.0.0"
      }
    },
    "@parcel/utils": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@parcel/utils/-/utils-1.11.0.tgz",
      "integrity": "sha512-cA3p4jTlaMeOtAKR/6AadanOPvKeg8VwgnHhOyfi0yClD0TZS/hi9xu12w4EzA/8NtHu0g6o4RDfcNjqN8l1AQ==",
      "dev": true
    },
    "@parcel/watcher": {
      "version": "1.12.1",
      "resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-1.12.1.tgz",
      "integrity": "sha512-od+uCtCxC/KoNQAIE1vWx1YTyKYY+7CTrxBJPRh3cDWw/C0tCtlBMVlrbplscGoEpt6B27KhJDCv82PBxOERNA==",
      "dev": true,
      "requires": {
        "@parcel/utils": "^1.11.0",
        "chokidar": "^2.1.5"
      }
    },
    "@parcel/workers": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/@parcel/workers/-/workers-1.11.0.tgz",
      "integrity": "sha512-USSjRAAQYsZFlv43FUPdD+jEGML5/8oLF0rUzPQTtK4q9kvaXr49F5ZplyLz5lox78cLZ0TxN2bIDQ1xhOkulQ==",
      "dev": true,
      "requires": {
        "@parcel/utils": "^1.11.0",
        "physical-cpu-count": "^2.0.0"
      }
    },
    "@types/minimist": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@types/minimist/-/minimist-1.2.2.tgz",
      "integrity": "sha512-jhuKLIRrhvCPLqwPcx6INqmKeiA5EWrsCOPhrlFSrbrmU4ZMPjj5Ul/oLCMDO98XRUIwVm78xICz4EPCektzeQ==",
      "dev": true
    },
    "@types/normalize-package-data": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.1.tgz",
      "integrity": "sha512-Gj7cI7z+98M282Tqmp2K5EIsoouUEzbBJhQQzDE3jSIRk6r9gsz0oUokqIUR4u1R3dMHo0pDHM7sNOHyhulypw==",
      "dev": true
    },
    "@types/q": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.4.tgz",
      "integrity": "sha512-1HcDas8SEj4z1Wc696tH56G8OlRaH/sqZOynNNB+HF0WOeXPaxTtbYzJY2oEfiUxjSKjhCKr+MvR7dCHcEelug==",
      "dev": true
    },
    "abab": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
      "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q==",
      "dev": true
    },
    "acorn": {
      "version": "7.4.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
      "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
      "dev": true
    },
    "acorn-globals": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
      "dev": true,
      "requires": {
        "acorn": "^6.0.1",
        "acorn-walk": "^6.0.1"
      },
      "dependencies": {
        "acorn": {
          "version": "6.4.2",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
          "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==",
          "dev": true
        }
      }
    },
    "acorn-walk": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
      "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
      "dev": true
    },
    "aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "dev": true,
      "requires": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      }
    },
    "ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "alphanum-sort": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/alphanum-sort/-/alphanum-sort-1.0.2.tgz",
      "integrity": "sha1-l6ERlkmyEa0zaR2fn0hqjsn74KM=",
      "dev": true
    },
    "ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "requires": {
        "color-convert": "^1.9.0"
      }
    },
    "ansi-to-html": {
      "version": "0.6.14",
      "resolved": "https://registry.npmjs.org/ansi-to-html/-/ansi-to-html-0.6.14.tgz",
      "integrity": "sha512-7ZslfB1+EnFSDO5Ju+ue5Y6It19DRnZXWv8jrGHgIlPna5Mh4jz7BV5jCbQneXNFurQcKoolaaAjHtgSBfOIuA==",
      "dev": true,
      "requires": {
        "entities": "^1.1.2"
      }
    },
    "anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dev": true,
      "requires": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      },
      "dependencies": {
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true
    },
    "array-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
      "dev": true
    },
    "array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true
    },
    "array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true
    },
    "arrify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true
    },
    "asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "requires": {
        "safer-buffer": "~2.1.0"
      }
    },
    "asn1.js": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-5.4.1.tgz",
      "integrity": "sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==",
      "dev": true,
      "requires": {
        "bn.js": "^4.0.0",
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "safer-buffer": "^2.1.0"
      },
      "dependencies": {
        "bn.js": {
          "version": "4.11.9",
          "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
          "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
          "dev": true
        }
      }
    },
    "assert": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/assert/-/assert-1.5.0.tgz",
      "integrity": "sha512-EDsgawzwoun2CZkCgtxJbv392v4nbk9XDD06zI+kQYoBM/3RBWLlEyJARDOmhAAosBjWACEkKL6S+lIZtcAubA==",
      "dev": true,
      "requires": {
        "object-assign": "^4.1.1",
        "util": "0.10.3"
      },
      "dependencies": {
        "inherits": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
          "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
          "dev": true
        },
        "util": {
          "version": "0.10.3",
          "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
          "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
          "dev": true,
          "requires": {
            "inherits": "2.0.1"
          }
        }
      }
    },
    "assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true
    },
    "async-each": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
      "dev": true
    },
    "async-limiter": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
      "dev": true
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true
    },
    "aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true
    },
    "aws4": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
      "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
      "dev": true
    },
    "babel-plugin-dynamic-import-node": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
      "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
      "dev": true,
      "requires": {
        "object.assign": "^4.1.0"
      }
    },
    "babel-runtime": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
      "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
      "dev": true,
      "requires": {
        "core-js": "^2.4.0",
        "regenerator-runtime": "^0.11.0"
      },
      "dependencies": {
        "regenerator-runtime": {
          "version": "0.11.1",
          "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
          "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",
          "dev": true
        }
      }
    },
    "babel-types": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
      "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.26.0",
        "esutils": "^2.0.2",
        "lodash": "^4.17.4",
        "to-fast-properties": "^1.0.3"
      },
      "dependencies": {
        "to-fast-properties": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
          "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc=",
          "dev": true
        }
      }
    },
    "babylon-walk": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/babylon-walk/-/babylon-walk-1.0.2.tgz",
      "integrity": "sha1-OxWl3btIKni0zpwByLoYFwLZ1s4=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.11.6",
        "babel-types": "^6.15.0",
        "lodash.clone": "^4.5.0"
      }
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
      "dev": true
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "dev": true
    },
    "bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "requires": {
        "tweetnacl": "^0.14.3"
      }
    },
    "binary-extensions": {
      "version": "1.13.1",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
      "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
      "dev": true
    },
    "bindings": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "dev": true,
      "requires": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "bn.js": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.1.3.tgz",
      "integrity": "sha512-GkTiFpjFtUzU9CbMeJ5iazkCzGL3jrhzerzZIuqLABjbwRaFt33I9tUdSNryIptM+RxDet6OKm2WnLXzW51KsQ==",
      "dev": true
    },
    "boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
      "dev": true
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dev": true,
      "requires": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "brfs": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/brfs/-/brfs-1.6.1.tgz",
      "integrity": "sha512-OfZpABRQQf+Xsmju8XE9bDjs+uU4vLREGolP7bDgcpsI17QREyZ4Bl+2KLxxx1kCgA0fAIhKQBaBYh+PEcCqYQ==",
      "dev": true,
      "requires": {
        "quote-stream": "^1.0.1",
        "resolve": "^1.1.5",
        "static-module": "^2.2.0",
        "through2": "^2.0.0"
      }
    },
    "brorand": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
      "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
      "dev": true
    },
    "browser-process-hrtime": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
      "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
      "dev": true
    },
    "browserify-aes": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
      "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
      "dev": true,
      "requires": {
        "buffer-xor": "^1.0.3",
        "cipher-base": "^1.0.0",
        "create-hash": "^1.1.0",
        "evp_bytestokey": "^1.0.3",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "browserify-cipher": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
      "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
      "dev": true,
      "requires": {
        "browserify-aes": "^1.0.4",
        "browserify-des": "^1.0.0",
        "evp_bytestokey": "^1.0.0"
      }
    },
    "browserify-des": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
      "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
      "dev": true,
      "requires": {
        "cipher-base": "^1.0.1",
        "des.js": "^1.0.0",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "browserify-rsa": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.1.0.tgz",
      "integrity": "sha512-AdEER0Hkspgno2aR97SAf6vi0y0k8NuOpGnVH3O99rcA5Q6sh8QxcngtHuJ6uXwnfAXNM4Gn1Gb7/MV1+Ymbog==",
      "dev": true,
      "requires": {
        "bn.js": "^5.0.0",
        "randombytes": "^2.0.1"
      }
    },
    "browserify-sign": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.2.1.tgz",
      "integrity": "sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==",
      "dev": true,
      "requires": {
        "bn.js": "^5.1.1",
        "browserify-rsa": "^4.0.1",
        "create-hash": "^1.2.0",
        "create-hmac": "^1.1.7",
        "elliptic": "^6.5.3",
        "inherits": "^2.0.4",
        "parse-asn1": "^5.1.5",
        "readable-stream": "^3.6.0",
        "safe-buffer": "^5.2.0"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        },
        "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
          "dev": true
        }
      }
    },
    "browserify-zlib": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
      "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
      "dev": true,
      "requires": {
        "pako": "~1.0.5"
      },
      "dependencies": {
        "pako": {
          "version": "1.0.11",
          "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
          "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
          "dev": true
        }
      }
    },
    "browserslist": {
      "version": "4.16.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.16.1.tgz",
      "integrity": "sha512-UXhDrwqsNcpTYJBTZsbGATDxZbiVDsx6UjpmRUmtnP10pr8wAYr5LgFoEFw9ixriQH2mv/NX2SfGzE/o8GndLA==",
      "dev": true,
      "requires": {
        "caniuse-lite": "^1.0.30001173",
        "colorette": "^1.2.1",
        "electron-to-chromium": "^1.3.634",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.69"
      }
    },
    "buffer": {
      "version": "4.9.2",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
      "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
      "dev": true,
      "requires": {
        "base64-js": "^1.0.2",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "buffer-equal": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-0.0.1.tgz",
      "integrity": "sha1-kbx0sR6kBbyRa8aqkI+q+ltKrEs=",
      "dev": true
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
      "dev": true
    },
    "buffer-xor": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
      "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
      "dev": true
    },
    "builtin-status-codes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
      "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
      "dev": true
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      }
    },
    "call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      }
    },
    "call-me-maybe": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
      "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms=",
      "dev": true
    },
    "caller-callsite": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
      "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
      "dev": true,
      "requires": {
        "callsites": "^2.0.0"
      }
    },
    "caller-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
      "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
      "dev": true,
      "requires": {
        "caller-callsite": "^2.0.0"
      }
    },
    "callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
      "dev": true
    },
    "camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
      "dev": true
    },
    "camelcase-keys": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-7.0.1.tgz",
      "integrity": "sha512-P331lEls98pW8JLyodNWfzuz91BEDVA4VpW2/SwXnyv2K495tq1N777xzDbFgnEigfA7UIY0xa6PwR/H9jijjA==",
      "dev": true,
      "requires": {
        "camelcase": "^6.2.0",
        "map-obj": "^4.1.0",
        "quick-lru": "^5.1.1",
        "type-fest": "^1.2.1"
      }
    },
    "caniuse-api": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/caniuse-api/-/caniuse-api-3.0.0.tgz",
      "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "caniuse-lite": "^1.0.0",
        "lodash.memoize": "^4.1.2",
        "lodash.uniq": "^4.5.0"
      }
    },
    "caniuse-lite": {
      "version": "1.0.30001179",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001179.tgz",
      "integrity": "sha512-blMmO0QQujuUWZKyVrD1msR4WNDAqb/UPO1Sw2WWsQ7deoM5bJiicKnWJ1Y0NS/aGINSnKPIWBMw5luX+NDUCA==",
      "dev": true
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      }
    },
    "chokidar": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
      "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
      "dev": true,
      "requires": {
        "anymatch": "^2.0.0",
        "async-each": "^1.0.1",
        "braces": "^2.3.2",
        "fsevents": "^1.2.7",
        "glob-parent": "^3.1.0",
        "inherits": "^2.0.3",
        "is-binary-path": "^1.0.0",
        "is-glob": "^4.0.0",
        "normalize-path": "^3.0.0",
        "path-is-absolute": "^1.0.0",
        "readdirp": "^2.2.1",
        "upath": "^1.1.1"
      }
    },
    "cipher-base": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
      "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "dev": true
    },
    "cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "dev": true,
      "requires": {
        "restore-cursor": "^2.0.0"
      }
    },
    "cli-spinners": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-1.3.1.tgz",
      "integrity": "sha512-1QL4544moEsDVH9T/l6Cemov/37iv1RtoKf7NJ04A60+4MREXNfx/QvavbH6QoGdsD4N4Mwy49cmaINR/o2mdg==",
      "dev": true
    },
    "clone": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",
      "dev": true
    },
    "coa": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/coa/-/coa-2.0.2.tgz",
      "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
      "dev": true,
      "requires": {
        "@types/q": "^1.5.1",
        "chalk": "^2.4.1",
        "q": "^1.1.2"
      }
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/color/-/color-3.1.3.tgz",
      "integrity": "sha512-xgXAcTHa2HeFCGLE9Xs/R82hujGtu9Jd9x4NW3T34+OMs7VoPsjwzRczKHvTAHeJwWFwX5j15+MgAppE8ztObQ==",
      "dev": true,
      "requires": {
        "color-convert": "^1.9.1",
        "color-string": "^1.5.4"
      }
    },
    "color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "color-string": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.4.tgz",
      "integrity": "sha512-57yF5yt8Xa3czSEW1jfQDE79Idk0+AkN/4KWad6tbdxUmAs3MvjxlWSWD4deYytcRfoZ9nhKyFl1kj5tBvidbw==",
      "dev": true,
      "requires": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "colorette": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.1.tgz",
      "integrity": "sha512-puCDz0CzydiSYOrnXpz/PKd69zRrribezjtE9yd4zvytoRc8+RY/KJPvtPFKZS3E3wP6neGyMe0vOTlHO5L3Pw==",
      "dev": true
    },
    "combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "command-exists": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/command-exists/-/command-exists-1.2.9.tgz",
      "integrity": "sha512-LTQ/SGc+s0Xc0Fu5WaKnR0YiygZkm9eKFvyS+fRsU7/ZWFF8ykFM6Pc9aCVf1+xasOOZpO3BAVgVrKvsqKHV7w==",
      "dev": true
    },
    "commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
      "dev": true
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "console-browserify": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
      "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==",
      "dev": true
    },
    "constants-browserify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
      "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
      "dev": true
    },
    "convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true
    },
    "core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "dev": true
    },
    "core-js-compat": {
      "version": "3.8.3",
      "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.8.3.tgz",
      "integrity": "sha512-1sCb0wBXnBIL16pfFG1Gkvei6UzvKyTNYpiC41yrdjEv0UoJoq9E/abTMzyYJ6JpTkAj15dLjbqifIzEBDVvog==",
      "dev": true,
      "requires": {
        "browserslist": "^4.16.1",
        "semver": "7.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
          "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
          "dev": true
        }
      }
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "cosmiconfig": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
      "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
      "dev": true,
      "requires": {
        "import-fresh": "^2.0.0",
        "is-directory": "^0.3.1",
        "js-yaml": "^3.13.1",
        "parse-json": "^4.0.0"
      }
    },
    "create-ecdh": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.4.tgz",
      "integrity": "sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.0",
        "elliptic": "^6.5.3"
      },
      "dependencies": {
        "bn.js": {
          "version": "4.11.9",
          "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
          "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
          "dev": true
        }
      }
    },
    "create-hash": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
      "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
      "dev": true,
      "requires": {
        "cipher-base": "^1.0.1",
        "inherits": "^2.0.1",
        "md5.js": "^1.3.4",
        "ripemd160": "^2.0.1",
        "sha.js": "^2.4.0"
      }
    },
    "create-hmac": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
      "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
      "dev": true,
      "requires": {
        "cipher-base": "^1.0.3",
        "create-hash": "^1.1.0",
        "inherits": "^2.0.1",
        "ripemd160": "^2.0.0",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      }
    },
    "cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dev": true,
      "requires": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      }
    },
    "crypto-browserify": {
      "version": "3.12.0",
      "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
      "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
      "dev": true,
      "requires": {
        "browserify-cipher": "^1.0.0",
        "browserify-sign": "^4.0.0",
        "create-ecdh": "^4.0.0",
        "create-hash": "^1.1.0",
        "create-hmac": "^1.1.0",
        "diffie-hellman": "^5.0.0",
        "inherits": "^2.0.1",
        "pbkdf2": "^3.0.3",
        "public-encrypt": "^4.0.0",
        "randombytes": "^2.0.0",
        "randomfill": "^1.0.3"
      }
    },
    "css-color-names": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
      "integrity": "sha1-gIrcLnnPhHOAabZGyyDsJ762KeA=",
      "dev": true
    },
    "css-declaration-sorter": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/css-declaration-sorter/-/css-declaration-sorter-4.0.1.tgz",
      "integrity": "sha512-BcxQSKTSEEQUftYpBVnsH4SF05NTuBokb19/sBt6asXGKZ/6VP7PLG1CBCkFDYOnhXhPh0jMhO6xZ71oYHXHBA==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.1",
        "timsort": "^0.3.0"
      }
    },
    "css-modules-loader-core": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/css-modules-loader-core/-/css-modules-loader-core-1.1.0.tgz",
      "integrity": "sha1-WQhmgpShvs0mGuCkziGwtVHyHRY=",
      "dev": true,
      "requires": {
        "icss-replace-symbols": "1.1.0",
        "postcss": "6.0.1",
        "postcss-modules-extract-imports": "1.1.0",
        "postcss-modules-local-by-default": "1.2.0",
        "postcss-modules-scope": "1.1.0",
        "postcss-modules-values": "1.3.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "^2.2.1",
            "escape-string-regexp": "^1.0.2",
            "has-ansi": "^2.0.0",
            "strip-ansi": "^3.0.0",
            "supports-color": "^2.0.0"
          },
          "dependencies": {
            "supports-color": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
              "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
              "dev": true
            }
          }
        },
        "has-flag": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-1.0.0.tgz",
          "integrity": "sha1-nZ55MWXOAXoA8AQYxD+UKnsdEfo=",
          "dev": true
        },
        "postcss": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.1.tgz",
          "integrity": "sha1-AA29H47vIXqjaLmiEsX8QLKo8/I=",
          "dev": true,
          "requires": {
            "chalk": "^1.1.3",
            "source-map": "^0.5.6",
            "supports-color": "^3.2.3"
          }
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "supports-color": {
          "version": "3.2.3",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-3.2.3.tgz",
          "integrity": "sha1-ZawFBLOVQXHYpklGsq48u4pfVPY=",
          "dev": true,
          "requires": {
            "has-flag": "^1.0.0"
          }
        }
      }
    },
    "css-select": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
      "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
      "dev": true,
      "requires": {
        "boolbase": "^1.0.0",
        "css-what": "^3.2.1",
        "domutils": "^1.7.0",
        "nth-check": "^1.0.2"
      }
    },
    "css-select-base-adapter": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
      "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w==",
      "dev": true
    },
    "css-selector-tokenizer": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/css-selector-tokenizer/-/css-selector-tokenizer-0.7.3.tgz",
      "integrity": "sha512-jWQv3oCEL5kMErj4wRnK/OPoBi0D+P1FR2cDCKYPaMeD2eW3/mttav8HT4hT1CKopiJI/psEULjkClhvJo4Lvg==",
      "dev": true,
      "requires": {
        "cssesc": "^3.0.0",
        "fastparse": "^1.1.2"
      }
    },
    "css-tree": {
      "version": "1.0.0-alpha.37",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
      "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
      "dev": true,
      "requires": {
        "mdn-data": "2.0.4",
        "source-map": "^0.6.1"
      }
    },
    "css-what": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.4.2.tgz",
      "integrity": "sha512-ACUm3L0/jiZTqfzRM3Hi9Q8eZqd6IK37mMWPLz9PJxkLWllYeRf+EHUSHYEtFop2Eqytaq1FizFVh7XfBnXCDQ==",
      "dev": true
    },
    "cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true
    },
    "cssnano": {
      "version": "4.1.10",
      "resolved": "https://registry.npmjs.org/cssnano/-/cssnano-4.1.10.tgz",
      "integrity": "sha512-5wny+F6H4/8RgNlaqab4ktc3e0/blKutmq8yNlBFXA//nSFFAqAngjNVRzUvCgYROULmZZUoosL/KSoZo5aUaQ==",
      "dev": true,
      "requires": {
        "cosmiconfig": "^5.0.0",
        "cssnano-preset-default": "^4.0.7",
        "is-resolvable": "^1.0.0",
        "postcss": "^7.0.0"
      }
    },
    "cssnano-preset-default": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/cssnano-preset-default/-/cssnano-preset-default-4.0.7.tgz",
      "integrity": "sha512-x0YHHx2h6p0fCl1zY9L9roD7rnlltugGu7zXSKQx6k2rYw0Hi3IqxcoAGF7u9Q5w1nt7vK0ulxV8Lo+EvllGsA==",
      "dev": true,
      "requires": {
        "css-declaration-sorter": "^4.0.1",
        "cssnano-util-raw-cache": "^4.0.1",
        "postcss": "^7.0.0",
        "postcss-calc": "^7.0.1",
        "postcss-colormin": "^4.0.3",
        "postcss-convert-values": "^4.0.1",
        "postcss-discard-comments": "^4.0.2",
        "postcss-discard-duplicates": "^4.0.2",
        "postcss-discard-empty": "^4.0.1",
        "postcss-discard-overridden": "^4.0.1",
        "postcss-merge-longhand": "^4.0.11",
        "postcss-merge-rules": "^4.0.3",
        "postcss-minify-font-values": "^4.0.2",
        "postcss-minify-gradients": "^4.0.2",
        "postcss-minify-params": "^4.0.2",
        "postcss-minify-selectors": "^4.0.2",
        "postcss-normalize-charset": "^4.0.1",
        "postcss-normalize-display-values": "^4.0.2",
        "postcss-normalize-positions": "^4.0.2",
        "postcss-normalize-repeat-style": "^4.0.2",
        "postcss-normalize-string": "^4.0.2",
        "postcss-normalize-timing-functions": "^4.0.2",
        "postcss-normalize-unicode": "^4.0.1",
        "postcss-normalize-url": "^4.0.1",
        "postcss-normalize-whitespace": "^4.0.2",
        "postcss-ordered-values": "^4.1.2",
        "postcss-reduce-initial": "^4.0.3",
        "postcss-reduce-transforms": "^4.0.2",
        "postcss-svgo": "^4.0.2",
        "postcss-unique-selectors": "^4.0.1"
      }
    },
    "cssnano-util-get-arguments": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/cssnano-util-get-arguments/-/cssnano-util-get-arguments-4.0.0.tgz",
      "integrity": "sha1-7ToIKZ8h11dBsg87gfGU7UnMFQ8=",
      "dev": true
    },
    "cssnano-util-get-match": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/cssnano-util-get-match/-/cssnano-util-get-match-4.0.0.tgz",
      "integrity": "sha1-wOTKB/U4a7F+xeUiULT1lhNlFW0=",
      "dev": true
    },
    "cssnano-util-raw-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/cssnano-util-raw-cache/-/cssnano-util-raw-cache-4.0.1.tgz",
      "integrity": "sha512-qLuYtWK2b2Dy55I8ZX3ky1Z16WYsx544Q0UWViebptpwn/xDBmog2TLg4f+DBMg1rJ6JDWtn96WHbOKDWt1WQA==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "cssnano-util-same-parent": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/cssnano-util-same-parent/-/cssnano-util-same-parent-4.0.1.tgz",
      "integrity": "sha512-WcKx5OY+KoSIAxBW6UBBRay1U6vkYheCdjyVNDm85zt5K9mHoGOfsOsqIszfAqrQQFIIKgjh2+FDgIj/zsl21Q==",
      "dev": true
    },
    "csso": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/csso/-/csso-4.2.0.tgz",
      "integrity": "sha512-wvlcdIbf6pwKEk7vHj8/Bkc0B4ylXZruLvOgs9doS5eOsOpuodOV2zJChSpkp+pRpYQLQMeF04nr3Z68Sta9jA==",
      "dev": true,
      "requires": {
        "css-tree": "^1.1.2"
      },
      "dependencies": {
        "css-tree": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.1.2.tgz",
          "integrity": "sha512-wCoWush5Aeo48GLhfHPbmvZs59Z+M7k5+B1xDnXbdWNcEF423DoFdqSWE0PM5aNk5nI5cp1q7ms36zGApY/sKQ==",
          "dev": true,
          "requires": {
            "mdn-data": "2.0.14",
            "source-map": "^0.6.1"
          }
        },
        "mdn-data": {
          "version": "2.0.14",
          "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.14.tgz",
          "integrity": "sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow==",
          "dev": true
        }
      }
    },
    "cssom": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
      "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
      "dev": true
    },
    "cssstyle": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
      "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
      "dev": true,
      "requires": {
        "cssom": "0.3.x"
      }
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "data-urls": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
      "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "whatwg-mimetype": "^2.2.0",
        "whatwg-url": "^7.0.0"
      }
    },
    "deasync": {
      "version": "0.1.21",
      "resolved": "https://registry.npmjs.org/deasync/-/deasync-0.1.21.tgz",
      "integrity": "sha512-kUmM8Y+PZpMpQ+B4AuOW9k2Pfx/mSupJtxOsLzmnHY2WqZUYRFccFn2RhzPAqt3Xb+sorK/badW2D4zNzqZz5w==",
      "dev": true,
      "requires": {
        "bindings": "^1.5.0",
        "node-addon-api": "^1.7.1"
      }
    },
    "debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dev": true,
      "requires": {
        "ms": "2.1.2"
      }
    },
    "decamelize": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-5.0.1.tgz",
      "integrity": "sha512-VfxadyCECXgQlkoEAjeghAr5gY3Hf+IKjKb+X8tGVDtveCjN+USwprd2q3QXBR9T1+x2DG0XZF5/w+7HAtSaXA==",
      "dev": true
    },
    "decamelize-keys": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/decamelize-keys/-/decamelize-keys-1.1.0.tgz",
      "integrity": "sha1-0XGoeTMlKAfrPLYdwcFEXQeN8tk=",
      "dev": true,
      "requires": {
        "decamelize": "^1.1.0",
        "map-obj": "^1.0.0"
      },
      "dependencies": {
        "decamelize": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
          "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
          "dev": true
        },
        "map-obj": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
          "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
          "dev": true
        }
      }
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dev": true,
      "requires": {
        "clone": "^1.0.2"
      },
      "dependencies": {
        "clone": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
          "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
          "dev": true
        }
      }
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "del": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/del/-/del-6.0.0.tgz",
      "integrity": "sha512-1shh9DQ23L16oXSZKB2JxpL7iMy2E0S9d517ptA1P8iw0alkPtQcrKH7ru31rYtKwF499HkTu+DRzq3TCKDFRQ==",
      "dev": true,
      "requires": {
        "globby": "^11.0.1",
        "graceful-fs": "^4.2.4",
        "is-glob": "^4.0.1",
        "is-path-cwd": "^2.2.0",
        "is-path-inside": "^3.0.2",
        "p-map": "^4.0.0",
        "rimraf": "^3.0.2",
        "slash": "^3.0.0"
      },
      "dependencies": {
        "rimraf": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
          "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
          "dev": true,
          "requires": {
            "glob": "^7.1.3"
          }
        }
      }
    },
    "del-cli": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/del-cli/-/del-cli-4.0.1.tgz",
      "integrity": "sha512-KtR/6cBfZkGDAP2NA7z+bP4p1OMob3wjN9mq13+SWvExx6jT9gFWfLgXEeX8J2B47OKeNCq9yTONmtryQ+m+6g==",
      "dev": true,
      "requires": {
        "del": "^6.0.0",
        "meow": "^10.1.0"
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
      "dev": true
    },
    "des.js": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
      "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0"
      }
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
      "dev": true
    },
    "diffie-hellman": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
      "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.0",
        "miller-rabin": "^4.0.0",
        "randombytes": "^2.0.0"
      },
      "dependencies": {
        "bn.js": {
          "version": "4.11.9",
          "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
          "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
          "dev": true
        }
      }
    },
    "dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "requires": {
        "path-type": "^4.0.0"
      }
    },
    "dom-serializer": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
      "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
      "dev": true,
      "requires": {
        "domelementtype": "^2.0.1",
        "entities": "^2.0.0"
      },
      "dependencies": {
        "domelementtype": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.1.0.tgz",
          "integrity": "sha512-LsTgx/L5VpD+Q8lmsXSHW2WpA+eBlZ9HPf3erD1IoPF00/3JKHZ3BknUVA2QGDNu69ZNmyFmCWBSO45XjYKC5w==",
          "dev": true
        },
        "entities": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/entities/-/entities-2.1.0.tgz",
          "integrity": "sha512-hCx1oky9PFrJ611mf0ifBLBRW8lUUVRlFolb5gWRfIELabBlbp9xZvrqZLZAs+NxFnbfQoeGd8wDkygjg7U85w==",
          "dev": true
        }
      }
    },
    "domain-browser": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
      "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
      "dev": true
    },
    "domelementtype": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
      "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w==",
      "dev": true
    },
    "domexception": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
      "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
      "dev": true,
      "requires": {
        "webidl-conversions": "^4.0.2"
      }
    },
    "domhandler": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
      "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
      "dev": true,
      "requires": {
        "domelementtype": "1"
      }
    },
    "domutils": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
      "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
      "dev": true,
      "requires": {
        "dom-serializer": "0",
        "domelementtype": "1"
      }
    },
    "dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "dev": true,
      "requires": {
        "is-obj": "^2.0.0"
      }
    },
    "dotenv": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-5.0.1.tgz",
      "integrity": "sha512-4As8uPrjfwb7VXC+WnLCbXK7y+Ueb2B3zgNCePYfhxS1PYeaO1YTeplffTEcbfLhvFNGLAz90VvJs9yomG7bow==",
      "dev": true
    },
    "dotenv-expand": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-5.1.0.tgz",
      "integrity": "sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA==",
      "dev": true
    },
    "duplexer2": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz",
      "integrity": "sha1-ixLauHjA1p4+eJEFFmKjL8a93ME=",
      "dev": true,
      "requires": {
        "readable-stream": "^2.0.2"
      }
    },
    "ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "requires": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
      "dev": true
    },
    "electron-to-chromium": {
      "version": "1.3.642",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.642.tgz",
      "integrity": "sha512-cev+jOrz/Zm1i+Yh334Hed6lQVOkkemk2wRozfMF4MtTR7pxf3r3L5Rbd7uX1zMcEqVJ7alJBnJL7+JffkC6FQ==",
      "dev": true
    },
    "elliptic": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.3.tgz",
      "integrity": "sha512-IMqzv5wNQf+E6aHeIqATs0tOLeOTwj1QKbRcS3jBbYkl5oLAserA8yJTT7/VyHUYG91PRmPyeQDObKLPpeS4dw==",
      "dev": true,
      "requires": {
        "bn.js": "^4.4.0",
        "brorand": "^1.0.1",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.0",
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.0"
      },
      "dependencies": {
        "bn.js": {
          "version": "4.11.9",
          "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
          "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
          "dev": true
        }
      }
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
      "dev": true
    },
    "entities": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
      "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w==",
      "dev": true
    },
    "envinfo": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.7.3.tgz",
      "integrity": "sha512-46+j5QxbPWza0PB1i15nZx0xQ4I/EfQxg9J8Had3b408SV63nEtor2e+oiY63amTo9KTuh2a3XLObNwduxYwwA==",
      "dev": true
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "es-abstract": {
      "version": "1.18.0-next.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.2.tgz",
      "integrity": "sha512-Ih4ZMFHEtZupnUh6497zEL4y2+w8+1ljnCyaTa+adcoafI1GOvMwFlDjBLfWR7y9VLfrjRJe9ocuHY1PSR9jjw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1",
        "is-callable": "^1.2.2",
        "is-negative-zero": "^2.0.1",
        "is-regex": "^1.1.1",
        "object-inspect": "^1.9.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.2",
        "string.prototype.trimend": "^1.0.3",
        "string.prototype.trimstart": "^1.0.3"
      },
      "dependencies": {
        "object-inspect": {
          "version": "1.9.0",
          "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
          "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
          "dev": true
        }
      }
    },
    "es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "requires": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      }
    },
    "escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
      "dev": true
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
      "dev": true
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true
    },
    "escodegen": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.9.1.tgz",
      "integrity": "sha512-6hTjO1NAWkHnDk3OqQ4YrCuwwmGHL9S3nPlzBOUG/R44rda3wLNrfvQ5fkSGjyhHFKM7ALPKcKGrwvCLe0lC7Q==",
      "dev": true,
      "requires": {
        "esprima": "^3.1.3",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1",
        "source-map": "~0.6.1"
      }
    },
    "esprima": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-3.1.3.tgz",
      "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
      "dev": true
    },
    "estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
      "dev": true
    },
    "eventemitter3": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
      "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw=="
    },
    "events": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
      "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg==",
      "dev": true
    },
    "evp_bytestokey": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
      "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
      "dev": true,
      "requires": {
        "md5.js": "^1.3.4",
        "safe-buffer": "^5.1.1"
      }
    },
    "expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "requires": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "requires": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "requires": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true
    },
    "falafel": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/falafel/-/falafel-2.2.4.tgz",
      "integrity": "sha512-0HXjo8XASWRmsS0X1EkhwEMZaD3Qvp7FfURwjLKjG1ghfRm/MGZl2r4cWUTv41KdNghTw4OUMmVtdGQp3+H+uQ==",
      "dev": true,
      "requires": {
        "acorn": "^7.1.1",
        "foreach": "^2.0.5",
        "isarray": "^2.0.1",
        "object-keys": "^1.0.6"
      },
      "dependencies": {
        "isarray": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
          "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
          "dev": true
        }
      }
    },
    "fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "fast-glob": {
      "version": "2.2.7",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-2.2.7.tgz",
      "integrity": "sha512-g1KuQwHOZAmOZMuBtHdxDtju+T2RT8jgCC9aANsbpdiDDTSnjgfuVsIBNKbUeJI3oKMRExcfNDtJl4OhbffMsw==",
      "dev": true,
      "requires": {
        "@mrmlnc/readdir-enhanced": "^2.2.1",
        "@nodelib/fs.stat": "^1.1.2",
        "glob-parent": "^3.1.0",
        "is-glob": "^4.0.0",
        "merge2": "^1.2.3",
        "micromatch": "^3.1.10"
      }
    },
    "fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fastparse": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.2.tgz",
      "integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
      "dev": true
    },
    "fastq": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
      "integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
      "dev": true,
      "requires": {
        "reusify": "^1.0.4"
      }
    },
    "file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "dev": true
    },
    "filesize": {
      "version": "3.6.1",
      "resolved": "https://registry.npmjs.org/filesize/-/filesize-3.6.1.tgz",
      "integrity": "sha512-7KjR1vv6qnicaPMi1iiTcI85CyYwRO/PSFCu6SvqL8jN2Wjt/NIYQTFtFs7fSDCYOstUkEWIQGFUg5YZQfjlcg==",
      "dev": true
    },
    "fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dev": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "requires": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      }
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true
    },
    "foreach": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/foreach/-/foreach-2.0.5.tgz",
      "integrity": "sha1-C+4AUBiusmDQo6865ljdATbsG5k=",
      "dev": true
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true
    },
    "form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      }
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
      "dev": true
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "fsevents": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
      "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
      "dev": true,
      "optional": true,
      "requires": {
        "bindings": "^1.5.0",
        "nan": "^2.12.1"
      }
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true
    },
    "get-intrinsic": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.0.2.tgz",
      "integrity": "sha512-aeX0vrFm21ILl3+JpFFRNe9aUvp6VFZb2/CTbgLb8j75kOhvoNYjt9d8KA/tJG4gSo8nzEDedRl0h7vDmBYRVg==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "get-port": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/get-port/-/get-port-3.2.0.tgz",
      "integrity": "sha1-3Xzn3hh8Bsi/NTeWrHHgmfCYDrw=",
      "dev": true
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dev": true,
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
      "dev": true,
      "requires": {
        "is-glob": "^3.1.0",
        "path-dirname": "^1.0.0"
      },
      "dependencies": {
        "is-glob": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
          "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
          "dev": true,
          "requires": {
            "is-extglob": "^2.1.0"
          }
        }
      }
    },
    "glob-to-regexp": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
      "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs=",
      "dev": true
    },
    "globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true
    },
    "globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "requires": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "dependencies": {
        "@nodelib/fs.stat": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
          "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
          "dev": true
        },
        "braces": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
          "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
          "dev": true,
          "requires": {
            "fill-range": "^7.0.1"
          }
        },
        "fast-glob": {
          "version": "3.2.11",
          "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.11.tgz",
          "integrity": "sha512-xrO3+1bxSo3ZVHAnqzyuewYT6aMFHRAd4Kcs92MAonjwQZLsK9d0SF1IyQ3k5PoirxTW0Oe/RqFgMQ6TcNE5Ew==",
          "dev": true,
          "requires": {
            "@nodelib/fs.stat": "^2.0.2",
            "@nodelib/fs.walk": "^1.2.3",
            "glob-parent": "^5.1.2",
            "merge2": "^1.3.0",
            "micromatch": "^4.0.4"
          }
        },
        "fill-range": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
          "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
          "dev": true,
          "requires": {
            "to-regex-range": "^5.0.1"
          }
        },
        "glob-parent": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
          "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
          "dev": true,
          "requires": {
            "is-glob": "^4.0.1"
          }
        },
        "is-number": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
          "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
          "dev": true
        },
        "micromatch": {
          "version": "4.0.4",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
          "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
          "dev": true,
          "requires": {
            "braces": "^3.0.1",
            "picomatch": "^2.2.3"
          }
        },
        "to-regex-range": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
          "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
          "dev": true,
          "requires": {
            "is-number": "^7.0.0"
          }
        }
      }
    },
    "graceful-fs": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
      "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==",
      "dev": true
    },
    "grapheme-breaker": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/grapheme-breaker/-/grapheme-breaker-0.3.2.tgz",
      "integrity": "sha1-W55reMODJFLSuiuxy4MPlidkEKw=",
      "dev": true,
      "requires": {
        "brfs": "^1.2.0",
        "unicode-trie": "^0.3.1"
      }
    },
    "har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true
    },
    "har-validator": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
      "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
      "dev": true,
      "requires": {
        "ajv": "^6.12.3",
        "har-schema": "^2.0.0"
      }
    },
    "hard-rejection": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/hard-rejection/-/hard-rejection-2.1.0.tgz",
      "integrity": "sha512-VIZB+ibDhx7ObhAe7OVtoEbuP4h/MuOTHJ+J8h/eBXotJYl0fBgR72xDFCKgIh22OJZIOVNxBMWuhAr10r8HdA==",
      "dev": true
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-ansi": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
      "dev": true,
      "requires": {
        "ansi-regex": "^2.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        }
      }
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true
    },
    "has-symbols": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
      "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
      "dev": true
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "hash-base": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
      "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.4",
        "readable-stream": "^3.6.0",
        "safe-buffer": "^5.2.0"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        },
        "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
          "dev": true
        }
      }
    },
    "hash.js": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
      "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.3",
        "minimalistic-assert": "^1.0.1"
      }
    },
    "hex-color-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
      "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ==",
      "dev": true
    },
    "hmac-drbg": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
      "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
      "dev": true,
      "requires": {
        "hash.js": "^1.0.3",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    },
    "hosted-git-info": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.1.0.tgz",
      "integrity": "sha512-kyCuEOWjJqZuDbRHzL8V93NzQhwIB71oFWSyzVo+KPZI+pnQPPxucdkrOZvkLRnrf5URsQM+IJ09Dw29cRALIA==",
      "dev": true,
      "requires": {
        "lru-cache": "^6.0.0"
      }
    },
    "hsl-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/hsl-regex/-/hsl-regex-1.0.0.tgz",
      "integrity": "sha1-1JMwx4ntgZ4nakwNJy3/owsY/m4=",
      "dev": true
    },
    "hsla-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/hsla-regex/-/hsla-regex-1.0.0.tgz",
      "integrity": "sha1-wc56MWjIxmFAM6S194d/OyJfnDg=",
      "dev": true
    },
    "html-comment-regex": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
      "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ==",
      "dev": true
    },
    "html-encoding-sniffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
      "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
      "dev": true,
      "requires": {
        "whatwg-encoding": "^1.0.1"
      }
    },
    "html-tags": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/html-tags/-/html-tags-1.2.0.tgz",
      "integrity": "sha1-x43mW1Zjqll5id0rerSSANfk25g=",
      "dev": true
    },
    "htmlnano": {
      "version": "0.2.8",
      "resolved": "https://registry.npmjs.org/htmlnano/-/htmlnano-0.2.8.tgz",
      "integrity": "sha512-q5gbo4SIDAE5sfJ5V0UD6uu+n1dcO/Mpr0B6SlDlJBoV7xKPne4uG4UwrT8vUWjdjIPJl95TY8EDuEbBW2TG0A==",
      "dev": true,
      "requires": {
        "cssnano": "^4.1.10",
        "posthtml": "^0.13.4",
        "posthtml-render": "^1.3.0",
        "purgecss": "^2.3.0",
        "relateurl": "^0.2.7",
        "srcset": "^3.0.0",
        "svgo": "^1.3.2",
        "terser": "^4.8.0",
        "timsort": "^0.3.0",
        "uncss": "^0.17.3"
      },
      "dependencies": {
        "posthtml": {
          "version": "0.13.4",
          "resolved": "https://registry.npmjs.org/posthtml/-/posthtml-0.13.4.tgz",
          "integrity": "sha512-i2oTo/+dwXGC6zaAQSF6WZEQSbEqu10hsvg01DWzGAfZmy31Iiy9ktPh9nnXDfZiYytjxTIvxoK4TI0uk4QWpw==",
          "dev": true,
          "requires": {
            "posthtml-parser": "^0.5.0",
            "posthtml-render": "^1.2.3"
          }
        },
        "posthtml-parser": {
          "version": "0.5.3",
          "resolved": "https://registry.npmjs.org/posthtml-parser/-/posthtml-parser-0.5.3.tgz",
          "integrity": "sha512-uHosRn0y+1wbnlYKrqMjBPoo/kK5LPYImLtiETszNFYfFwAD3cQdD1R2E13Mh5icBxkHj+yKtlIHozCsmVWD/Q==",
          "dev": true,
          "requires": {
            "htmlparser2": "^3.9.2"
          }
        },
        "terser": {
          "version": "4.8.0",
          "resolved": "https://registry.npmjs.org/terser/-/terser-4.8.0.tgz",
          "integrity": "sha512-EAPipTNeWsb/3wLPeup1tVPaXfIaU68xMnVdPafIL1TV05OhASArYyIfFvnvJCNrR2NIOvDVNNTFRa+Re2MWyw==",
          "dev": true,
          "requires": {
            "commander": "^2.20.0",
            "source-map": "~0.6.1",
            "source-map-support": "~0.5.12"
          }
        }
      }
    },
    "htmlparser2": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
      "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
      "dev": true,
      "requires": {
        "domelementtype": "^1.3.1",
        "domhandler": "^2.3.0",
        "domutils": "^1.5.1",
        "entities": "^1.1.1",
        "inherits": "^2.0.1",
        "readable-stream": "^3.1.1"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        }
      }
    },
    "http-errors": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.3.tgz",
      "integrity": "sha512-ZTTX0MWrsQ2ZAhA1cejAwDLycFsd7I7nVtnkT3Ol0aqodaKW+0CTZDQ1uBv5whptCnc8e8HeRRJxRs0kmm/Qfw==",
      "dev": true,
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.4",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      }
    },
    "http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      }
    },
    "https-browserify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
      "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
      "dev": true
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "icss-replace-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/icss-replace-symbols/-/icss-replace-symbols-1.1.0.tgz",
      "integrity": "sha1-Bupvg2ead0njhs/h/oEq5dsiPe0=",
      "dev": true
    },
    "ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "dev": true
    },
    "ignore": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.0.tgz",
      "integrity": "sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==",
      "dev": true
    },
    "import-fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
      "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
      "dev": true,
      "requires": {
        "caller-path": "^2.0.0",
        "resolve-from": "^3.0.0"
      }
    },
    "indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true
    },
    "indexes-of": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/indexes-of/-/indexes-of-1.0.1.tgz",
      "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc=",
      "dev": true
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true
    },
    "is-absolute-url": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-2.1.0.tgz",
      "integrity": "sha1-UFMN+4T8yap9vnhS6Do3uTufKqY=",
      "dev": true
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "is-binary-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
      "dev": true,
      "requires": {
        "binary-extensions": "^1.0.0"
      }
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true
    },
    "is-callable": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.2.tgz",
      "integrity": "sha512-dnMqspv5nU3LoewK2N/y7KLtxtakvTuaCsU9FU50/QDmdbHNy/4/JuRtMHqRU22o3q+W89YQndQEeCVwK+3qrA==",
      "dev": true
    },
    "is-color-stop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-color-stop/-/is-color-stop-1.1.0.tgz",
      "integrity": "sha1-z/9HGu5N1cnhWFmPvhKWe1za00U=",
      "dev": true,
      "requires": {
        "css-color-names": "^0.0.4",
        "hex-color-regex": "^1.1.0",
        "hsl-regex": "^1.0.0",
        "hsla-regex": "^1.0.0",
        "rgb-regex": "^1.0.1",
        "rgba-regex": "^1.0.0"
      }
    },
    "is-core-module": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz",
      "integrity": "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==",
      "dev": true,
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-date-object": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
      "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
      "dev": true
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "requires": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
          "dev": true
        }
      }
    },
    "is-directory": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
      "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE=",
      "dev": true
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-html": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-html/-/is-html-1.1.0.tgz",
      "integrity": "sha1-4E8cGNOUhRETlvmgJz6rUa8hhGQ=",
      "dev": true,
      "requires": {
        "html-tags": "^1.0.0"
      }
    },
    "is-negative-zero": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.1.tgz",
      "integrity": "sha512-2z6JzQvZRa9A2Y7xC6dQQm4FSTSTNWjKIYYTt4246eMTJmIo0Q+ZyOsU66X8lxK1AbB92dFeglPLrhwpeRKO6w==",
      "dev": true
    },
    "is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
      "dev": true
    },
    "is-path-cwd": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
      "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
      "dev": true
    },
    "is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true
    },
    "is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "is-regex": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
      "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.1"
      }
    },
    "is-resolvable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-resolvable/-/is-resolvable-1.1.0.tgz",
      "integrity": "sha512-qgDYXFSR5WvEfuS5dMj6oTMEbrrSaM0CrFk2Yiq/gXnBvD9pMa2jGXxyhGLfvhZpuMZe18CJpFxAt3CRs42NMg==",
      "dev": true
    },
    "is-svg": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-3.0.0.tgz",
      "integrity": "sha512-gi4iHK53LR2ujhLVVj+37Ykh9GLqYHX6JOVXbLAucaG/Cqw9xwdFOjDM2qeifLs1sF1npXXFvDu0r5HNgCMrzQ==",
      "dev": true,
      "requires": {
        "html-comment-regex": "^1.1.0"
      }
    },
    "is-symbol": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
      "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.1"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "is-url": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz",
      "integrity": "sha512-ITvGim8FhRiYe4IQ5uHSkj7pVaPDrCTkNd3yq3cV7iZAcJdHTUMPMEHcqSOy9xZ9qFenQCvi+2wjH9a1nXqHww==",
      "dev": true
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true
    },
    "is-wsl": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
      "dev": true
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "dependencies": {
        "esprima": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
          "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
          "dev": true
        }
      }
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "jsdom": {
      "version": "14.1.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-14.1.0.tgz",
      "integrity": "sha512-O901mfJSuTdwU2w3Sn+74T+RnDVP+FuV5fH8tcPWyqrseRAb0s5xOtPgCFiPOtLcyK7CLIJwPyD83ZqQWvA5ng==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "acorn": "^6.0.4",
        "acorn-globals": "^4.3.0",
        "array-equal": "^1.0.0",
        "cssom": "^0.3.4",
        "cssstyle": "^1.1.1",
        "data-urls": "^1.1.0",
        "domexception": "^1.0.1",
        "escodegen": "^1.11.0",
        "html-encoding-sniffer": "^1.0.2",
        "nwsapi": "^2.1.3",
        "parse5": "5.1.0",
        "pn": "^1.1.0",
        "request": "^2.88.0",
        "request-promise-native": "^1.0.5",
        "saxes": "^3.1.9",
        "symbol-tree": "^3.2.2",
        "tough-cookie": "^2.5.0",
        "w3c-hr-time": "^1.0.1",
        "w3c-xmlserializer": "^1.1.2",
        "webidl-conversions": "^4.0.2",
        "whatwg-encoding": "^1.0.5",
        "whatwg-mimetype": "^2.3.0",
        "whatwg-url": "^7.0.0",
        "ws": "^6.1.2",
        "xml-name-validator": "^3.0.0"
      },
      "dependencies": {
        "acorn": {
          "version": "6.4.2",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
          "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==",
          "dev": true
        },
        "escodegen": {
          "version": "1.14.3",
          "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
          "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
          "dev": true,
          "requires": {
            "esprima": "^4.0.1",
            "estraverse": "^4.2.0",
            "esutils": "^2.0.2",
            "optionator": "^0.8.1",
            "source-map": "~0.6.1"
          }
        },
        "esprima": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
          "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
          "dev": true
        },
        "ws": {
          "version": "6.2.1",
          "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
          "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
          "dev": true,
          "requires": {
            "async-limiter": "~1.0.0"
          }
        }
      }
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "dev": true
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "json5": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
      "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
      "dev": true,
      "requires": {
        "minimist": "^1.2.0"
      }
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true
    },
    "levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      }
    },
    "lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true
    },
    "locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "requires": {
        "p-locate": "^5.0.0"
      }
    },
    "lodash": {
      "version": "4.17.20",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz",
      "integrity": "sha512-PlhdFcillOINfeV7Ni6oF1TAEayyZBoZ8bcshTHqOYJYlrqzRK5hagpagky5o4HfCzzd1TRkXPMFq6cKk9rGmA==",
      "dev": true
    },
    "lodash.clone": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.clone/-/lodash.clone-4.5.0.tgz",
      "integrity": "sha1-GVhwRQ9aExkkeN9Lw9I9LeoZB7Y=",
      "dev": true
    },
    "lodash.memoize": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
      "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4=",
      "dev": true
    },
    "lodash.sortby": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
      "dev": true
    },
    "lodash.uniq": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
      "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M=",
      "dev": true
    },
    "log-symbols": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
      "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1"
      }
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "magic-string": {
      "version": "0.22.5",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.22.5.tgz",
      "integrity": "sha512-oreip9rJZkzvA8Qzk9HFs8fZGF/u7H/gtrE8EN6RjKJ9kh2HlC+yQ2QezifqTZfGyiuAV0dRv5a+y/8gBb1m9w==",
      "dev": true,
      "requires": {
        "vlq": "^0.2.2"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true
    },
    "map-obj": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-4.3.0.tgz",
      "integrity": "sha512-hdN1wVrZbb29eBGiGjJbeP8JbKjq1urkHJ/LIP/NY48MZ1QVXUsQBV1G1zvYFHn1XE06cwjBsOI2K3Ulnj1YXQ==",
      "dev": true
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "marked": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/marked/-/marked-4.0.12.tgz",
      "integrity": "sha512-hgibXWrEDNBWgGiK18j/4lkS6ihTe9sxtV4Q1OQppb/0zzyPSzoFANBa5MfsG/zgsWklmNnhm0XACZOH/0HBiQ==",
      "dev": true
    },
    "md5.js": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
      "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
      "dev": true,
      "requires": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "mdn-data": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
      "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA==",
      "dev": true
    },
    "meow": {
      "version": "10.1.2",
      "resolved": "https://registry.npmjs.org/meow/-/meow-10.1.2.tgz",
      "integrity": "sha512-zbuAlN+V/sXlbGchNS9WTWjUzeamwMt/BApKCJi7B0QyZstZaMx0n4Unll/fg0njGtMdC9UP5SAscvOCLYdM+Q==",
      "dev": true,
      "requires": {
        "@types/minimist": "^1.2.2",
        "camelcase-keys": "^7.0.0",
        "decamelize": "^5.0.0",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "4.1.0",
        "normalize-package-data": "^3.0.2",
        "read-pkg-up": "^8.0.0",
        "redent": "^4.0.0",
        "trim-newlines": "^4.0.2",
        "type-fest": "^1.2.2",
        "yargs-parser": "^20.2.9"
      }
    },
    "merge-source-map": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.0.4.tgz",
      "integrity": "sha1-pd5GU42uhNQRTMXqArR3KmNGcB8=",
      "dev": true,
      "requires": {
        "source-map": "^0.5.6"
      },
      "dependencies": {
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true
    },
    "micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dev": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      }
    },
    "miller-rabin": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
      "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
      "dev": true,
      "requires": {
        "bn.js": "^4.0.0",
        "brorand": "^1.0.1"
      },
      "dependencies": {
        "bn.js": {
          "version": "4.11.9",
          "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
          "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
          "dev": true
        }
      }
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "dev": true
    },
    "mime-db": {
      "version": "1.45.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.45.0.tgz",
      "integrity": "sha512-CkqLUxUk15hofLoLyljJSrukZi8mAtgd+yE5uO4tqRZsdsAJKv0O+rFMhVDRJgozy+yG6md5KwuXhD4ocIoP+w==",
      "dev": true
    },
    "mime-types": {
      "version": "2.1.28",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.28.tgz",
      "integrity": "sha512-0TO2yJ5YHYr7M2zzT7gDU1tbwHxEUWBCLt0lscSNpcdAfFyJOVEpRYNS7EXVcTLNj/25QO8gulHC5JtTzSE2UQ==",
      "dev": true,
      "requires": {
        "mime-db": "1.45.0"
      }
    },
    "mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true
    },
    "min-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
      "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==",
      "dev": true
    },
    "minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
      "dev": true
    },
    "minimalistic-crypto-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
      "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
      "dev": true
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
      "dev": true
    },
    "minimist-options": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/minimist-options/-/minimist-options-4.1.0.tgz",
      "integrity": "sha512-Q4r8ghd80yhO/0j1O3B2BjweX3fiHg9cdOwjJd2J76Q135c+NDxGCqdYKQ1SKBuFfgWbAUzBfvYjPUEeNgqN1A==",
      "dev": true,
      "requires": {
        "arrify": "^1.0.1",
        "is-plain-obj": "^1.1.0",
        "kind-of": "^6.0.3"
      }
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "requires": {
        "minimist": "^1.2.5"
      }
    },
    "ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "nan": {
      "version": "2.14.2",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.2.tgz",
      "integrity": "sha512-M2ufzIiINKCuDfBSAUr1vWQ+vuVcA9kqx8JJUsbQi6yf1uGRyb7HfpdfUr5qLXf3B/t8dPvcjhKMmlfnP47EzQ==",
      "dev": true,
      "optional": true
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      }
    },
    "nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "node-addon-api": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-1.7.2.tgz",
      "integrity": "sha512-ibPK3iA+vaY1eEjESkQkM0BbCqFOaZMiXRTtdB0u7b4djtY6JnsjvPdUHVMg6xQt3B8fpTTWHI9A+ADjM9frzg==",
      "dev": true
    },
    "node-forge": {
      "version": "0.7.6",
      "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.7.6.tgz",
      "integrity": "sha512-sol30LUpz1jQFBjOKwbjxijiE3b6pjd74YwfD0fJOKPjF+fONKb2Yg8rYgS6+bK6VDl+/wfr4IYpC7jDzLUIfw==",
      "dev": true
    },
    "node-libs-browser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
      "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
      "dev": true,
      "requires": {
        "assert": "^1.1.1",
        "browserify-zlib": "^0.2.0",
        "buffer": "^4.3.0",
        "console-browserify": "^1.1.0",
        "constants-browserify": "^1.0.0",
        "crypto-browserify": "^3.11.0",
        "domain-browser": "^1.1.1",
        "events": "^3.0.0",
        "https-browserify": "^1.0.0",
        "os-browserify": "^0.3.0",
        "path-browserify": "0.0.1",
        "process": "^0.11.10",
        "punycode": "^1.2.4",
        "querystring-es3": "^0.2.0",
        "readable-stream": "^2.3.3",
        "stream-browserify": "^2.0.1",
        "stream-http": "^2.7.2",
        "string_decoder": "^1.0.0",
        "timers-browserify": "^2.0.4",
        "tty-browserify": "0.0.0",
        "url": "^0.11.0",
        "util": "^0.11.0",
        "vm-browserify": "^1.0.1"
      },
      "dependencies": {
        "punycode": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
          "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
          "dev": true
        }
      }
    },
    "node-releases": {
      "version": "1.1.70",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.70.tgz",
      "integrity": "sha512-Slf2s69+2/uAD79pVVQo8uSiC34+g8GWY8UH2Qtqv34ZfhYrxpYpfzs9Js9d6O0mbDmALuxaTlplnBTnSELcrw==",
      "dev": true
    },
    "normalize-package-data": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.3.tgz",
      "integrity": "sha512-p2W1sgqij3zMMyRC067Dg16bfzVH+w7hyegmpIvZ4JNjqtGOVAIvLmjBx3yP7YTe9vKJgkoNOPjwQGogDoMXFA==",
      "dev": true,
      "requires": {
        "hosted-git-info": "^4.0.1",
        "is-core-module": "^2.5.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "dependencies": {
        "semver": {
          "version": "7.3.5",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
          "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true
    },
    "normalize-url": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-3.3.0.tgz",
      "integrity": "sha512-U+JJi7duF1o+u2pynbp2zXDW2/PADgC30f0GsHZtRh+HOcXHnw137TrNlyxxRvWW5fjKd3bcLHPxofWuCjaeZg==",
      "dev": true
    },
    "nth-check": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
      "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
      "dev": true,
      "requires": {
        "boolbase": "~1.0.0"
      }
    },
    "nwsapi": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
      "dev": true
    },
    "oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "object-inspect": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.4.1.tgz",
      "integrity": "sha512-wqdhLpfCUbEsoEwl3FXwGyv8ief1k/1aUdIPCqVnupM6e8l63BEJdiF/0swtn04/8p05tG/T0FrpTlfwvljOdw==",
      "dev": true
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.0"
      }
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.getownpropertydescriptors": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.1.tgz",
      "integrity": "sha512-6DtXgZ/lIZ9hqx4GtZETobXLR/ZLaa0aqV0kzbn80Rf8Z2e/XFnhA0I7p07N2wH8bBBltr2xQPi6sbKWAY2Eng==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "object.values": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.2.tgz",
      "integrity": "sha512-MYC0jvJopr8EK6dPBiO8Nb9mvjdypOachO5REGk6MXzujbBrAisKo3HmdEI6kZDL6fC31Mwee/5YbtMebixeag==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1",
        "has": "^1.0.3"
      }
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "dev": true,
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "dev": true,
      "requires": {
        "mimic-fn": "^1.0.0"
      }
    },
    "opn": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/opn/-/opn-5.5.0.tgz",
      "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
      "dev": true,
      "requires": {
        "is-wsl": "^1.1.0"
      }
    },
    "optionator": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
      "dev": true,
      "requires": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.6",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "word-wrap": "~1.2.3"
      }
    },
    "ora": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-2.1.0.tgz",
      "integrity": "sha512-hNNlAd3gfv/iPmsNxYoAPLvxg7HuPozww7fFonMZvL84tP6Ox5igfk5j/+a9rtJJwqMgKK+JgWsAQik5o0HTLA==",
      "dev": true,
      "requires": {
        "chalk": "^2.3.1",
        "cli-cursor": "^2.1.0",
        "cli-spinners": "^1.1.0",
        "log-symbols": "^2.2.0",
        "strip-ansi": "^4.0.0",
        "wcwidth": "^1.0.1"
      }
    },
    "os-browserify": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
      "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
      "dev": true
    },
    "p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "requires": {
        "yocto-queue": "^0.1.0"
      }
    },
    "p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "requires": {
        "p-limit": "^3.0.2"
      }
    },
    "p-map": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
      "dev": true,
      "requires": {
        "aggregate-error": "^3.0.0"
      }
    },
    "pako": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/pako/-/pako-0.2.9.tgz",
      "integrity": "sha1-8/dSL073gjSNqBYbrZ7P1Rv4OnU=",
      "dev": true
    },
    "parcel-bundler": {
      "version": "1.12.4",
      "resolved": "https://registry.npmjs.org/parcel-bundler/-/parcel-bundler-1.12.4.tgz",
      "integrity": "sha512-G+iZGGiPEXcRzw0fiRxWYCKxdt/F7l9a0xkiU4XbcVRJCSlBnioWEwJMutOCCpoQmaQtjB4RBHDGIHN85AIhLQ==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/core": "^7.4.4",
        "@babel/generator": "^7.4.4",
        "@babel/parser": "^7.4.4",
        "@babel/plugin-transform-flow-strip-types": "^7.4.4",
        "@babel/plugin-transform-modules-commonjs": "^7.4.4",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/preset-env": "^7.4.4",
        "@babel/runtime": "^7.4.4",
        "@babel/template": "^7.4.4",
        "@babel/traverse": "^7.4.4",
        "@babel/types": "^7.4.4",
        "@iarna/toml": "^2.2.0",
        "@parcel/fs": "^1.11.0",
        "@parcel/logger": "^1.11.1",
        "@parcel/utils": "^1.11.0",
        "@parcel/watcher": "^1.12.1",
        "@parcel/workers": "^1.11.0",
        "ansi-to-html": "^0.6.4",
        "babylon-walk": "^1.0.2",
        "browserslist": "^4.1.0",
        "chalk": "^2.1.0",
        "clone": "^2.1.1",
        "command-exists": "^1.2.6",
        "commander": "^2.11.0",
        "core-js": "^2.6.5",
        "cross-spawn": "^6.0.4",
        "css-modules-loader-core": "^1.1.0",
        "cssnano": "^4.0.0",
        "deasync": "^0.1.14",
        "dotenv": "^5.0.0",
        "dotenv-expand": "^5.1.0",
        "envinfo": "^7.3.1",
        "fast-glob": "^2.2.2",
        "filesize": "^3.6.0",
        "get-port": "^3.2.0",
        "htmlnano": "^0.2.2",
        "is-glob": "^4.0.0",
        "is-url": "^1.2.2",
        "js-yaml": "^3.10.0",
        "json5": "^1.0.1",
        "micromatch": "^3.0.4",
        "mkdirp": "^0.5.1",
        "node-forge": "^0.7.1",
        "node-libs-browser": "^2.0.0",
        "opn": "^5.1.0",
        "postcss": "^7.0.11",
        "postcss-value-parser": "^3.3.1",
        "posthtml": "^0.11.2",
        "posthtml-parser": "^0.4.0",
        "posthtml-render": "^1.1.3",
        "resolve": "^1.4.0",
        "semver": "^5.4.1",
        "serialize-to-js": "^3.0.0",
        "serve-static": "^1.12.4",
        "source-map": "0.6.1",
        "terser": "^3.7.3",
        "v8-compile-cache": "^2.0.0",
        "ws": "^5.1.1"
      }
    },
    "parse-asn1": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.6.tgz",
      "integrity": "sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==",
      "dev": true,
      "requires": {
        "asn1.js": "^5.2.0",
        "browserify-aes": "^1.0.0",
        "evp_bytestokey": "^1.0.0",
        "pbkdf2": "^3.0.3",
        "safe-buffer": "^5.1.1"
      }
    },
    "parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
      "dev": true,
      "requires": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      }
    },
    "parse5": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.0.tgz",
      "integrity": "sha512-fxNG2sQjHvlVAYmzBZS9YlDp6PTSSDwa98vkD4QgVDDCAo84z5X1t5XyJQ62ImdLXx5NdIIfihey6xpum9/gRQ==",
      "dev": true
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "dev": true
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true
    },
    "path": {
      "version": "0.12.7",
      "resolved": "https://registry.npmjs.org/path/-/path-0.12.7.tgz",
      "integrity": "sha1-1NwqUGxM4hl+tIHr/NWzbAFAsQ8=",
      "requires": {
        "process": "^0.11.1",
        "util": "^0.10.3"
      },
      "dependencies": {
        "inherits": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
        },
        "util": {
          "version": "0.10.4",
          "resolved": "https://registry.npmjs.org/util/-/util-0.10.4.tgz",
          "integrity": "sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==",
          "requires": {
            "inherits": "2.0.3"
          }
        }
      }
    },
    "path-browserify": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.1.tgz",
      "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==",
      "dev": true
    },
    "path-dirname": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
      "dev": true
    },
    "path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true
    },
    "path-parse": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
      "dev": true
    },
    "path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true
    },
    "pbkdf2": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.1.tgz",
      "integrity": "sha512-4Ejy1OPxi9f2tt1rRV7Go7zmfDQ+ZectEQz3VGUQhgq62HtIRPDyG/JtnwIxs6x3uNMwo2V7q1fMvKjb+Tnpqg==",
      "dev": true,
      "requires": {
        "create-hash": "^1.1.2",
        "create-hmac": "^1.1.4",
        "ripemd160": "^2.0.1",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      }
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "phaser": {
      "version": "3.55.2",
      "resolved": "https://registry.npmjs.org/phaser/-/phaser-3.55.2.tgz",
      "integrity": "sha512-amKXsbb2Ht29dGPKvt1edq3yGGYKtq8373GpJYGKPNPnneYY6MtVTOgjHDuZwtmUyK4v86FugkT3hzW/N4tjxQ==",
      "requires": {
        "eventemitter3": "^4.0.7",
        "path": "^0.12.7"
      }
    },
    "physical-cpu-count": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/physical-cpu-count/-/physical-cpu-count-2.0.0.tgz",
      "integrity": "sha1-GN4vl+S/epVRrXURlCtUlverpmA=",
      "dev": true
    },
    "picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true
    },
    "pn": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
      "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA==",
      "dev": true
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true
    },
    "postcss": {
      "version": "7.0.35",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.35.tgz",
      "integrity": "sha512-3QT8bBJeX/S5zKTTjTCIjRF3If4avAT6kqxcASlTWEtAFCb9NH0OUxNDfgZSWdP5fJnBYCMEWkIFfWeugjzYMg==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.2",
        "source-map": "^0.6.1",
        "supports-color": "^6.1.0"
      },
      "dependencies": {
        "supports-color": {
          "version": "6.1.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "postcss-calc": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-7.0.5.tgz",
      "integrity": "sha512-1tKHutbGtLtEZF6PT4JSihCHfIVldU72mZ8SdZHIYriIZ9fh9k9aWSppaT8rHsyI3dX+KSR+W+Ix9BMY3AODrg==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.27",
        "postcss-selector-parser": "^6.0.2",
        "postcss-value-parser": "^4.0.2"
      },
      "dependencies": {
        "postcss-value-parser": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.1.0.tgz",
          "integrity": "sha512-97DXOFbQJhk71ne5/Mt6cOu6yxsSfM0QGQyl0L25Gca4yGWEGJaig7l7gbCX623VqTBNGLRLaVUCnNkcedlRSQ==",
          "dev": true
        }
      }
    },
    "postcss-colormin": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-4.0.3.tgz",
      "integrity": "sha512-WyQFAdDZpExQh32j0U0feWisZ0dmOtPl44qYmJKkq9xFWY3p+4qnRzCHeNrkeRhwPHz9bQ3mo0/yVkaply0MNw==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "color": "^3.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-convert-values": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-4.0.1.tgz",
      "integrity": "sha512-Kisdo1y77KUC0Jmn0OXU/COOJbzM8cImvw1ZFsBgBgMgb1iL23Zs/LXRe3r+EZqM3vGYKdQ2YJVQ5VkJI+zEJQ==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-discard-comments": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-4.0.2.tgz",
      "integrity": "sha512-RJutN259iuRf3IW7GZyLM5Sw4GLTOH8FmsXBnv8Ab/Tc2k4SR4qbV4DNbyyY4+Sjo362SyDmW2DQ7lBSChrpkg==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-discard-duplicates": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-4.0.2.tgz",
      "integrity": "sha512-ZNQfR1gPNAiXZhgENFfEglF93pciw0WxMkJeVmw8eF+JZBbMD7jp6C67GqJAXVZP2BWbOztKfbsdmMp/k8c6oQ==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-discard-empty": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-4.0.1.tgz",
      "integrity": "sha512-B9miTzbznhDjTfjvipfHoqbWKwd0Mj+/fL5s1QOz06wufguil+Xheo4XpOnc4NqKYBCNqqEzgPv2aPBIJLox0w==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-discard-overridden": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-4.0.1.tgz",
      "integrity": "sha512-IYY2bEDD7g1XM1IDEsUT4//iEYCxAmP5oDSFMVU/JVvT7gh+l4fmjciLqGgwjdWpQIdb0Che2VX00QObS5+cTg==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-merge-longhand": {
      "version": "4.0.11",
      "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-4.0.11.tgz",
      "integrity": "sha512-alx/zmoeXvJjp7L4mxEMjh8lxVlDFX1gqWHzaaQewwMZiVhLo42TEClKaeHbRf6J7j82ZOdTJ808RtN0ZOZwvw==",
      "dev": true,
      "requires": {
        "css-color-names": "0.0.4",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "stylehacks": "^4.0.0"
      }
    },
    "postcss-merge-rules": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-4.0.3.tgz",
      "integrity": "sha512-U7e3r1SbvYzO0Jr3UT/zKBVgYYyhAz0aitvGIYOYK5CPmkNih+WDSsS5tvPrJ8YMQYlEMvsZIiqmn7HdFUaeEQ==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "caniuse-api": "^3.0.0",
        "cssnano-util-same-parent": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0",
        "vendors": "^1.0.0"
      },
      "dependencies": {
        "postcss-selector-parser": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
          "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
          "dev": true,
          "requires": {
            "dot-prop": "^5.2.0",
            "indexes-of": "^1.0.1",
            "uniq": "^1.0.1"
          }
        }
      }
    },
    "postcss-minify-font-values": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-4.0.2.tgz",
      "integrity": "sha512-j85oO6OnRU9zPf04+PZv1LYIYOprWm6IA6zkXkrJXyRveDEuQggG6tvoy8ir8ZwjLxLuGfNkCZEQG7zan+Hbtg==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-minify-gradients": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-gradients/-/postcss-minify-gradients-4.0.2.tgz",
      "integrity": "sha512-qKPfwlONdcf/AndP1U8SJ/uzIJtowHlMaSioKzebAXSG4iJthlWC9iSWznQcX4f66gIWX44RSA841HTHj3wK+Q==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "is-color-stop": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-minify-params": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-params/-/postcss-minify-params-4.0.2.tgz",
      "integrity": "sha512-G7eWyzEx0xL4/wiBBJxJOz48zAKV2WG3iZOqVhPet/9geefm/Px5uo1fzlHu+DOjT+m0Mmiz3jkQzVHe6wxAWg==",
      "dev": true,
      "requires": {
        "alphanum-sort": "^1.0.0",
        "browserslist": "^4.0.0",
        "cssnano-util-get-arguments": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "uniqs": "^2.0.0"
      }
    },
    "postcss-minify-selectors": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-minify-selectors/-/postcss-minify-selectors-4.0.2.tgz",
      "integrity": "sha512-D5S1iViljXBj9kflQo4YutWnJmwm8VvIsU1GeXJGiG9j8CIg9zs4voPMdQDUmIxetUOh60VilsNzCiAFTOqu3g==",
      "dev": true,
      "requires": {
        "alphanum-sort": "^1.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0"
      },
      "dependencies": {
        "postcss-selector-parser": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
          "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
          "dev": true,
          "requires": {
            "dot-prop": "^5.2.0",
            "indexes-of": "^1.0.1",
            "uniq": "^1.0.1"
          }
        }
      }
    },
    "postcss-modules-extract-imports": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-1.1.0.tgz",
      "integrity": "sha1-thTJcgvmgW6u41+zpfqh26agXds=",
      "dev": true,
      "requires": {
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        }
      }
    },
    "postcss-modules-local-by-default": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-1.2.0.tgz",
      "integrity": "sha1-99gMOYxaOT+nlkRmvRlQCn1hwGk=",
      "dev": true,
      "requires": {
        "css-selector-tokenizer": "^0.7.0",
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        }
      }
    },
    "postcss-modules-scope": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-1.1.0.tgz",
      "integrity": "sha1-1upkmUx5+XtipytCb75gVqGUu5A=",
      "dev": true,
      "requires": {
        "css-selector-tokenizer": "^0.7.0",
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        }
      }
    },
    "postcss-modules-values": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-1.3.0.tgz",
      "integrity": "sha1-7P+p1+GSUYOJ9CrQ6D9yrsRW6iA=",
      "dev": true,
      "requires": {
        "icss-replace-symbols": "^1.1.0",
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        }
      }
    },
    "postcss-normalize-charset": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-normalize-charset/-/postcss-normalize-charset-4.0.1.tgz",
      "integrity": "sha512-gMXCrrlWh6G27U0hF3vNvR3w8I1s2wOBILvA87iNXaPvSNo5uZAMYsZG7XjCUf1eVxuPfyL4TJ7++SGZLc9A3g==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-normalize-display-values": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-display-values/-/postcss-normalize-display-values-4.0.2.tgz",
      "integrity": "sha512-3F2jcsaMW7+VtRMAqf/3m4cPFhPD3EFRgNs18u+k3lTJJlVe7d0YPO+bnwqo2xg8YiRpDXJI2u8A0wqJxMsQuQ==",
      "dev": true,
      "requires": {
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-positions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-positions/-/postcss-normalize-positions-4.0.2.tgz",
      "integrity": "sha512-Dlf3/9AxpxE+NF1fJxYDeggi5WwV35MXGFnnoccP/9qDtFrTArZ0D0R+iKcg5WsUd8nUYMIl8yXDCtcrT8JrdA==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-repeat-style": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-repeat-style/-/postcss-normalize-repeat-style-4.0.2.tgz",
      "integrity": "sha512-qvigdYYMpSuoFs3Is/f5nHdRLJN/ITA7huIoCyqqENJe9PvPmLhNLMu7QTjPdtnVf6OcYYO5SHonx4+fbJE1+Q==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-string": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-string/-/postcss-normalize-string-4.0.2.tgz",
      "integrity": "sha512-RrERod97Dnwqq49WNz8qo66ps0swYZDSb6rM57kN2J+aoyEAJfZ6bMx0sx/F9TIEX0xthPGCmeyiam/jXif0eA==",
      "dev": true,
      "requires": {
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-timing-functions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-timing-functions/-/postcss-normalize-timing-functions-4.0.2.tgz",
      "integrity": "sha512-acwJY95edP762e++00Ehq9L4sZCEcOPyaHwoaFOhIwWCDfik6YvqsYNxckee65JHLKzuNSSmAdxwD2Cud1Z54A==",
      "dev": true,
      "requires": {
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-unicode": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-normalize-unicode/-/postcss-normalize-unicode-4.0.1.tgz",
      "integrity": "sha512-od18Uq2wCYn+vZ/qCOeutvHjB5jm57ToxRaMeNuf0nWVHaP9Hua56QyMF6fs/4FSUnVIw0CBPsU0K4LnBPwYwg==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-url": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-normalize-url/-/postcss-normalize-url-4.0.1.tgz",
      "integrity": "sha512-p5oVaF4+IHwu7VpMan/SSpmpYxcJMtkGppYf0VbdH5B6hN8YNmVyJLuY9FmLQTzY3fag5ESUUHDqM+heid0UVA==",
      "dev": true,
      "requires": {
        "is-absolute-url": "^2.0.0",
        "normalize-url": "^3.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-whitespace": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-normalize-whitespace/-/postcss-normalize-whitespace-4.0.2.tgz",
      "integrity": "sha512-tO8QIgrsI3p95r8fyqKV+ufKlSHh9hMJqACqbv2XknufqEDhDvbguXGBBqxw9nsQoXWf0qOqppziKJKHMD4GtA==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-ordered-values": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/postcss-ordered-values/-/postcss-ordered-values-4.1.2.tgz",
      "integrity": "sha512-2fCObh5UanxvSxeXrtLtlwVThBvHn6MQcu4ksNT2tsaV2Fg76R2CV98W7wNSlX+5/pFwEyaDwKLLoEV7uRybAw==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-reduce-initial": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/postcss-reduce-initial/-/postcss-reduce-initial-4.0.3.tgz",
      "integrity": "sha512-gKWmR5aUulSjbzOfD9AlJiHCGH6AEVLaM0AV+aSioxUDd16qXP1PCh8d1/BGVvpdWn8k/HiK7n6TjeoXN1F7DA==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "caniuse-api": "^3.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0"
      }
    },
    "postcss-reduce-transforms": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-reduce-transforms/-/postcss-reduce-transforms-4.0.2.tgz",
      "integrity": "sha512-EEVig1Q2QJ4ELpJXMZR8Vt5DQx8/mo+dGWSR7vWXqcob2gQLyQGsionYcGKATXvQzMPn6DSN1vTN7yFximdIAg==",
      "dev": true,
      "requires": {
        "cssnano-util-get-match": "^4.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-selector-parser": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.4.tgz",
      "integrity": "sha512-gjMeXBempyInaBqpp8gODmwZ52WaYsVOsfr4L4lDQ7n3ncD6mEyySiDtgzCT+NYC0mmeOLvtsF8iaEf0YT6dBw==",
      "dev": true,
      "requires": {
        "cssesc": "^3.0.0",
        "indexes-of": "^1.0.1",
        "uniq": "^1.0.1",
        "util-deprecate": "^1.0.2"
      }
    },
    "postcss-svgo": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-svgo/-/postcss-svgo-4.0.2.tgz",
      "integrity": "sha512-C6wyjo3VwFm0QgBy+Fu7gCYOkCmgmClghO+pjcxvrcBKtiKt0uCF+hvbMO1fyv5BMImRK90SMb+dwUnfbGd+jw==",
      "dev": true,
      "requires": {
        "is-svg": "^3.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "svgo": "^1.0.0"
      }
    },
    "postcss-unique-selectors": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-unique-selectors/-/postcss-unique-selectors-4.0.1.tgz",
      "integrity": "sha512-+JanVaryLo9QwZjKrmJgkI4Fn8SBgRO6WXQBJi7KiAVPlmxikB5Jzc4EvXMT2H0/m0RjrVVm9rGNhZddm/8Spg==",
      "dev": true,
      "requires": {
        "alphanum-sort": "^1.0.0",
        "postcss": "^7.0.0",
        "uniqs": "^2.0.0"
      }
    },
    "postcss-value-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
      "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
      "dev": true
    },
    "posthtml": {
      "version": "0.11.6",
      "resolved": "https://registry.npmjs.org/posthtml/-/posthtml-0.11.6.tgz",
      "integrity": "sha512-C2hrAPzmRdpuL3iH0TDdQ6XCc9M7Dcc3zEW5BLerY65G4tWWszwv6nG/ksi6ul5i2mx22ubdljgktXCtNkydkw==",
      "dev": true,
      "requires": {
        "posthtml-parser": "^0.4.1",
        "posthtml-render": "^1.1.5"
      }
    },
    "posthtml-parser": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/posthtml-parser/-/posthtml-parser-0.4.2.tgz",
      "integrity": "sha512-BUIorsYJTvS9UhXxPTzupIztOMVNPa/HtAm9KHni9z6qEfiJ1bpOBL5DfUOL9XAc3XkLIEzBzpph+Zbm4AdRAg==",
      "dev": true,
      "requires": {
        "htmlparser2": "^3.9.2"
      }
    },
    "posthtml-render": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/posthtml-render/-/posthtml-render-1.4.0.tgz",
      "integrity": "sha512-W1779iVHGfq0Fvh2PROhCe2QhB8mEErgqzo1wpIt36tCgChafP+hbXIhLDOM8ePJrZcFs0vkNEtdibEWVqChqw==",
      "dev": true
    },
    "prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true
    },
    "process": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
      "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI="
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true
    },
    "psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
      "dev": true
    },
    "public-encrypt": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.3.tgz",
      "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.0",
        "browserify-rsa": "^4.0.0",
        "create-hash": "^1.1.0",
        "parse-asn1": "^5.0.0",
        "randombytes": "^2.0.1",
        "safe-buffer": "^5.1.2"
      },
      "dependencies": {
        "bn.js": {
          "version": "4.11.9",
          "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
          "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
          "dev": true
        }
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true
    },
    "purgecss": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/purgecss/-/purgecss-2.3.0.tgz",
      "integrity": "sha512-BE5CROfVGsx2XIhxGuZAT7rTH9lLeQx/6M0P7DTXQH4IUc3BBzs9JUzt4yzGf3JrH9enkeq6YJBe9CTtkm1WmQ==",
      "dev": true,
      "requires": {
        "commander": "^5.0.0",
        "glob": "^7.0.0",
        "postcss": "7.0.32",
        "postcss-selector-parser": "^6.0.2"
      },
      "dependencies": {
        "commander": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-5.1.0.tgz",
          "integrity": "sha512-P0CysNDQ7rtVw4QIQtm+MRxV66vKFSvlsQvGYXZWR3qFU0jlMKHZZZgw8e+8DSah4UDKMqnknRDQz+xuQXQ/Zg==",
          "dev": true
        },
        "postcss": {
          "version": "7.0.32",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.32.tgz",
          "integrity": "sha512-03eXong5NLnNCD05xscnGKGDZ98CyzoqPSMjOe6SuoQY7Z2hIj0Ld1g/O/UQRuOle2aRtiIRDg9tDcTGAkLfKw==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.2",
            "source-map": "^0.6.1",
            "supports-color": "^6.1.0"
          }
        },
        "supports-color": {
          "version": "6.1.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "q": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
      "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
      "dev": true
    },
    "qs": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
      "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
      "dev": true
    },
    "querystring": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
      "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
      "dev": true
    },
    "querystring-es3": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
      "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
      "dev": true
    },
    "queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true
    },
    "quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "dev": true
    },
    "quote-stream": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/quote-stream/-/quote-stream-1.0.2.tgz",
      "integrity": "sha1-hJY/jJwmuULhU/7rU6rnRlK34LI=",
      "dev": true,
      "requires": {
        "buffer-equal": "0.0.1",
        "minimist": "^1.1.3",
        "through2": "^2.0.0"
      }
    },
    "randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.1.0"
      }
    },
    "randomfill": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
      "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
      "dev": true,
      "requires": {
        "randombytes": "^2.0.5",
        "safe-buffer": "^5.1.0"
      }
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "dev": true
    },
    "read-pkg": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-6.0.0.tgz",
      "integrity": "sha512-X1Fu3dPuk/8ZLsMhEj5f4wFAF0DWoK7qhGJvgaijocXxBmSToKfbFtqbxMO7bVjNA1dmE5huAzjXj/ey86iw9Q==",
      "dev": true,
      "requires": {
        "@types/normalize-package-data": "^2.4.0",
        "normalize-package-data": "^3.0.2",
        "parse-json": "^5.2.0",
        "type-fest": "^1.0.1"
      },
      "dependencies": {
        "parse-json": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
          "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "error-ex": "^1.3.1",
            "json-parse-even-better-errors": "^2.3.0",
            "lines-and-columns": "^1.1.6"
          }
        }
      }
    },
    "read-pkg-up": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-8.0.0.tgz",
      "integrity": "sha512-snVCqPczksT0HS2EC+SxUndvSzn6LRCwpfSvLrIfR5BKDQQZMaI6jPRC9dYvYFDRAuFEAnkwww8kBBNE/3VvzQ==",
      "dev": true,
      "requires": {
        "find-up": "^5.0.0",
        "read-pkg": "^6.0.0",
        "type-fest": "^1.0.1"
      }
    },
    "readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "dev": true,
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "readdirp": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
      "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.11",
        "micromatch": "^3.1.10",
        "readable-stream": "^2.0.2"
      }
    },
    "redent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-4.0.0.tgz",
      "integrity": "sha512-tYkDkVVtYkSVhuQ4zBgfvciymHaeuel+zFKXShfDnFP5SyVEP7qo70Rf1jTOTCx3vGNAbnEi/xFkcfQVMIBWag==",
      "dev": true,
      "requires": {
        "indent-string": "^5.0.0",
        "strip-indent": "^4.0.0"
      },
      "dependencies": {
        "indent-string": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-5.0.0.tgz",
          "integrity": "sha512-m6FAo/spmsW2Ab2fU35JTYwtOKa2yAwXSwgjSv1TJzh4Mh7mC3lzAOVLBprb72XsTrgkEIsl7YrFNAiDiRhIGg==",
          "dev": true
        }
      }
    },
    "regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
      "dev": true
    },
    "regenerate-unicode-properties": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.2.0.tgz",
      "integrity": "sha512-F9DjY1vKLo/tPePDycuH3dn9H1OTPIkVD9Kz4LODu+F2C75mgjAJ7x/gwy6ZcSNRAAkhNlJSOHRe8k3p+K9WhA==",
      "dev": true,
      "requires": {
        "regenerate": "^1.4.0"
      }
    },
    "regenerator-runtime": {
      "version": "0.13.7",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",
      "integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew==",
      "dev": true
    },
    "regenerator-transform": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
      "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
      "dev": true,
      "requires": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "regexpu-core": {
      "version": "4.7.1",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.7.1.tgz",
      "integrity": "sha512-ywH2VUraA44DZQuRKzARmw6S66mr48pQVva4LBeRhcOltJ6hExvWly5ZjFLYo67xbIxb6W1q4bAGtgfEl20zfQ==",
      "dev": true,
      "requires": {
        "regenerate": "^1.4.0",
        "regenerate-unicode-properties": "^8.2.0",
        "regjsgen": "^0.5.1",
        "regjsparser": "^0.6.4",
        "unicode-match-property-ecmascript": "^1.0.4",
        "unicode-match-property-value-ecmascript": "^1.2.0"
      }
    },
    "regjsgen": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
      "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A==",
      "dev": true
    },
    "regjsparser": {
      "version": "0.6.6",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.6.tgz",
      "integrity": "sha512-jjyuCp+IEMIm3N1H1LLTJW1EISEJV9+5oHdEyrt43Pg9cDSb6rrLZei2cVWpl0xTjmmlpec/lEQGYgM7xfpGCQ==",
      "dev": true,
      "requires": {
        "jsesc": "~0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
          "dev": true
        }
      }
    },
    "relateurl": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz",
      "integrity": "sha1-VNvzd+UUQKypCkzSdGANP/LYiKk=",
      "dev": true
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true
    },
    "repeat-element": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
      "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
      "dev": true
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true
    },
    "request": {
      "version": "2.88.2",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
      "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
      "dev": true,
      "requires": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.3",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.5.0",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      }
    },
    "request-promise-core": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
      "integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.19"
      }
    },
    "request-promise-native": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
      "integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
      "dev": true,
      "requires": {
        "request-promise-core": "1.1.4",
        "stealthy-require": "^1.1.1",
        "tough-cookie": "^2.3.3"
      }
    },
    "resolve": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.19.0.tgz",
      "integrity": "sha512-rArEXAgsBG4UgRGcynxWIWKFvh/XZCcS8UJdHhwy91zwAvCZIbcs+vAbflgBnNjYMs/i/i+/Ux6IZhML1yPvxg==",
      "dev": true,
      "requires": {
        "is-core-module": "^2.1.0",
        "path-parse": "^1.0.6"
      }
    },
    "resolve-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
      "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
      "dev": true
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "dev": true
    },
    "restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "dev": true,
      "requires": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true
    },
    "reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true
    },
    "rgb-regex": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/rgb-regex/-/rgb-regex-1.0.1.tgz",
      "integrity": "sha1-wODWiC3w4jviVKR16O3UGRX+rrE=",
      "dev": true
    },
    "rgba-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/rgba-regex/-/rgba-regex-1.0.0.tgz",
      "integrity": "sha1-QzdOLiyglosO8VI0YLfXMP8i7rM=",
      "dev": true
    },
    "rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "dev": true,
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "ripemd160": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
      "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
      "dev": true,
      "requires": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1"
      }
    },
    "run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "requires": {
        "queue-microtask": "^1.2.2"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "sass": {
      "version": "1.32.5",
      "resolved": "https://registry.npmjs.org/sass/-/sass-1.32.5.tgz",
      "integrity": "sha512-kU1yJ5zUAmPxr7f3q0YXTAd1oZjSR1g3tYyv+xu0HZSl5JiNOaE987eiz7wCUvbm4I9fGWGU2TgApTtcP4GMNQ==",
      "dev": true,
      "requires": {
        "chokidar": ">=2.0.0 <4.0.0"
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
      "dev": true
    },
    "saxes": {
      "version": "3.1.11",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-3.1.11.tgz",
      "integrity": "sha512-Ydydq3zC+WYDJK1+gRxRapLIED9PWeSuuS41wqyoRmzvhhh9nc+QQrVMKJYzJFULazeGhzSV0QleN2wD3boh2g==",
      "dev": true,
      "requires": {
        "xmlchars": "^2.1.1"
      }
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true
    },
    "send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "dev": true,
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          },
          "dependencies": {
            "ms": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
              "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
              "dev": true
            }
          }
        },
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
          "dev": true
        }
      }
    },
    "serialize-to-js": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/serialize-to-js/-/serialize-to-js-3.1.1.tgz",
      "integrity": "sha512-F+NGU0UHMBO4Q965tjw7rvieNVjlH6Lqi2emq/Lc9LUURYJbiCzmpi4Cy1OOjjVPtxu0c+NE85LU6968Wko5ZA==",
      "dev": true
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "dev": true,
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
      "dev": true
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
      "dev": true
    },
    "sha.js": {
      "version": "2.4.11",
      "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
      "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "shallow-copy": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/shallow-copy/-/shallow-copy-0.0.1.tgz",
      "integrity": "sha1-QV9CcC1z2BAzApLMXuhurhoRoXA=",
      "dev": true
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "requires": {
        "shebang-regex": "^1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true
    },
    "signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
      "dev": true
    },
    "simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
      "dev": true,
      "requires": {
        "is-arrayish": "^0.3.1"
      },
      "dependencies": {
        "is-arrayish": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
          "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
          "dev": true
        }
      }
    },
    "slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "requires": {
        "kind-of": "^3.2.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true
    },
    "source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "dev": true,
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "source-map-url": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
      "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
      "dev": true
    },
    "spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "dev": true,
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",
      "integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g==",
      "dev": true
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.0"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "srcset": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/srcset/-/srcset-3.0.0.tgz",
      "integrity": "sha512-D59vF08Qzu/C4GAOXVgMTLfgryt5fyWo93FZyhEWANo0PokFz/iWdDe13mX3O5TRf6l8vMTqckAfR4zPiaH0yQ==",
      "dev": true
    },
    "sshpk": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "requires": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      }
    },
    "stable": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/stable/-/stable-0.1.8.tgz",
      "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==",
      "dev": true
    },
    "static-eval": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/static-eval/-/static-eval-2.1.0.tgz",
      "integrity": "sha512-agtxZ/kWSsCkI5E4QifRwsaPs0P0JmZV6dkLz6ILYfFYQGn+5plctanRN+IC8dJRiFkyXHrwEE3W9Wmx67uDbw==",
      "dev": true,
      "requires": {
        "escodegen": "^1.11.1"
      },
      "dependencies": {
        "escodegen": {
          "version": "1.14.3",
          "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
          "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
          "dev": true,
          "requires": {
            "esprima": "^4.0.1",
            "estraverse": "^4.2.0",
            "esutils": "^2.0.2",
            "optionator": "^0.8.1",
            "source-map": "~0.6.1"
          }
        },
        "esprima": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
          "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
          "dev": true
        }
      }
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "static-module": {
      "version": "2.2.5",
      "resolved": "https://registry.npmjs.org/static-module/-/static-module-2.2.5.tgz",
      "integrity": "sha512-D8vv82E/Kpmz3TXHKG8PPsCPg+RAX6cbCOyvjM6x04qZtQ47EtJFVwRsdov3n5d6/6ynrOY9XB4JkaZwB2xoRQ==",
      "dev": true,
      "requires": {
        "concat-stream": "~1.6.0",
        "convert-source-map": "^1.5.1",
        "duplexer2": "~0.1.4",
        "escodegen": "~1.9.0",
        "falafel": "^2.1.0",
        "has": "^1.0.1",
        "magic-string": "^0.22.4",
        "merge-source-map": "1.0.4",
        "object-inspect": "~1.4.0",
        "quote-stream": "~1.0.2",
        "readable-stream": "~2.3.3",
        "shallow-copy": "~0.0.1",
        "static-eval": "^2.0.0",
        "through2": "~2.0.3"
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
      "dev": true
    },
    "stealthy-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
      "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
      "dev": true
    },
    "stream-browserify": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.2.tgz",
      "integrity": "sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==",
      "dev": true,
      "requires": {
        "inherits": "~2.0.1",
        "readable-stream": "^2.0.2"
      }
    },
    "stream-http": {
      "version": "2.8.3",
      "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
      "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
      "dev": true,
      "requires": {
        "builtin-status-codes": "^3.0.0",
        "inherits": "^2.0.1",
        "readable-stream": "^2.3.6",
        "to-arraybuffer": "^1.0.0",
        "xtend": "^4.0.0"
      }
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "string.prototype.trimend": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.3.tgz",
      "integrity": "sha512-ayH0pB+uf0U28CtjlLvL7NaohvR1amUvVZk+y3DYb0Ey2PUV5zPkkKy9+U1ndVEIXO8hNg18eIv9Jntbii+dKw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      }
    },
    "string.prototype.trimstart": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.3.tgz",
      "integrity": "sha512-oBIBUy5lea5tt0ovtOFiEQaBkoBBkyJhZXzJYrSmDo5IUUqbOPvVezuRs/agBIdZ2p2Eo1FD6bD9USyBLfl3xg==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3"
      }
    },
    "strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "requires": {
        "ansi-regex": "^3.0.0"
      }
    },
    "strip-indent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-4.0.0.tgz",
      "integrity": "sha512-mnVSV2l+Zv6BLpSD/8V87CW/y9EmmbYzGCIavsnsI6/nwn26DwffM/yztm30Z/I2DY9wdS3vXVCMnHDgZaVNoA==",
      "dev": true,
      "requires": {
        "min-indent": "^1.0.1"
      }
    },
    "stylehacks": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/stylehacks/-/stylehacks-4.0.3.tgz",
      "integrity": "sha512-7GlLk9JwlElY4Y6a/rmbH2MhVlTyVmiJd1PfTCqFaIBEGMYNsrO/v3SeGTdhBThLg4Z+NbOk/qFMwCa+J+3p/g==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0"
      },
      "dependencies": {
        "postcss-selector-parser": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
          "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
          "dev": true,
          "requires": {
            "dot-prop": "^5.2.0",
            "indexes-of": "^1.0.1",
            "uniq": "^1.0.1"
          }
        }
      }
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "svgo": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/svgo/-/svgo-1.3.2.tgz",
      "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.1",
        "coa": "^2.0.2",
        "css-select": "^2.0.0",
        "css-select-base-adapter": "^0.1.1",
        "css-tree": "1.0.0-alpha.37",
        "csso": "^4.0.2",
        "js-yaml": "^3.13.1",
        "mkdirp": "~0.5.1",
        "object.values": "^1.1.0",
        "sax": "~1.2.4",
        "stable": "^0.1.8",
        "unquote": "~1.1.1",
        "util.promisify": "~1.0.0"
      }
    },
    "symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true
    },
    "terser": {
      "version": "3.17.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-3.17.0.tgz",
      "integrity": "sha512-/FQzzPJmCpjAH9Xvk2paiWrFq+5M6aVOf+2KRbwhByISDX/EujxsK+BAvrhb6H+2rtrLCHK9N01wO014vrIwVQ==",
      "dev": true,
      "requires": {
        "commander": "^2.19.0",
        "source-map": "~0.6.1",
        "source-map-support": "~0.5.10"
      }
    },
    "through2": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "dev": true,
      "requires": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "timers-browserify": {
      "version": "2.0.12",
      "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.12.tgz",
      "integrity": "sha512-9phl76Cqm6FhSX9Xe1ZUAMLtm1BLkKj2Qd5ApyWkXzsMRaA7dgr81kf4wJmQf/hAvg8EEyJxDo3du/0KlhPiKQ==",
      "dev": true,
      "requires": {
        "setimmediate": "^1.0.4"
      }
    },
    "timsort": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/timsort/-/timsort-0.3.0.tgz",
      "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q=",
      "dev": true
    },
    "tiny-inflate": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz",
      "integrity": "sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==",
      "dev": true
    },
    "to-arraybuffer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
      "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
      "dev": true
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "requires": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      }
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
      "dev": true
    },
    "tough-cookie": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
      "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
      "dev": true,
      "requires": {
        "psl": "^1.1.28",
        "punycode": "^2.1.1"
      }
    },
    "tr46": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
      "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "trim-newlines": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-4.0.2.tgz",
      "integrity": "sha512-GJtWyq9InR/2HRiLZgpIKv+ufIKrVrvjQWEj7PxAXNc5dwbNJkqhAUoAGgzRmULAnoOM5EIpveYd3J2VeSAIew==",
      "dev": true
    },
    "tty-browserify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
      "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
      "dev": true
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2"
      }
    },
    "type-fest": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-1.4.0.tgz",
      "integrity": "sha512-yGSza74xk0UG8k+pLh5oeoYirvIiWo5t0/o3zHHAO2tRDiZcxWP7fywNlXhqb6/r6sWvwi+RsyQMWhVLe4BVuA==",
      "dev": true
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
      "dev": true
    },
    "uncss": {
      "version": "0.17.3",
      "resolved": "https://registry.npmjs.org/uncss/-/uncss-0.17.3.tgz",
      "integrity": "sha512-ksdDWl81YWvF/X14fOSw4iu8tESDHFIeyKIeDrK6GEVTQvqJc1WlOEXqostNwOCi3qAj++4EaLsdAgPmUbEyog==",
      "dev": true,
      "requires": {
        "commander": "^2.20.0",
        "glob": "^7.1.4",
        "is-absolute-url": "^3.0.1",
        "is-html": "^1.1.0",
        "jsdom": "^14.1.0",
        "lodash": "^4.17.15",
        "postcss": "^7.0.17",
        "postcss-selector-parser": "6.0.2",
        "request": "^2.88.0"
      },
      "dependencies": {
        "is-absolute-url": {
          "version": "3.0.3",
          "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-3.0.3.tgz",
          "integrity": "sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q==",
          "dev": true
        },
        "postcss-selector-parser": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.2.tgz",
          "integrity": "sha512-36P2QR59jDTOAiIkqEprfJDsoNrvwFei3eCqKd1Y0tUsBimsq39BLp7RD+JWny3WgB1zGhJX8XVePwm9k4wdBg==",
          "dev": true,
          "requires": {
            "cssesc": "^3.0.0",
            "indexes-of": "^1.0.1",
            "uniq": "^1.0.1"
          }
        }
      }
    },
    "unicode-canonical-property-names-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
      "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
      "dev": true
    },
    "unicode-match-property-ecmascript": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
      "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
      "dev": true,
      "requires": {
        "unicode-canonical-property-names-ecmascript": "^1.0.4",
        "unicode-property-aliases-ecmascript": "^1.0.4"
      }
    },
    "unicode-match-property-value-ecmascript": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.2.0.tgz",
      "integrity": "sha512-wjuQHGQVofmSJv1uVISKLE5zO2rNGzM/KCYZch/QQvez7C1hUhBIuZ701fYXExuufJFMPhv2SyL8CyoIfMLbIQ==",
      "dev": true
    },
    "unicode-property-aliases-ecmascript": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.1.0.tgz",
      "integrity": "sha512-PqSoPh/pWetQ2phoj5RLiaqIk4kCNwoV3CI+LfGmWLKI3rE3kl1h59XpX2BjgDrmbxD9ARtQobPGU1SguCYuQg==",
      "dev": true
    },
    "unicode-trie": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/unicode-trie/-/unicode-trie-0.3.1.tgz",
      "integrity": "sha1-1nHd3YkQGgi6w3tqUWEBBgIFIIU=",
      "dev": true,
      "requires": {
        "pako": "^0.2.5",
        "tiny-inflate": "^1.0.0"
      }
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      }
    },
    "uniq": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/uniq/-/uniq-1.0.1.tgz",
      "integrity": "sha1-sxxa6CVIRKOoKBVBzisEuGWnNP8=",
      "dev": true
    },
    "uniqs": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/uniqs/-/uniqs-2.0.0.tgz",
      "integrity": "sha1-/+3ks2slKQaW5uFl1KWe25mOawI=",
      "dev": true
    },
    "unquote": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/unquote/-/unquote-1.1.1.tgz",
      "integrity": "sha1-j97XMk7G6IoP+LkF58CYzcCG1UQ=",
      "dev": true
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "dev": true,
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "dev": true,
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
          "dev": true
        }
      }
    },
    "upath": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
      "dev": true
    },
    "uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "dev": true
    },
    "url": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
      "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
      "dev": true,
      "requires": {
        "punycode": "1.3.2",
        "querystring": "0.2.0"
      },
      "dependencies": {
        "punycode": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
          "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
          "dev": true
        }
      }
    },
    "use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true
    },
    "util": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/util/-/util-0.11.1.tgz",
      "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3"
      },
      "dependencies": {
        "inherits": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
          "dev": true
        }
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "util.promisify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.1.tgz",
      "integrity": "sha512-g9JpC/3He3bm38zsLupWryXHoEcS22YHthuPQSJdMy6KNrzIRzWqcsHzD/WUnqe45whVou4VIsPew37DoXWNrA==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.2",
        "has-symbols": "^1.0.1",
        "object.getownpropertydescriptors": "^2.1.0"
      },
      "dependencies": {
        "es-abstract": {
          "version": "1.17.7",
          "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.7.tgz",
          "integrity": "sha512-VBl/gnfcJ7OercKA9MVaegWsBHFjV492syMudcnQZvt/Dw8ezpcOHYZXa/J96O8vx+g4x65YKhxOwDUh63aS5g==",
          "dev": true,
          "requires": {
            "es-to-primitive": "^1.2.1",
            "function-bind": "^1.1.1",
            "has": "^1.0.3",
            "has-symbols": "^1.0.1",
            "is-callable": "^1.2.2",
            "is-regex": "^1.1.1",
            "object-inspect": "^1.8.0",
            "object-keys": "^1.1.1",
            "object.assign": "^4.1.1",
            "string.prototype.trimend": "^1.0.1",
            "string.prototype.trimstart": "^1.0.1"
          }
        },
        "object-inspect": {
          "version": "1.9.0",
          "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
          "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
          "dev": true
        }
      }
    },
    "uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "dev": true
    },
    "v8-compile-cache": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.2.0.tgz",
      "integrity": "sha512-gTpR5XQNKFwOd4clxfnhaqvfqMpqEwr4tOtCyz4MtYZX2JYhfr1JvBFKdS+7K/9rfpZR3VLX+YWBbKoxCgS43Q==",
      "dev": true
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "vendors": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/vendors/-/vendors-1.0.4.tgz",
      "integrity": "sha512-/juG65kTL4Cy2su4P8HjtkTxk6VmJDiOPBufWniqQ6wknac6jNiXS9vU+hO3wgusiyqWlzTbVHi0dyJqRONg3w==",
      "dev": true
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "vlq": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/vlq/-/vlq-0.2.3.tgz",
      "integrity": "sha512-DRibZL6DsNhIgYQ+wNdWDL2SL3bKPlVrRiBqV5yuMm++op8W4kGFtaQfCs4KEJn0wBZcHVHJ3eoywX8983k1ow==",
      "dev": true
    },
    "vm-browserify": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-1.1.2.tgz",
      "integrity": "sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==",
      "dev": true
    },
    "w3c-hr-time": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
      "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
      "dev": true,
      "requires": {
        "browser-process-hrtime": "^1.0.0"
      }
    },
    "w3c-xmlserializer": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-1.1.2.tgz",
      "integrity": "sha512-p10l/ayESzrBMYWRID6xbuCKh2Fp77+sA0doRuGn4tTIMrrZVeqfpKjXHY+oDh3K4nLdPgNwMTVP6Vp4pvqbNg==",
      "dev": true,
      "requires": {
        "domexception": "^1.0.1",
        "webidl-conversions": "^4.0.2",
        "xml-name-validator": "^3.0.0"
      }
    },
    "wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dev": true,
      "requires": {
        "defaults": "^1.0.3"
      }
    },
    "webidl-conversions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
      "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
      "dev": true
    },
    "whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "dev": true,
      "requires": {
        "iconv-lite": "0.4.24"
      }
    },
    "whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
      "dev": true
    },
    "whatwg-url": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
      "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
      "dev": true,
      "requires": {
        "lodash.sortby": "^4.7.0",
        "tr46": "^1.0.1",
        "webidl-conversions": "^4.0.2"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "ws": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/ws/-/ws-5.2.2.tgz",
      "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
      "dev": true,
      "requires": {
        "async-limiter": "~1.0.0"
      }
    },
    "xml-name-validator": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
      "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
      "dev": true
    },
    "xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
      "dev": true
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "dev": true
    },
    "yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "yargs-parser": {
      "version": "20.2.9",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
      "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
      "dev": true
    },
    "yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true
    }
  }
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35979" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","package-lock.json"], null)
//# sourceMappingURL=/package-lock.js.map