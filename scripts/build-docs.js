// generate docs and publish to gh-pages branch

const childProcess = require('child_process');
const ghPages = require('gh-pages');

const GIT_COMMIT = childProcess.execSync('git rev-parse --short HEAD').toString().replace(/\n/, '');
const VERSION = require('../package.json').version;

ghPages.publish('dist', {
    user: {
        name: 'baituo',
        email: 'baituo@gaoding.com'
    },
    repo: 'https://github.com/ouyangshikang/bt-ui.git',
    message: `[deploy] ${GIT_COMMIT} - [release] ${VERSION}`
});
