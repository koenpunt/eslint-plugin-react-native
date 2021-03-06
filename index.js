/* eslint-disable global-require */
'use strict'

var allRules = {
  'no-unused-styles': require('./lib/rules/no-unused-styles'),
  'no-inline-styles': require('./lib/rules/no-inline-styles'),
  'no-color-literals': require('./lib/rules/no-color-literals'),
  'split-platform-components': require('./lib/rules/split-platform-components'),
};

function configureAsError(rules) {
  var result = {};
  for (var key in rules) {
    if (!rules.hasOwnProperty(key)) {
      continue;
    }
    result['react-native/' + key] = 2;
  }
  return result;
}

var allRulesConfig = configureAsError(allRules);

module.exports = {
  deprecatedRules: {},
  rules: allRules,
  rulesConfig: {
    'no-unused-styles': 0,
    'no-inline-styles': 0,
    'no-color-literals': 0,
    'split-platform-components': 0
  },
  configs: {
    all: {
      plugin: [
        'react-native',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: allRulesConfig,
    },
  }
};
