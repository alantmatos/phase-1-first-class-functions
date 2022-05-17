function receivesAFunction (spy) {
    spy ()

}

function spy () {
    console.log('test')
}


function returnsANamedFunction () {

    console.log('test')
    return returnsANamedFunction
}



function returnsAnAnonymousFunction() {

    console.log('test3')
    return function () { console.log('test4')

    }
}