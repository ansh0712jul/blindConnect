const fileformat = (url="") =>{
    const fileexe=url.split('.').pop();

    if(fileexe==="mp4" ||fileexe==="webm" || fileexe=== "ogg" ) return "video"
    if(fileexe==="mp3" ||fileexe==="wav") return "audio"
    if(fileexe==="png" ||fileexe==="jpg" || fileexe=== "jpeg" || fileexe=== "gif" ) return "image"

    return "file"



}

const transformImage=(url="",width=100)=>{}

export { fileformat, transformImage }