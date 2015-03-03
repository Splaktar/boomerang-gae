GDG Boomerang for App Engine (Java)
==============================

[![Join the chat at https://gitter.im/Splaktar/boomerang-gae](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Splaktar/boomerang-gae?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is forked from the [GDG-X boomerang] project. Unlike that project, you are able to test this project locally and have all of the API calls work.

GDG boilerplate, feeds from DevSite and Google+ using AngularJS and Twitter Bootstrap.

This project is setup for use with both IntelliJ IDEA and Eclipse. Some tweaking will be needed to point to the App Engine SDK install on your local machine. 

On IntelliJ:
* You will also need to setup your own local App Engine Dev Server in Settings->Application Servers.
* Add the following directories to the libraries list of your new Application Server (changing the version as needed):
* appengine-java-sdk-1.9.3/lib
* appengine-java-sdk-1.9.3/lib/agent
* appengine-java-sdk-1.9.3/lib/opt/user/appengine-endpoints/v1
* appengine-java-sdk-1.9.3/lib/opt/user/datanucleus/v2
* appengine-java-sdk-1.9.3/lib/shared
* appengine-java-sdk-1.9.3/lib/user
* appengine-java-sdk-1.9.3/lib/user/orm

On Eclipse:
* Right clicking on the project and doing Run As->Web Application should create your Run Configuration.
* Configure your SDK in Window->Preferences->Google->App Engine.

The paths are Linux specific, so additional path changes will be needed on Windows.

Configure your chapter's site:
* Setup the GAE SDK and point your project to it as mentioned above.
* GAE requires Java 7.
* Modify the config.js file to have it pull from your chapter's Google+ page id, Picasa Web Album id, and Google+ API key instead of GDG Space Coast.
* Modify the images/sponsor1 and images/sponsor2.
* Modify the sponsor links in about.html.
* Create your Google Analytics account and modify the Google Analytics tracking code in index.html.
* Create a free https://prerender.io account (up to 250 pages).
* Find your token on prerender.io, insert it into web.xml where it says INSERT_YOUR_PRERENDER_TOKEN_HERE.
* Deploy and test locally.
* Upload app to App Engine!

Note that you cannot test prerendering of pages locally.

[GDG-X boomerang]: https://github.com/gdg-x/boomerang
