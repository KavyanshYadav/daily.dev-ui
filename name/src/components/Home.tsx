import React, { useEffect, useRef, useState } from 'react'
import { FaBaby, FaRegBell, FaSearch } from 'react-icons/fa'
import { Fa4 } from 'react-icons/fa6'
import { HiSignal } from 'react-icons/hi2';
import { useNavigate, useNavigation } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import "./Home.css"


interface IconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    buttonType?: 'textBtn' | 'iconBtn';
    tailwindClass?: string;
    icon?: React.ReactElement;
  }
  
  const IconButton: React.FC<IconProps> = ({
    text,
    buttonType = 'textBtn',
    tailwindClass = '',
    icon = <FaBaby />,
    ...buttonProps
  }): React.JSX.Element => {
    if (buttonType === 'textBtn') {
      return (
        <button className={`p-2 font-bold ${tailwindClass}`} {...buttonProps}>
          {text}
        </button>
      );
    }
    if (buttonType === 'iconBtn') {
      return (
        <button
          className={`min-h-full min-w-10 items-center mr-3 justify-center flex ${tailwindClass}`}
          {...buttonProps}
        >
          {React.cloneElement(icon, { size: 25 })}
        </button>
      );
    }
    return <div>ERROR</div>;
  };

interface MyInputProps{
    placeHolder:string,
    ref?:React.RefObject<HTMLInputElement>
}


function MyInput({placeHolder,ref,type="input"}:MyInputProps):React.JSX.Element{

    const inputRef  = useRef<HTMLInputElement>(null);
    const ButtonRef  = useRef<HTMLButtonElement>(null);


    const onfocus = () =>{

       

        
    }

    return(
        <div className='flex flex-row min-h-full'>
            <button ref={ButtonRef} className='pr-4 pl-2 focus:outline-none focus:border-r-0 focus:border-[#2D323B] rounded-l-xl rounded-r-none flex justify-center items-center min-h-full bg-secondary '><FaSearch size={20}/></button>
            <input onFocus={onfocus} className='rounded-r-xl min-h-full min-w-full focus:border-[#2D323B] bg-secondary placeholder-center focus:outline-none' ref={inputRef} placeholder={placeHolder}></input>
           
        </div>
    )
}


function Navbar(){
    return(
        <nav>
            <div className='bg-[#0E1217] border border-[#2D323B] flex p-3 justify-between'>
                <button>logo</button>
                <div className='m-0 p-0 flex-auto ml-52 mr-52 '>

                    <MyInput placeHolder='name'/>
                </div>
                <div className='flex'>
                    <IconButton text='New Post' type="textBtn" tailwindClass='bg-white text-black mr-3'/>
                    <IconButton text='na34' icon={<FaRegBell/>}  type="iconBtn"/>

                    <IconButton text='na34' type="textBtn"/>
                </div>
            </div>
                
        </nav>
    )
}

function NavButtonWIthICon({icon,text="nmae",path="/"}){

    const history = useLocation()
    const [isHovered, setIsHovered] = useState(false);
    const navi = useNavigate()
    const [color,setColor] = useState({}) 

    let nem = ""

    useEffect(() => {
        if (location.pathname == path) {
            setColor({
                backgroundColor:"#2D323B"
            });
        } else {
            setColor({
                backgroundColor:"inherit"
            });
        }
    }, [location.pathname]);
    
    let cls = {
        backgroundColor: color,

       

    }


    return(
        <button
        
        id='sidebarbtn'
        onClick={() => navi(path)} className={`p-1 flex bg-inherit border-none hover:bg-sky-700  rounded-none`} style={color}>
            <div className=' flex justify-center items-center'>
                {<Fa4 size={13}/>}
                <p className='ml-2 text-sm'> {text} </p>
            </div>
        </button>
    )
}




function SiderBar(){

    const navi = useNavigate()

    return(
        <div className='flex flex-col bg-primary border-r border-[#2D323B] min-w-56 max-w-64 min-h-full '>
            Siderbar
            <NavButtonWIthICon text='Home' path='/' onClick={() => alert('Home Button Clicked!')} />
            <NavButtonWIthICon text='Discover' path='/discover'/>
            <NavButtonWIthICon text='Blog'path='/blog'/>
            <NavButtonWIthICon text='Setings'path='/settings'/>
            <NavButtonWIthICon text='Popular' path='/popular'/>

        </div>
    )
}



function BlogHolder(){
    return(
        <div className="flex-1 bg-primary w-screen">
            Blog
        </div>
    )
}




function Home() {
  return (
    <div className=' bg-primary m-0 p-0 min-w-screen min-h-screen  '>
                <BlogHolder/>
      
    </div>
  )
}

export {Home,Navbar,SiderBar,IconButton}


