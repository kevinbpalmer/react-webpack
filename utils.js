function getRootPathFromSrcFolder() {
  const findParentDir = require('find-parent-dir');
  const path = require('path');
  const dirPath = __dirname;
  const trimmedParentDir = dirPath.split('src')[0].trim();

  return trimmedParentDir;
}

function getSassGlobalsFilePath() {
  const findParentDir = require('find-parent-dir');
  const path = require('path');
  const dirPath = __dirname;
  const trimmedParentDir = dirPath.split('src')[0].trim();
  console.log(trimmedParentDir + 'src/assets/styles/globals.sass');

  return trimmedParentDir + 'src/assets/styles/globals.sass';
}

module.exports = {
  getRootPathFromSrcFolder,
  sassGlobalsFilePath: getSassGlobalsFilePath()
}
