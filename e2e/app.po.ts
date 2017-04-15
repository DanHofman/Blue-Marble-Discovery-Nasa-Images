import { browser, element, by } from 'protractor';

export class BlueMarblePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('BM-root h1')).getText();
  }
}
