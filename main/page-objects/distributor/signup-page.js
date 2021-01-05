import { Selector, t } from 'testcafe';
import commonPage from '../common' 

class SignupPage{
	constructor(){
		this.distributor_rb = Selector('label').withExactText('Distributor')
	}

	async validateSignup(companyName, yourName, emailAddress, password){
		await t
			.click(commonPage.signup_lnk)
			.click(this.distributor_rb)
			.typeText(commonPage.companyName_tb, companyName, {speed : 0.5})
			.pressKey('down enter', {speed : 0.5})
			.typeText(commonPage.yourName_tb, yourName)
			.typeText(commonPage.emailId_tb, emailAddress)
			.typeText(commonPage.password_tb, password)
			.expect(commonPage.signup_btn.exists).ok('Signup button is not enambled')
			.click(commonPage.signup_btn)
			
	}
}
export default new SignupPage();