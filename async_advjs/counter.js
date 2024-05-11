function getNumberReloads() {
    let counter = localStorage.getItem("counter")
    if (counter == null) {
        return 0
    }
    else {
        return counter
    }
}

function incCounter() {
    let counter = localStorage.getItem("counter")
    if (counter == null) {
        localStorage.setItem("counter", 1)
    }
    else {
        reloadcounter = Number(counter)
        localStorage.setItem("counter", reloadcounter + 1)
    }
}

window.onload = function() {
   incCounter()
}
