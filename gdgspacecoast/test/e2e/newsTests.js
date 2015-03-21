var env = require('./env.js');

describe('Boomerang News page', function () {
    var heading = element(by.id('heading'));
    var gdgLoading = element(by.css('.gdg_loading'));
    var newsFeed = element(by.id('news-feed'));
    var newsArticles = element.all((by.repeater('article in news')));

    beforeEach(function () {
        browser.get(env.baseUrl + '/#!/news');
    });

    it('should have a title and chapter name', function () {
        expect(browser.getTitle()).toEqual('Google Developer Group');
        expect(heading.getText()).toContain(' News');
    });

    it('should hide the loading image', function () {
        expect(heading.isDisplayed()).toBe(true);
        expect(gdgLoading.isDisplayed()).not.toBe(true);
    });

    it('should load the news feed', function () {
        expect(newsFeed.isDisplayed()).toBe(true);
        expect(newsArticles.count()).toBeGreaterThan(1);
    });
});
