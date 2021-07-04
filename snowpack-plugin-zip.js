const AdmZip = require('adm-zip');

module.exports = function(snowpackConfig, pluginOptions) {
  const outputPath = pluginOptions.outputPath;

  return {
    name: 'snowpack-plugin-zip',
    async optimize({ buildDirectory, log }) {
      const zip = new AdmZip();
      zip.addLocalFolder(buildDirectory);
      zip.writeZip(outputPath)

      log(`Wrote ZIP file to ${outputPath}`);
    }
  };
};
