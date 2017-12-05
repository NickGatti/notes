function runningAverage() {
    let count = 0
    let accu = 0
    return function ( num ) {
        accu += num
        count++
        return Math.round( accu / count * 100 ) / 100
    }
}

var rAvgSol = runningAverage();
rAvgSol( 10 )

//==========================================
//==========================================
//==========================================

var xhr = new XMLHttpRequest()

xhr.open( 'GET', 'www.someapi.com/theirapi' )
xhr.send()