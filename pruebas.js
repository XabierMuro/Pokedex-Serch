const myPromise = () => {
  return new Promise(() => {
    return true
  })
}

myPromise().then(result => 
    console.log(result)
).then().then()

