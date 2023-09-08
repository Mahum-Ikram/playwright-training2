const { test, expect } = require('@playwright/test');
import { storeElement } from './POM.js';

test.only("Second Assignment", async({page}) => {

const Elements = new storeElement(page);

await Elements.goToPlaywrightScreen()
await Elements.goToGetStarted()
await Elements.storingElement()
    
})