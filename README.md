GDG Boomerang for App Engine (Java)
==============================

[![Join the chat at https://gitter.im/Splaktar/boomerang-gae](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Splaktar/boomerang-gae?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is forked from the [GDG-X boomerang] project. Unlike that project, you are able to test this project locally and have all of the API calls work.

Boomerang is a template for a basic GDG web site that can be deployed within 30 minutes.

See it in action: http://gdg-x.github.io/boomerang

Prerequisites
---------------
* Install the [Google Cloud SDK](https://cloud.google.com/sdk/).
* GAE requires Java 7. Configure your IDE to use Java 7 for the project.

On IntelliJ:
---------------
* Setup your local App Engine Dev Server in Preferences->Build, Execution, Deployment->Application Servers.
* Add the following directories to the libraries list of your new Application Server:
* google-cloud-sdk/platform/appengine-java-sdk/lib
* google-cloud-sdk/platform/appengine-java-sdk/lib/agent
* google-cloud-sdk/platform/appengine-java-sdk/lib/opt/user/appengine-endpoints/v1
* google-cloud-sdk/platform/appengine-java-sdk/lib/opt/user/datanucleus/v2
* google-cloud-sdk/platform/appengine-java-sdk/lib/shared
* google-cloud-sdk/platform/appengine-java-sdk/lib/user
* google-cloud-sdk/platform/appengine-java-sdk/lib/user/orm

On Eclipse:
---------------
* Right clicking on the project and doing Run As->Web Application should create your Run Configuration.
* Configure your SDK in Window->Preferences->Google->App Engine.

Configuring
---------------
Update war/app/services/configService.js with values appropriate for your group:

1. **name**: The name of your GDG
2. **id**: The ID of the Google+ page for your GDG; for example, if your page
   URL is https://plus.google.com/u/0/b/115803993493374365281/, then the ID
   is 115803993493374365281
3. **google_api**: The API key for your project, available from
   https://code.google.com/apis/console - create a new project, add Google+ API,
   and use the API key shown in 'Simple API Access'
   If you're using the new Cloud Console https://cloud.google.com/console
   add the Google+ API and use the basic BrowserKey registered app's API key
4. **pwa_id**: The ID for a Picasa web album from which pictures will be
   drawn. If you do not have a Picasa web album for your group, you will want
   to comment out the photos tab in **index.html**.
5. **domain**: Your custom domain name (or base appspot URL).
6. **cover.title**: An announcement that will appear on the landing page.
7. **cover.subtitle**: More text to support the landing page announcement.
8. **cover.button.text**: Text for the announcement button.
9. **cover.button.url**: The URL that the announcement button will open in another window.
10. **cover.url**: _Optional_: If the cover image drawn from your Google+ page
   does not work with the default layout, you can specify a URL for a specific
   image instead.
11. **twitter**, **facebook**, **meetup**: Update these with your chapter's social network handles. Setting them to '' will hide the icon.
12. Edit the snippet details in the index.html to change how your page looks when it is shared.
13. Modify the images/sponsor1 and images/sponsor2.
14. Modify the sponsor links in about.html.
15. Create your Google Analytics account and modify the Google Analytics tracking code in index.html.
16. Create a free https://prerender.io account (up to 250 pages).
17. Find your token on prerender.io, insert it into web.xml where it says INSERT_YOUR_PRERENDER_TOKEN_HERE.
18. Deploy and test locally.
19. Upload app to App Engine!

Note that you cannot test prerendering of pages locally.

Building
---------------
Here you will install dependencies and tooling, build, minify, run static analysis, and more.
You must have Node.js installed to use the build tools. Download it [here](http://nodejs.org/download/).
From the boomerang directory, run the following:

1. npm install
2. bower install
3. gulp

[GDG-X boomerang]: https://github.com/gdg-x/boomerang
