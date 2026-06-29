import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteProject } from "@/Redux/Project/Action";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";


import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({item}) => {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleDelete=()=>{
        dispatch(deleteProject({projectId:item.id}))
    }
    
  return (
    <Card className="p-5 w-full lg:max-w-3xl bg-gray-800">
        <div className='space-y-5 '>
            <div className='space-y-2 '>
               <div className="flex justify-between ">
                 <div className='flex items-center gap-2'>
                    <h1 onClick={()=>navigate("/project/"+item.id)} className='cursor-pointer font-bold text-lg text-white'>{item.name}</h1>
                    <DotFilledIcon />
                    <p className='text-sm text-gray-400'>{item.category}</p>
                 </div>
                 <div>
                 <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button>
                            <DotsVerticalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>update</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>

                 </DropdownMenu>
                 </div>

               </div>
                <p className="text-sm text-gray-400 text-start">
                 {item.description}
            </p>
            </div>
            <div className='flex flex-wrap gap-2 items-center'>
                {
                   item.tags?.map((tag)=> <Badge key={tag} className="cursor-pointer" variant="outline">{tag}</Badge>) 
                }


            </div>
           
        </div>
    </Card>

  );
}

export default ProjectCard;