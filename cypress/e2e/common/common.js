/// <reference types="cypress" />

import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep("I want to wait {int} miliseconds", (time) => {
  cy.wait(time);
});
