describe('Controllers', function () {
    var rootScope;
    var scope;

    beforeEach(module('gdgBoomerang'));
    beforeEach(inject(function ($rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
    }));

    describe('MainControl', function () {
        it('should set some values', inject(function (Config, $controller) {
            $controller('MainControl', {$scope: scope});
            expect(scope.chapterName).toBe(Config.name);
            expect(scope.googlePlusLink).toBe('https://plus.google.com/' + Config.id);
            expect(scope.isNavCollapsed).toBe(true);
            expect(scope.status).toBe('ready');
            expect(rootScope.canonical).toBe(Config.domain);
        }));
    });

    describe('AboutControl', function () {
        it('should set some values', inject(function (Config, $controller) {
            var controller = $controller('AboutControl', {$scope: scope});
            expect(scope.$parent.activeTab).toBe('about');
            expect(scope.cover).toBe(Config.cover);
            expect(scope.loading).toBe(true);
            expect(scope.status).toBeUndefined();
            expect(controller.request).toContain(Config.googleApi);
            expect(controller.request).toContain(Config.id);
        }));
    });

    describe('NewsControl', function () {
        it('should set some values', inject(function (Config, $controller) {
            var controller = $controller('NewsControl', {$scope: scope});
            expect(scope.$parent.activeTab).toBe('news');
            expect(scope.loading).toBe(true);
            expect(scope.status).toBeUndefined();
            expect(controller.request).toContain(Config.googleApi);
            expect(controller.request).toContain(Config.id);
        }));
    });

    describe('EventsControl', function () {
        it('should set some values', inject(function (Config, $controller) {
            var controller = $controller('EventsControl', {$scope: scope});
            expect(scope.$parent.activeTab).toBe('events');
            expect(scope.loading).toBe(true);
            expect(scope.events).toBeDefined();
            expect(controller.url).toContain(Config.id);
        }));
    });

    describe('PhotosControl', function () {
        it('should set some values', inject(function (Config, $controller) {
            var controller = $controller('PhotosControl', {$scope: scope});
            expect(scope.$parent.activeTab).toBe('photos');
            expect(scope.loading).toBe(true);
            expect(scope.photos).toBeDefined();
            expect(controller.request).toContain(Config.id);
            expect(controller.request).toContain(Config.pwaId);
        }));
    });
});
