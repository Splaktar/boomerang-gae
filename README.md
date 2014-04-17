GDG Boomerang for App Engine (Java)
==============================
This is forked from the [GDG-X boomerang] project.

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
* Modify the config.js file to have it pull from your chapter's Google+ page instead of GDG Space Coast.
* Modify the images/sponsor1 and images/sponsor2.
* Modify the sponsor links in about.html.
* Use [this repo] to generate static pages and place them in the snapshots directory.


[GDG-X boomerang]: https://github.com/gdg-x/boomerang
[this repo]: https://github.com/yearofmoo-articles/AngularJS-SEO-Article