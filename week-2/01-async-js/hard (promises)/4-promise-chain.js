/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  
  async function sequentialPromises() {
    const startTime = Date.now();
    await waitOneSecond();
    await waitTwoSeconds();
    await waitThreeSeconds();
    const endTime = Date.now();
    console.log(`All promises resolved sequentially after ${endTime - startTime} milliseconds`);
  }
  
  sequentialPromises();
  