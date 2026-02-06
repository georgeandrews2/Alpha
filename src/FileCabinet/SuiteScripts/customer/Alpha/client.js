/**
* @NApiVersion 2.1
* @NScriptType ClientScript
* @author George Andrews (SuiteRep)
*/

define(['N/runtime'], function (runtime) {

  function validateLine(context) {
    try {
      console.log('validateLine');
      return true;
    } catch (e) {
      console.log('Error in validateLine: ' + e.name, e.message);
      console.log('Error in validateLine: ', e.stack);
      return true;
    }
  }

  return { validateLine };

});