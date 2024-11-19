import React from 'react'
import { transformImage } from '../../lib/features'
import { FileOpen } from '@mui/icons-material'

const Attatchment = ({file , url} ) => {
  if(file==="image") return <img src={transformImage(url,200)} width={"200px"} height={"100px"} style={{objectFit:"contain"}}
   alt="Attatcmen" />
  if(file==="video") return <video src={url} preload='none' width={"200px"} controls />
  if(file==="audio") return <audio src={url} preload='none'  controls />
  return <FileOpen/>
  
}
export default Attatchment