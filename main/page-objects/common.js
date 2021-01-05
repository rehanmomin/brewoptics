import { Selector, t } from "testcafe";


class Common {
  constructor() {
    this.signup_lnk = Selector("a").withExactText("Sign Up");
    this.companyName_tb = Selector("#companySearch");
    this.yourName_tb = Selector('input[aria-label="Your Name"]');
    this.emailId_tb = Selector('input[aria-label="Email Address"]');
    this.password_tb = Selector('input[aria-label="Password"]');
    this.signup_btn = Selector("div.d-flex.justify-center > button");
    this.signout_lnk = Selector("p").withText("Sign Out");
  }

  async validateSignout() {
    await t
      .expect(this.signout_lnk.exists).ok("Signup failed")
      .click(this.signout_lnk)
      .expect(this.signup_lnk.exists).ok("Signout failed");
  }
}
export default new Common();
