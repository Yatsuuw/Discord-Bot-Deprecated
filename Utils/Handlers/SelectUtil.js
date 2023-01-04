const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);
const Logger = require('../Logger');

module.exports = async client => {
    (await pGlob(`${process.cwd()}/Selects/*/*.js`)).map(async (selectMenuFile) => {
        const selectMenu = require(selectMenuFile);
        if (!selectMenu.name) return Logger.warn(`Select-Menu non fonctionnel : ajoutez un nom à votre menu ↓\nFichier -> ${selectMenuFile}`);
        client.Selects.set(selectMenu.name, selectMenu);
    });
};