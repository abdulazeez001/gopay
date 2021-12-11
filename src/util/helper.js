
function changeActiveNav(targets){
    document.querySelectorAll(targets).forEach((data)=>{
        console.log(targets)
        data.addEventListener('click',function(){
    
            document.querySelectorAll(targets).forEach((data)=>{
                data.className=''
            })
            this.className='active'
            
        })
    })
}

export {changeActiveNav}