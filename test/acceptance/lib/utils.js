'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function utils(client) {
  this.addPageObjectsOnClient = () => {
    const pageFilesPath = path.join(__dirname, '../pages');
    const pageList = fs.readdirSync(pageFilesPath);

    let i;
    let len;
    let pageName;

    for (i = 0, len = pageList.length; i < len; i++) {
      if (path.extname(pageList[i]) === '.js') {
        pageName = pageList[i].split('.js')[0];
        client[pageName] = client.page[pageName](); // eslint-disable-line no-param-reassign
      }
    }
  };

  this.click = (selector) => {
    client
      .waitForElementVisible(selector)
      .click(selector);
    return client;
  };

  this.clearValue = (selector) => {
    client
      .waitForElementVisible(selector)
      .clearValue(selector);
    return client;
  };

  this.setValue = (selector, value) => {
    client
      .waitForElementVisible(selector)
      .setValue(selector, value);
    return client;
  };

  this.hover = (selector) => {
    client
      .waitForElementVisible(selector)
      .moveToElement(selector, 2, 2);
    return client;
  };

  this.hoverAndClick = (selector) => {
    client
      .waitForElementVisible(selector)
      .moveToElement(selector, 2, 2);
    this.click(client, selector);
    return client;
  };
};
