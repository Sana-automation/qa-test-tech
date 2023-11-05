/// <reference types="cypress" />

import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

const URL = "https://www.independent.co.uk/extras/indybest/gadgets-tech/video-games-consoles/nintendo-switch-2-price-release-date-rumours-b2386412.html";
const agree1 = "button[title='AGREE']"
Given(/^I navigate to home page$/, () => {
    cy.visit(URL);
});

When(/^I enter username as "([^"]*)"$/, (args1) => {
    cy.get("#login-form-email").type(args1);
});

When(/^I enter password as "([^"]*)"$/, (args1) => {
    cy.get("#login-form-password").type(args1);
});

Then(/^I validate user redirect correct URL$/, function () {
    cy.url().should('eq', 'https://www.independent.co.uk/extras/indybest/gadgets-tech/video-games-consoles/nintendo-switch-2-price-release-date-rumours-b2386412.html?loginSuccessful')
});
Then(/^I validate loggedIn cookie$/, function () {
    // cy.getCookie("loggedIn").should('have.value','true')
    cy.getCookie('loggedIn').should('exist')

});
Given(/^i click on submit button$/, function () {
    cy.get("button[name*='submitBtn']").click()
});

When(/^I click on Log in \/ Register button in the top right corner$/, function () {
    cy.get("div[class='sc-9wuc4p-0 sc-9wuc4p-1 hEIYEy cDWrHe'] a:nth-child(2)").click()

});
When(/^I click on agree cookies button$/, function () {

    cy.frameLoaded("#sp_message_iframe_849879");
    cy.iframe('#sp_message_iframe_849879')
        .find(agree1)
        .should('be.visible')
        .click()
    cy.wait(7000)
});
Then(/^I validate Log in \/ Register button replaced with your truncated name$/, function () {
    cy.get("div[class='sc-9wuc4p-0 sc-9wuc4p-1 hEIYEy cDWrHe'] a:nth-child(1)").invoke('text').should('have.value', 'A. QA Test')
});
When(/^I click your truncated name in the top right corner$/, function () {
    cy.get("div[id='frameInner'] li:nth-child(7) a:nth-child(1)").click()
});
When(/^I validate url redirect and log in \/ register button enable$/, function () {
    cy.url().should('eq', 'https://www.independent.co.uk/')
    cy.get("div[class='sc-9wuc4p-0 sc-9wuc4p-1 hEIYEy cDWrHe'] a:nth-child(2)").should('contain.text', 'Log in / Register')
});
When(/^I click on register button$/, function () {
    cy.get("registerLink").click()
});
When(/^I enter "([^"]*)" , "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" to perform registration$/, function () {

});