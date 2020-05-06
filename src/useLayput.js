useLayoutEffect(()=>{
const updateWidth =()=>{
if(mobile !== false && windoe.innerWidth  >767){
setMobile(false)

}
elseif(mobile !== true && windoe.innerWidth  < 768){
setMobile(true)

}}

window.addEventListenr('resizzse', updateWidth)
updateWidth()

return ()=>window.removeEventListenr('resizzse', updateWidth)

},[])
