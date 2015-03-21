//var env = require('./env.js');
//
//describe('Boomerang navigation to', function () {
//    var about = element(by.id('about'));
//    var news = element(by.id('news'));
//    var events = element(by.id('events'));
//    var photos = element(by.id('photos'));
//    var googlePlus = element(by.id('google-plus'));
//    var heading = element(by.id('heading'));
//    var navBtn = element(by.css('btn-navbar'));
//
//    beforeEach(function () {
//        browser.get(env.baseUrl);
//    });
//
// TODO figure out why I can't test anything in a Bootstrap navBar
//    it('news should open news page', function () {
//        navBtn.click();
//        news.click();
//        expect(heading.getText()).toContain(' News');
//    });

//    it('should hide the loading image', function () {
//        expect(heading.isDisplayed()).toBe(true);
//        expect(gdg_loading.isDisplayed()).not.toBe(true);
//    });
//
//    it('should load the news feed', function () {
//        expect(newsFeed.isDisplayed()).toBe(true);
//        expect(newsArticles.count()).toBeGreaterThan(1);
//    });
//});
