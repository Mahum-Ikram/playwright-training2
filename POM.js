const { test, expect } = require('@playwright/test');

//Store following items in data file
const toDolist= [
'How to install Playwright',
'What\'s Installed',
'How to run the example test',
'How to open the HTML test report'
]

exports.storeElement = class storeElement{

constructor(page){

    this.page= page
    this.getStartedOpt= page.locator('[class="getStarted_Sjon"]');
}

//go to playwright.dev
async goToPlaywrightScreen(){
    await this.page.goto('https://playwright.dev/')
}

//go to getting started 
async goToGetStarted(){
    await this.getStartedOpt.click()
}

async storingElement(){

for (var i = 0; i<4; i++){
    const textContent = await this.page
    .locator('xpath=//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/ul[1]/li')
    .nth(i)
    .textContent();

//check todolist has above list of items
expect(toDolist[i]).toBe(textContent);

}

}}