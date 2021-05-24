const somePromise = () => {
  return new Promise((resolve, reject) => {
    if( true ) {
      resolve('Correct Promise')
    } else {
      reject('!Ups problem')
    }
  })
}

somePromise()
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})


const somePromise2 = () => {
  return new Promise((resolve, reject) => {
    if( true ) {
      setTimeout(() => {
        resolve('true')
      },2000)
    } else {
      const error = new Error('woo')
      reject(error)
    }
  })
}

somePromise2()
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})

Promise.all([somePromise2(), somePromise()])
.then((resp) => {
  console.log('resp', resp)
})
.catch((err) => {
  console.error(err)
})
