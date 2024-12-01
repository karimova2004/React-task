import React, { useState } from "react";



const Test = (props) => {
    const (theme,setTheme) = props
    return <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>

    aaaa
    <button onclick={()=>setTheme((prev)=>
        if(prev ==="light")
        )}>
    aa
    </button>
    </div>
}













export default CustomButton;