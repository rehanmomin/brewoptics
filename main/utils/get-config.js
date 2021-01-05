var config = require('../../config.json')

function getBaseUrl(env, key){
    return config[env][key]
}

function getConfig(env){
  return config[env]
}

function getTestData(dirname, testfile){
    var commondata, testdata, data, testfile;
    var path = require('path');
    var fs = require('fs');
    var testfile = path.basename(testfile).split('.')[0];
    var datadir = dirname.split(path.sep).pop();
    var env = `${process.env.TEST_ENV}`
    commondata = path.resolve(dirname,'../test-dataset/'+env+'/'+datadir+'/common.json');
    testdata = path.resolve(dirname,'../test-dataset/'+env+'/'+datadir+'/'+testfile+'.json');
    try {
      if (fs.existsSync(testdata)) {
        data = require(path.resolve(dirname,'../test-dataset/'+env+'/'+datadir+'/'+testfile+'.json'))
        data = mergeJson({}, global.globalData, data)
      }
      else if (fs.existsSync(commondata)) {
        commondata = require(path.resolve(dirname,'../test-dataset/'+env+'/'+datadir+'/common.json'))
        data = mergeJson({}, global.globalData, commondata)
      }
      else{
        data = global.globalData;
      }
    } catch(err) {
      console.error(err)
    }
    return data;
}

 function getKey(){
   var test='newtest'
   const Cryptr = require('cryptr');
   const cryptr = new Cryptr(test);
   return cryptr; 
}

function mergeJson(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
}
module.exports = {getBaseUrl, getTestData, getConfig, getKey}

