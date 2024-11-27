const { TestEnvironment } = require('jest-environment-jsdom');

class JSDOMEnvironmentPatch extends TestEnvironment {
  constructor(...args) {
    super(...args);
    this.global.structuredClone = structuredClone;
  }
}

module.exports = JSDOMEnvironmentPatch;
