import React from 'react'
import { IconButton } from './Home'
import { FaArrowUp19, FaUpwork } from 'react-icons/fa6'
import "./Blog.css"
function Tag({text}){
    return(
        <div id="tags" className='mr-2 text-center text-[0.8rem] pl-1 pr-1 pt-[1px] pd-[2px]  rounded-xl border border-[#2D323B] text-[#616879] ' >#{text}</div>

    )
}



function Card(){


    return(
        <div className='m-3  flex flex-col border bg-[#1C1F26] border-[#2D323B] rounded-xl p-3 max-w-72'>
            <div className='mb-3'><FaArrowUp19 size={30}/></div>
            <div className='text-wrap'>
                <h2 className='text-2xl text-white '>usesfafffa  dsda dssdd ds d sd sd shook</h2>
                
            </div>
            <div className='flex flex-col mt-1 mb-3'>
                <div id="tagcontainer" className='flex'>
                    <Tag text="nam"/>   
                    <Tag text="nam"/>               
                    <Tag text="nam"/>               

            
                </div>
                <div id="time">
                    <span className='text-[0.8rem]'>
                     june 29 2m read
                    </span></div>
            </div>
            <div className='rounded-xl' >
                <img className='rounded-xl' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' ></img>
            </div>
            <div className='mt-1 flex'>
            <IconButton tailwindClass='bg-inherit' buttonType="iconBtn" icon={<FaUpwork/>} ></IconButton>
            <IconButton tailwindClass='bg-inherit' buttonType="iconBtn" icon={<FaUpwork/>} ></IconButton>
            <IconButton tailwindClass='bg-inherit' buttonType="iconBtn" icon={<FaUpwork/>} ></IconButton>


            </div>
        </div>
    )
}




function Blog() {

    const name = [2,4,5,6,5,6,7,8,23.,5.6,4,,,7,8,9,,5,5,5,5,5,5,5,5,,]

  return (
    <div id='cardConatiner' className='items-start justify-center  flex-wrap p-4 overflow-visible min-h-[100vh] max-h-screen min-w-[90vw] flex '>
        {name.map((e)=>(<Card/>))}
    </div>
  )
}

export default Blog