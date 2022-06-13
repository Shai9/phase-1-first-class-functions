const  receivesAFunction = callBack => callBack()

function returnsANamedFunction() {
return function javaBeans() {
 console.log('javaBeans')
  }
}

function  returnsAnAnonymousFunction() {
   return () => console.log ('hang around')
   } 
 
