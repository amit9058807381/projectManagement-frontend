import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import CreateProjectForm from "../Project/CreateProjectForm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Auth/Action";
import AiChatBox from "../Ai/AiChatBox";

const NavBar = () => {
    const {auth}=useSelector(store=>store)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleLogout=()=>{
        dispatch(logout())
    }
  return (
    <div className=' bg-gray-800 border-solid py-4 px-5 flex items-center justify-between '>
        <div className='flex items-center gap-3'>

            <p onClick={()=>navigate("/")} className='cursor-pointer'>Project Management</p>
            <Dialog>

                <DialogTrigger>
                   <Button variant="ghost">
                     New Project
                   </Button>
                </DialogTrigger>
                
               <DialogContent className="max-h-[85vh] overflow-y-auto">
                    

                    <CreateProjectForm />
                </DialogContent>

            </Dialog>

            <Button onClick={()=>navigate("/upgrade_plan")} variant="ghost">
                upgrade
            </Button>

            <Dialog>
               <DialogTrigger asChild>
                    <Button variant="ghost">
                        AI Assistant
                    </Button>
                </DialogTrigger>

                    <DialogContent className="w-screen h-screen max-w-none p-0 flex">
    
                        
                         <AiChatBox />

                    </DialogContent>
            </Dialog>

        </div>
        <div className='flex items-center gap-3'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon" className="rounded-full">
                        
                        <PersonIcon />
                       
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border rounded shadow-md">
                   <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem> 
                </DropdownMenuContent>
            </DropdownMenu>
             <p className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full'>
                {auth.user?.fullName}
            </p>
        </div>

    </div>
  );
};

export default NavBar;