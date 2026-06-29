import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { deleteComment } from "@/Redux/Comment/Action";
import { TrashIcon } from "@radix-ui/react-icons";

import React from "react";
import { useDispatch } from "react-redux";

const CommentCard=({item})=>{
    const dispatch=useDispatch()

    const handleDelete=()=>{
        dispatch(deleteComment(item.id))
    }
    return(
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarFallback className="bg-slate-800">{item.user.fullName[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <p>{item.user.fullName}</p>
                    <p className="font-thin">{item.content}</p>
                </div>
            </div>
            <div>
                <Button onClick={handleDelete} className="rounded-full " variant="ghost" size="icon">
                    <TrashIcon/>
                </Button>
            </div>
        </div>
    )
}

export default CommentCard