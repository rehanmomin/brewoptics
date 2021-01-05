import { Selector, t } from 'testcafe';
import commonPage from '../common' 

class SignupPage{
	constructor(){
		this.retailer_rb = Selector('label').withExactText('Retailer')
		
	}

	async validateSignup(companyName, yourName, emailAddress, password){
		await t
			.click(commonPage.signup_lnk)
			.click(this.retailer_rb)
			.typeText(commonPage.companyName_tb, companyName, {speed : 0.5})
			.pressKey('down enter', {speed : 0.5})
			.typeText(commonPage.yourName_tb, yourName)
			.typeText(commonPage.emailId_tb, emailAddress)
			.typeText(commonPage.password_tb, password)
			.expect(commonPage.signup_btn.exists).ok('Signup button is not enambled')
			.click(commonPage.signup_btn)
			
	}

	async validateFormFields(){
		await t
			.click(commonPage.signup_lnk)
			.click(this.retailer_rb)
			.click(commonPage.companyName_tb)
			.click(commonPage.yourName_tb)
			.click(commonPage.emailId_tb)
			.click(commonPage.password_tb)
			.expect(commonPage.signup_btn.hasAttribute('disabled')).ok('Signup button is enambled when no mandatory field is not entered.')
			
	}

}
export default new SignupPage();