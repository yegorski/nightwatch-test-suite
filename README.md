## Nightwatch acceptance tests for Jake's Computer Hospital website.

So you want to do browser automation. And you chose Nighwatch.js to do so. Read on.


# Usage
```
git clone PATH
npm i
npm test
```

# Overview

Ok so that's it on the usage of this repo! But this readme is not so much for describing how to use my repo (the Usage section is tiny) but rather for walking through the process I took for getting started with Nightwatch.

The end goal is for you to get started with your own browser automation project.

The example I'm working with is [Jake’s Computer Hospital](https://www.jakescomputerhospital.com/contact/) website. I've written a set of UI acceptance tests which validate the functionality of the site. The tests are written in Nightwatch.js, a popular Node.js browser automation framework. 

I'll walk through how I got my environment and Nightwatch setup, and show some highlights of the repo.

`Note: The steps outlined below were performed on a Mac system. Adjust accordingly if you're on another OS.`

# Getting Started with Nightwatch

Most of the steps you're likely to skip, if you already have Node and npm installed, but I'll start from scratch regardless. 

## Setup Development Environment 

1. Install [Node.js](https://nodejs.org/en/download/) and NPM (comes with lastest None.js)
  1. Here is a good [blog post](http://blog.teamtreehouse.com/install-node-js-npm-mac) on installing both on your Mac
1. I'm working with git (for obvious reasons, given where you're reading this :bowtie: ), so go ahead and create a GitHub repo
1. [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Run `git clone path-to-your-new-repo` to pull down the repo locally
1. `cd` into your repo and run `npm init` in the root of your repo, then follow the prompts
  1. Note that you don't really need to do this. I'm using npm to seamlessly install the `nightwatch` dependency and have npm run my test script
1. Install nightwatch by running the following (also in the root of your repo): 
  1. `npm install nightwatch --save`
  1. Note that if you're writing acceptance tests for an existing app, you'd do yourself and your team a favor by not install nightwatch in the `dependencies` but rather in the `devDependencies` of the app. `devDependencies` are not installed in production, but are only used for testing and debugging. Do this instead:
  1. `npm install nightwatch --save-dev`

## Download Selenium and WebDrivers
Because Nightwatch is a Node.js wrapper around Selenium, it needs either Selenium or a WebDriver to actually communicate with your web app.

1. Download the latest Selenium driver from the [Selenium Release](https://selenium-release.storage.googleapis.com/index.html) page
1. Place the downloaded .jar file into your Nightwatch project. It is conventional to have a bin folder into the root of your project with external dependencies like this
1. Download the WebDriver of your choosing and also place it in the bin
  1. Note that FirefoxDriver is included in the selenium-server-standalone package. You only need to download another driver if you plan to use something other than FF
  1. For example ChromeDriver is available at the [official chromedriver download](https://sites.google.com/a/chromium.org/chromedriver/downloads) page
1. Tell Nightwatch to use the Selenium version you just downloaded as well as where the drivers of your choosing reside, in [nightwatch.json](https://github.com/yegorski/jch-nightwatch/blob/master/nightwatch.json#L14):
```
"selenium": {
    "start_process": true,
    "server_path": "bin/selenium-server-standalone-3.0.1.jar",
    "port": 4444,
    "log_path": "output",
    "cli_args": {
      "webdriver.chrome.driver": "./bin/chromedriver",
      "webdriver.gecko.driver": "",
      "webdriver.edge.driver": ""
    }
  },
```

## Configure Nightwatch

1. With everything you need installed and downloaded, now create a `nightwatch.json` file in the root of your project
  1. Here is the [nightwatch.json](https://github.com/yegorski/jch-nightwatch/blob/master/nightwatch.json) that I have for my project. See what each of the settings do on the [Nightwatch Getting Started](http://nightwatchjs.org/getingstarted#basic-settings) page
  1. Couple key points of the config:
    1. Tell Nightwatch to start up Selenium on each test run:
      1. `"start_process": true,`
      1. Without doing this, you’d need to download a separate driver, require it, and start it explicitly inside your tests. See [Nightwatch Getting Started](http://nightwatchjs.org/getingstarted#chromedriver) guide for more
    1. Tell Nightwatch to run tests in parallel by setting the `"test_workers"` section like I have in my [nightwatch.json](https://github.com/yegorski/jch-nightwatch/blob/master/nightwatch.json#L19)
1. Create a configuration file that will contain some global variables that Nightwatch will use. I called mine `globals.js`. The convention is to have a config folder where that file - among with another config we'll discuss later - will live
1. Populate globals.js with the configuration variables you'd like to have. See here LINK for a list of useful variables. You can define any custom global vars as well
1. Here’s the simple [config/globals.js](https://github.com/yegorski/jch-nightwatch/blob/master/test/acceptance/config/globals.js) file I have

## Write Test Harness
Nightwatch has several directories that it looks for. Those include
tests: the tests it runs
pages: page objects that are great for encapsulating logic for each page
custom_commands: functions you can define to invoke inside your tests
globals: the config file we already discussed
The site I'm testing is simple and only has a few page objects. LINK. I did not define any custom commands. Instead I have a “lib” folder where I defined the helper functions I needed in a “utils.js” file. 
Once you have a framework in place, you are ready to start composing tests. 

Test Harness Highlights 
There are several approaches to writing tests that I took which I'd like to point out and discuss. 

Adding Pages Directly on Browser Object
Nightwatch looks in the “pages” directory and adds them on “browser.page” object (or “client.page” in my case). This is a bit quirky of me but I think it's a little verbose to say “browser.page.myPage()”. So I have the following function that I call in the global before hook which allows me to write this instead: “browser.myPage”:
CODE HERE

“Overriding” Nightwatch Actions
My previous experience with browser automation landed me in place where I did a lot of “waitForElementVisible” calls prior to clicking on an element. This quickly made my code not so DRY, as I needed 2 lines each time I wanted to perform an action on an element;
INSERT CODE
So I wrote the following set of utility methods which encapsulate that logic (also so that I don't forget to wait for an element before performing the action):
INSERT CODE

Encapsulating Actions Inside Pages
The concept of page objects LINK, implies having objects which perform actions on elements that the page is “responsible” for. I'd just like to reiterate this concept here  providing an example. 
The home page LINK has the following methods:
nav: navigate to the page
verifyLoaded: check that the page is loaded 
navAndVerify: a combination of the above 2 methods 
Since there aren't a lot of actions to take, that's really all the methods the page needs. Notice that there's a search button, and as soon as “performSearch” is executed, the next step is handed off to the search page now. It's a separation of concerns at the page objects level. 

Global afterEach Hook With Error Logging
I've played around with Nightwatch error handling and ran into an issue described here LINK.
In an attempt to have Nightwatch report errors that would otherwise be swallowed, I added the following afterEach hook:
FILE
