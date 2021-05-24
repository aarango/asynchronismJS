const someAsync = () => {
  return new Promise((resolve, reject) => {
    (true) ? 
      setTimeout(() => {
        resolve('coorrecct')
      }, 2000)
      :  reject(new Error('text Error'))
  })
}

const someAsyncResolve = async () => {
  const someTime = await someAsync()
  console.log(someTime)
}

console.log('after')
someAsyncResolve()
console.log('before')