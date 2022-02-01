const readline = require("readline");
const fs = require("fs");
const open = require("open");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const tabsArray = [];
const argv = yargs(hideBin(process.argv)).argv;

async function openTab(url) {
  result = await open(url);
}

function loadUrlsIntoArray(tabsFilePath) {
  return new Promise((res, rej) => {
    try {
      const readInterface = readline.createInterface({
        input: fs.createReadStream(tabsFilePath),
        output: process.stdout,
        console: false,
      });

      readInterface
        .on("line", function (line) {
          tabsArray.push(line);
        })
        .on("close", function () {
          res();
        });
    } catch (err) {
      console.log("error output: " + err);
      rej(err);
    }
  });
}

async function openTabsDefaultBrowser(tabsFilePath = "tabs.txt") {
  const result = await loadUrlsIntoArray(tabsFilePath);
  tabsArray.map((tab) => {
    openTab(tab);
  });
}

argv.filePath
  ? openTabsDefaultBrowser(argv.filePath)
  : openTabsDefaultBrowser();