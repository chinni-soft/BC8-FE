// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("googleLogin",(username, password)=>{
    const cookieName = Cypress.env('cookieName')
    const socialLoginOptions = {
        username,
        password,
        loginUrl: Cypress.env('loginUrl'),
        headless: true,
        logs: true,
        loginSelector: 'button',
        isPopup: true,
        postLoginSelector: '.MuiGrid-container',
        args: ['--disable-web-security', '--user-data-dir', '--allow-running-insecure-content'],
        screenshotsPathWhenFailed: './debug',
        popupDelay: '5000',
        cookieDelay: 300
    }
    cy.task('RayShieldLogin', socialLoginOptions).then(({ssd, cookies}) => {
        cy.clearCookies()
        const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
        if (cookie) {
            cy.setCookie(cookie.name, cookie.value, {
                domain: cookie.domain,
                expiry: cookie.expires,
                httpOnly: cookie.httpOnly,
                path: cookie.path,
                secure: cookie.secure
            })

            Cypress.Cookies.defaults({
                whitelist: cookieName
            })
        }
        window.sessionStorage.setItem('idToken', ssd.tokenId);
    })
})
Cypress.Commands.add("googleLogout",()=>{
    cy.clearCookies();
    sessionStorage.setItem('idToken', undefined);
})
