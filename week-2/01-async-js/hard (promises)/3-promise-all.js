/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolved after 1 second');
        resolve();
      }, 1000);
    });
  }
  
  function waitTwoSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolved after 2 seconds');
        resolve();
      }, 2000);
    });
  }
  
  function waitThreeSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolved after 3 seconds');
        resolve();
      }, 3000);
    });
  }
  
  async function waitForAllPromises() {
    const startTime = Date.now();
    await Promise.all([waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()]);
    const endTime = Date.now();
    console.log(`All promises resolved after ${endTime - startTime} milliseconds`);
  }
  
  waitForAllPromises();
  