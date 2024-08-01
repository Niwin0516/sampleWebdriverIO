import HomePage from "../pageobjects/HopePage";
import allure from '@wdio/allure-reporter';

describe('Login', () =>{
    it('should not be able to login with invalid username and password', async() =>{
        allure.addFeature('Login');
        allure.addSeverity('critical');
        await HomePage.visit()
        await HomePage.login(
            'invalid-username', 
            'invalid-password'
        )
        await HomePage.assertErrorMessage()
        await HomePage.waitForSeconds(3)
    })
    it('should be able to login with valid username and password', async() =>{
        await HomePage.visit()
        await HomePage.login(
            'student', 
            'Password123'
        )
        await HomePage.verifyLogin()
        await HomePage.waitForSeconds(3)
    })
})