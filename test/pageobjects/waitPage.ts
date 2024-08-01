export default class AbstractPage {
    public async waitForSeconds(seconds: number) {
      await browser.pause(seconds * 1000)
    }
  }
  