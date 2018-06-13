var MainPage = require('../pages/angulardoc.page.js');

describe('Тестирование стараницы https://angular.io/docs', function () {
    var mainPage = new MainPage();
    beforeEach(function () {
        // открываем тестируемую страницу
        browser.driver.get('https://angular.io/docs');
        browser.driver.manage().window().maximize();
    });

    it('Проверка количества элементов левой панели', function () {
        expect(mainPage.menuItemsLeftCount()).toEqual(5);
    });

    it('Находим верхнюю панель и проверяем количество элементов', function () {
        expect(mainPage.menuItemsCount()).toEqual(5);
    });

    it('Проверка количества элементов центральной панели', function () {
        expect(mainPage.menuItemsCentreCount()).toEqual(3);
    });

    it('Проверка открытия главной страницы', function () {
        mainPage.buttonHome.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
        browser.navigate().back();
    });

    it('Нажимаем на 1-ый элемент "Features"', function () {
        mainPage.menuUpButtons.get(0).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
        browser.navigate().back();
    });
    it('Нажимаем на 2-ый элемент "DOCS"', function () {
        mainPage.menuUpButtons.get(1).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs');
        browser.navigate().back();
    });
    it('Нажимаем на 3-ый элемент "resources"', function () {
        mainPage.menuUpButtons.get(2).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        browser.navigate().back();
    });
    it('Нажимаем на 4-ый элемент "events"', function () {
        mainPage.menuUpButtons.get(3).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/events');
        browser.navigate().back();
    });
    it('Нажимаем на 5-ый элемент "blog"', function () {
        //  browser.ignoreSynchronization=false;
        mainPage.menuUpButtons.get(4).click();
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toEqual('https://blog.angular.io/');
        browser.navigate().back();
        browser.ignoreSynchronization = false;
    });

    it('Тестирование  изменение цвета элементов центрального блока:1 элемент', function () {
        var colorcentrelemangul = mainPage.menuCenterButtons.get(0).getCssValue('color');
        browser.actions().mouseMove(mainPage.menuCenterButtons.get(0)).perform();
        var colorcentrelemangulnew = mainPage.menuCenterButtons.get(0).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });
   it('Тестирование  изменение цвета элементов центрального блока: 2 элемент', function () {
        var colorcentrelemangul = mainPage.menuCenterButtons.get(1).getCssValue('color');
        browser.actions().mouseMove(mainPage.menuCenterButtons.get(1)).perform();
        var colorcentrelemangulnew = mainPage.menuCenterButtons.get(1).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });
    it('Тестирование  изменение цвета элементов центрального блока: 3 элемент', function () {
        var colorcentrelemangul = mainPage.menuCenterButtons.get(2).getCssValue('color');
        browser.actions().mouseMove(mainPage.menuCenterButtons.get(2)).perform();
        var colorcentrelemangulnew = mainPage.menuCenterButtons.get(2).getCssValue('color');
        expect(colorcentrelemangul).not.toBe(colorcentrelemangulnew);
    });

    it('Проверка левой панели:  1-ый элемент', function () {
        mainPage.menuButtonsLeftLevel1.get(0).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        browser.navigate().back();
    });
    it('Проверка левой панели:  2-ый элемент', function () {
        mainPage.menuButtonsLeftLevel1.get(1).click();
        expect(mainPage.menuButtonsLeftLevel1.get(1).getAttribute('aria-pressed')).toEqual('true');
        mainPage.menuButtonsLeftLevel1.get(1).click();
    });
    it('Проверка левой панели:  3-ый элемент', function () {
        mainPage.menuButtonsLeftLevel1.get(2).click();
        expect(mainPage.menuButtonsLeftLevel1.get(2).getAttribute('aria-pressed')).toEqual('true');
        mainPage.menuButtonsLeftLevel1.get(2).click();
    });
    it('Проверка левой панели:  4-ый элемент', function () {
        mainPage.menuButtonsLeftLevel1.get(3).click();
        expect(mainPage.menuButtonsLeftLevel1.get(3).getAttribute('aria-pressed')).toEqual('true');
        mainPage.menuButtonsLeftLevel1.get(3).click();
    });
    it('Проверка левой панели:  5-ый элемент', function () {
        mainPage.menuButtonsLeftLevel1.get(4).click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/api');
        browser.navigate().back();
    });

    it('Тестирование отображения результата поиска', function () {
        expect(mainPage.resultsearch.isPresent()).toBe(false);
        mainPage.inputSearch.sendKeys('s');
        browser.sleep(2000);
        expect(mainPage.resultsearch.isPresent()).toBe(true);
    });

    it('Тестирование поиска на пустой результат', function () {
        mainPage.inputSearch.sendKeys('dddsfsdfsdf');
        browser.sleep(2000);
        expect(mainPage.resultsearch.getText()).toEqual('No results found.');
        mainPage.inputSearch.sendKeys('');
    });

    it('Тестирование  изсменения поля ввода поиска при вводе строки', function () {
        var sizesearch = mainPage.inputSearch.getSize();
        mainPage.inputSearch.sendKeys('s');
        var sizesearchnew = mainPage.inputSearch.getSize();
        expect(sizesearch).not.toBe(sizesearchnew);
        mainPage.inputSearch.sendKeys('');
    });

    it('Проверка видимости меню при открытии страницы', function () {
        expect(mainPage.menuLeftPanel.isDisplayed()).toBe(true);
    });

    xit('Проверка скрытия меню при нажатии', function () {
        expect(browser.isElementPresent(mainPage.menuLeftPanel)).toBe(true);
        mainPage.buttonMenuOpen.click();
       // expect(browser.isElementPresent(mainPage.menuLeftPanel)).toBe(false);
       // expect(mainPage.menuLeftPanel.isDisplayed()).toBe(false);
    });

    xit('Смена языка', function () {
        mainPage.linkChineseLang.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.cn/');
    });



});