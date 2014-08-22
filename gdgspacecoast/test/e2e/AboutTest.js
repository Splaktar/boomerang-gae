var env = require('./env.js');

describe('boomerang about page', function () {
    var coverTitle = element(by.binding('cover.title'));
    var coverSubTitle = element(by.binding('cover.subtitle'));
    var coverButtonText = element(by.binding('cover.button.text'));
    var chapterDescription = element(by.binding('desc'));
    var chapterName = element(by.binding('chapter_name'));
    var googlePlus = element(by.binding('google_plus_link'));

    beforeEach(function () {
        browser.get(env.baseUrl);
    });

    it('should have a title and chapter name', function () {
        expect(browser.getTitle()).toEqual('Google Developer Group');
        // TODO figure out why I can't test anything in a Bootstrap navBar
//        expect(googlePlus.isPresent()).toBe(true);
        expect(chapterName.isPresent()).toBe(true);
    });

    it('should have a proper promo', function () {
        expect(coverTitle.isPresent()).toBe(true);
        expect(coverSubTitle.isPresent()).toBe(true);
        expect(coverButtonText.isPresent()).toBe(true);
    });

    it('should load the chapter description', function () {
        expect(chapterDescription.isPresent()).toBe(true);
    });
});
