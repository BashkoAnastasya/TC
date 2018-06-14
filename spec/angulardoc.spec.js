var MainPage = require('../pages/angulardoc.page.js');

describe('Тестирование стараницы https://angular.io/docs', function () {
    var mainPage = new MainPage();
    beforeEach(function () {
        // открываем тестируемую страницу
        browser.driver.get('https://angular.io/docs');
        browser.driver.manage().window().maximize();
    });

    it('Count items in the left panel', function () {
        expect(mainPage.menuItemsLeftCount()).toEqual(5);
    });

    it('Count items in the up panel', function () {
        expect(mainPage.menuItemsCount()).toEqual(5);
    });

    it('Count items in the center panel', function () {
        expect(mainPage.menuItemsCentreCount()).toEqual(3);
    });

    it('Open Homepage', function () {
        mainPage.buttonHome.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
        browser.navigate().back();
    });

    it('Open "Features"', function () {
        mainPage.menuUpButtons.get(0).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
        browser.navigate().back();
    });
    it('Open "DOCS"', function () {
        mainPage.menuUpButtons.get(1).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs');
        browser.navigate().back();
    });
    it('Open "Resources"', function () {
        mainPage.menuUpButtons.get(2).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        browser.navigate().back();
    });
    it('Open "Events"', function () {
        mainPage.menuUpButtons.get(3).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/events');
        browser.navigate().back();
    });
    it('Open "Blog"', function () {
        //  browser.ignoreSynchronization=false;
        mainPage.menuUpButtons.get(4).click();
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
        browser.navigate().back();
        browser.ignoreSynchronization = false;
    });

    it('change the color of the elements of the central unit: 1', function () {
        var colorcentrelemangul = mainPage.menuCenterButtons.get(0).getCssValue('color');
        browser.actions().mouseMove(mainPage.menuCenterButtons.get(0)).perform();
        var colorcentrelemangulnew = mainPage.menuCenterButtons.get(0).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });
   it('change the color of the elements of the central unit:  2', function () {
        var colorcentrelemangul = mainPage.menuCenterButtons.get(1).getCssValue('color');
        browser.actions().mouseMove(mainPage.menuCenterButtons.get(1)).perform();
        var colorcentrelemangulnew = mainPage.menuCenterButtons.get(1).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });
    it('change the color of the elements of the central unit: 3', function () {
        var colorcentrelemangul = mainPage.menuCenterButtons.get(2).getCssValue('color');
        browser.actions().mouseMove(mainPage.menuCenterButtons.get(2)).perform();
        var colorcentrelemangulnew = mainPage.menuCenterButtons.get(2).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });

    it('Check left panel:1', function () {
        mainPage.menuButtonsLeftLevel1.get(0).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        browser.navigate().back();
    });
    it('Check left panel:2', function () {
        mainPage.menuButtonsLeftLevel1.get(1).click();
        expect(mainPage.menuButtonsLeftLevel1.get(1).getAttribute('aria-pressed')).toEqual('true');
        mainPage.menuButtonsLeftLevel1.get(1).click();
    });
    it('Check left panel:3', function () {
        mainPage.menuButtonsLeftLevel1.get(2).click();
        expect(mainPage.menuButtonsLeftLevel1.get(2).getAttribute('aria-pressed')).toEqual('true');
        mainPage.menuButtonsLeftLevel1.get(2).click();
    });
    it('Check left panel:4', function () {
        mainPage.menuButtonsLeftLevel1.get(3).click();
        expect(mainPage.menuButtonsLeftLevel1.get(3).getAttribute('aria-pressed')).toEqual('true');
        mainPage.menuButtonsLeftLevel1.get(3).click();
    });
    it('Check left panel:5', function () {
        mainPage.menuButtonsLeftLevel1.get(4).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/api');
        browser.navigate().back();
    });

    it('Testing the display of the search result', function () {
        expect(mainPage.resultsearch.isPresent()).toBe(false);
        mainPage.inputSearch.sendKeys('s');
        browser.sleep(3000);
        expect(mainPage.resultsearch.isPresent()).toBe(true);
    });

    it('Testing the search for an empty result', function () {
        mainPage.inputSearch.sendKeys('dddsfsdfsdf');
        browser.sleep(3000);
        expect(mainPage.resultsearch.getText()).toEqual('No results found.');
        mainPage.inputSearch.sendKeys('');
    });

    //тестирование изменение размера поля ввода запроса
    it('Testing the change of the search input field when entering a string', function () {
        var sizesearch = mainPage.inputSearch.getSize();
        mainPage.inputSearch.sendKeys('s');
        var sizesearchnew = mainPage.inputSearch.getSize();
        expect(sizesearch).not.toBe(sizesearchnew);
        mainPage.inputSearch.sendKeys('');
    });

    it('Change language', function () {
        mainPage.linkChineseLang.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.cn/');
    });

});