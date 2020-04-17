export  function debounce(func,delay=500){
    let timer = null
    return function (...arges) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,arges)
        },delay)
    }
}
export default {
    install (Vue) {
        // 防重复点击(指令实现)
        Vue.directive('preventReClick', {
            inserted (el, binding) {
                el.addEventListener('click', () => {
                    if (!el.disabled) {
                        el.disabled = true
                        setTimeout(() => {
                            el.disabled = false
                        }, binding.value || 3000)
                    }
                })
            }
        })
    }
}