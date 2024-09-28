import { MdLocalFlorist, MdFlashOn, MdPhoto, MdInfo, MdCheckroom, MdSettings, MdCheckBoxOutlineBlank } from 'react-icons/md';

const NavBar = () => {
  
    return (
        
      <div className=" bg-black text-white h-screen w-16 fixed flex justify-center">
       
        <div className="absolute flex flex-col top-0 justify-center m-2">
          <button className="mt-3 mb-5"><MdLocalFlorist size={30} color='green' /></button>
          <button className="my-2"><MdFlashOn color='gray' size={24} /></button>
          <button className="my-2"><MdPhoto color='gray' size={24} /></button>
          <button className="my-2"><MdInfo color='gray' size={24} /></button>
          <button className="my-2"><MdCheckroom color='gray' size={24} /></button>
        </div>
         
        <div className="absolute flex flex-col bottom-0 justify-center m-2">
          <button className="my-2"><MdSettings color='gray' size={24}/></button>
          <button className="my-2"><MdCheckBoxOutlineBlank color='gray' size={24} /></button>
        </div>
        
      </div>
  )

}

export default NavBar;