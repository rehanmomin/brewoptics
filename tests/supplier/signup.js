/*  Description: 
    validate Supplier Signup Flow
*/
import { Selector, t } from 'testcafe';
import supplierSignupPage from '../../main/page-objects/supplier/signup-page' 

var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]
var Fakerator = require("fakerator");
var fakerator = Fakerator();


fixture `Supplier Signup Flow`
  .page `${process.env.HomeURL}` 
  .before( async t => {
    data = config.getTestData(__dirname,__filename)
  })

test
(testfile+': Validate Supplier Signup Flow', async t =>{

  await t.maximizeWindow()
  
  var email = fakerator.internet.email()
  var name = fakerator.names.name()

  await supplierSignupPage.validateSignup(data.companyName, name, email, data.password, data.paymentDetails)
 

});


