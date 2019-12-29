export  function debounce(func,delay=500){
    let timer = null
    return function (...arges) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,arges)
        },delay)
    }
}
