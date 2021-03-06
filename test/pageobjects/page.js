/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KeyPressesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get keyPressInput() {
        return $('#target');
     }
    get keyPressResult() {
        return $('p#result');
    }

    async pressAkey (input) {
        await this.keyPressInput.setValue(input);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('key_presses');
    }
}

module.exports = new KeyPressesPage();

