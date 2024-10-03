function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved: Operation successful after 500ms");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected: Operation failed after 500ms");
        }, 500);
    });
}

const delayedSuccess = () => {
    setTimeout(() => {
    let success = {'message': 'delayed success!'}
    console.log(success);
    }, 500)
}
    
const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
            } catch (e) {
            console.error(e);
            }
    }, 500)
}
    

resolvedPromise()
    .then(result => console.log(result))   
    .catch(error => console.log(error));   


rejectedPromise()
    .then(result => console.log(result))   
    .catch(error => console.log(error)); 
      
delayedSuccess()
delayedException()