import moment from "moment";

const fileformat = (url="") =>{
    const fileexe=url.split('.').pop();

    if(fileexe==="mp4" ||fileexe==="webm" || fileexe=== "ogg" ) return "video"
    if(fileexe==="mp3" ||fileexe==="wav") return "audio"
    if(fileexe==="png" ||fileexe==="jpg" || fileexe=== "jpeg" || fileexe=== "gif" ) return "image"

    return "file"



}



const getLast7Days = () => {
    const currentDate = moment();
  
    const last7Days = [];
  
    for (let i = 0; i < 7; i++) {
      const dayDate = currentDate.clone().subtract(i, "days");
      const dayName = dayDate.format("dddd");
  
      last7Days.unshift(dayName);
    }
  
    return last7Days;
  };

export { fileformat,  getLast7Days }