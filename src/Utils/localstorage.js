const { LocalStorage } = require("node-localstorage");
const path = require("path");

const localStorage = new LocalStorage(path.resolve(__dirname, "../../scratch"));

module.exports = localStorage;