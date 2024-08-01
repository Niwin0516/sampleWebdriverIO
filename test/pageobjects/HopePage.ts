import AbstractPage from './waitPage'

class HomePage extends AbstractPage{
    public get loginPage(){
        return $('#form')
    }
    public get usernameField(){
        return $('#username')
    }
    public get passwordField(){
        return $('#password')
    }
    public get buttonSubbmit(){
        return $('#submit')
    }
    public get errorMessage(){
        return $('#error')
    }
    public get loginSuccess(){
        return $('h1.post-title')
    }

    public async visit(){
        await browser.url('https://practicetestautomation.com/practice-test-login/')
    }

    //Function
    public async verifyLoginPageShow(){
        (await this.loginPage).waitForDisplayed()
    }

    public async login(username: string, password: string){
        await this.usernameField.setValue(username)
        await this.passwordField.setValue(password)
        await this.buttonSubbmit.click()
    }
    public async verifyLogin(){
        await expect(this.loginSuccess).toHaveText(
            'Logged In Successfully'
        )
    }
    
    public async assertErrorMessage(){
        await expect(this.errorMessage).toHaveText(
            'Your username is invalid!'
        )
    }
}

export default new HomePage()