export class GitSearchAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('git-search-app-app h1')).getText();
  }
}
