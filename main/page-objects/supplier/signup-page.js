import { Selector, t } from 'testcafe';
import commonPage from '../common' 

class SignupPage{
	constructor(){
		this.supplier_rb = Selector('label').withExactText('Supplier')
		this.addressLine1_tb = Selector('input[aria-label="Address Line 1"]')
		this.addressLine2_tb = Selector('input[aria-label="Address Line 2"]')
		this.city_tb = Selector('input[aria-label="City"]')
		this.state_tb = Selector('input[aria-label="State"]')
		this.postalCode_tb = Selector('input[aria-label="Postal Code"]')
		this.phone_tb = Selector('input[aria-label="Phone"]')
		this.cardNumber_tb = Selector('input[aria-label="Credit or debit card number"]')
		this.expDate_tb = Selector('input[name="exp-date"]')
		this.cvc_tb = Selector('input[name="cvc"]')
		this.zip_tb = Selector('input[name="postal"]')
		
	}

	async validateSignup(companyName, yourName, emailAddress, password, paymentDetails){
		await t
			.click(commonPage.signup_lnk)
			.click(this.supplier_rb)
			.typeText(commonPage.companyName_tb, companyName, {speed : 0.5})
			.pressKey('down enter', {speed : 0.5})
			.typeText(commonPage.yourName_tb, yourName)
			.typeText(commonPage.emailId_tb, emailAddress)
			.typeText(commonPage.password_tb, password)
			.typeText(this.addressLine1_tb, paymentDetails.addressLine1, {replace : true})
			.typeText(this.addressLine2_tb, paymentDetails.addressLine2, {replace : true})
			.typeText(this.city_tb, paymentDetails.city, {replace : true})
			.typeText(this.state_tb, paymentDetails.state, {replace : true})
			.typeText(this.postalCode_tb, paymentDetails.postalCode, {replace : true})
			.typeText(this.phone_tb, paymentDetails.phone, {replace : true}, {speed : 0.5})
			.switchToIframe(Selector('iframe[title="Secure card payment input frame"]'))
			.typeText(this.cardNumber_tb, paymentDetails.cardNumber)
			.typeText(this.expDate_tb, paymentDetails.expDate)
			.typeText(this.cvc_tb, paymentDetails.cvc)
			.typeText(this.zip_tb, paymentDetails.zip)
			.switchToMainWindow()
			.expect(commonPage.signup_btn.exists).ok('Signup button is not enambled')
			.click(commonPage.signup_btn)
			
	}

}
export default new SignupPage();