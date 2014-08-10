describe('boomerang about page', function() {
    var coverTitle = element(by.binding('cover.title'));
    var coverSubTitle = element(by.binding('cover.subtitle'));
    var coverButtonText = element(by.binding('cover.button.text'));
    var chapterDescription = element(by.binding('desc'));

    beforeEach(function() {
        // Test
        browser.get('http://localhost:8888');
        // Production
//        browser.get('http://www.gdgspacecoast.org');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Google Developer Group');
    });

    it('should have a proper promo', function() {
        expect(coverTitle.isPresent()).toBe(true);
        expect(coverSubTitle.isPresent()).toBe(true);
        expect(coverButtonText.isPresent()).toBe(true);
    });

    it('should load the chapter description', function() {
        expect(chapterDescription.isPresent()).toBe(true);
    });
});