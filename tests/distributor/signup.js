/*  Description: 
    validate Distributor Signup Flow
*/
import { Selector, t } from 'testcafe';
import distributorSignupPage from '../../main/page-objects/distributor/signup-page.js' 
import commonPage from '../../main/page-objects/common' 


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]
var Fakerator = require("fakerator");
var fakerator = Fakerator();


fixture `Distributor Signup Flow`
  .page `${process.env.HomeURL}` 
  .before( async t => {
    data = config.getTestData(__dirname,__filename)
  })

test
(testfile+': Validate Distributor Signup Flow', async t =>{

  await t.maximizeWindow()
  
  var email = fakerator.internet.email()
  var name = fakerator.names.name()

  await distributorSignupPage.validateSignup(data.companyName, name, email, data.password)
  await commonPage.validateSignout()

});


