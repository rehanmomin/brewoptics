/*  Description: 
    validate Retailer Signup Flow
*/
import { Selector, t } from 'testcafe';
import retailerSignupPage from '../../main/page-objects/retailer/signup-page.js' 
import commonPage from '../../main/page-objects/common' 


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]
var Fakerator = require("fakerator");
var fakerator = Fakerator();


fixture `Retailer Signup Flow`
  .page `${process.env.HomeURL}` 
  .before( async t => {
    data = config.getTestData(__dirname,__filename)
  })
  .beforeEach( async t => {
    await t.maximizeWindow()
  });

test
(testfile+': Validate Retailer Signup Flow', async t =>{

  var email = fakerator.internet.email()
  var name = fakerator.names.name()

  await retailerSignupPage.validateSignup(data.companyName, name, email, data.password)
  await commonPage.validateSignout()

});

test
(testfile+': Validate Mandatory fields in form', async t =>{

  
  await retailerSignupPage.validateFormFields()

});


