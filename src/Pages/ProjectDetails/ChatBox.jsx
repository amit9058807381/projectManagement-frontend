import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState,useRef } from "react";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatByProject, fetchChatMessage, sendMessage } from "@/Redux/Chat/Action";
import { useParams } from "react-router-dom";

const ChatBox=()=>{
    const [message,setMessage]=useState("");
    const {auth,chat}=useSelector(store=>store)
    const dispatch=useDispatch();
    const {id}=useParams()
    const scrollRef = useRef(null);
    console.log("id id:",chat.chat?.id)
    console.log("id hai:",id)
    useEffect(() => {
  scrollRef.current?.scrollIntoView({ behavior: "smooth" });
}, [chat.messages]);

    useEffect(()=>{
        dispatch(fetchChatByProject(id))
    },[id])

    useEffect(()=>{
        console.log("useEffect fired");
        dispatch(fetchChatMessage(chat.chat?.id))
    },[chat.chat?.id])

    const handleSendMessage=()=>{
        dispatch(sendMessage({
            senderId:auth.user?.id,
            projectId:id,
            content:message,
        }))
         setMessage("");   
        console.log("message",message)
    }
    const handleMessageChange=(e)=>{
        setMessage(e.target.value)
    }

    return(
        <div className="sticky">
            <div className="border rounded-lg">
                <h1 className="border-b p-5 text-gray-400">Chat Box</h1>
                <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
                    {chat.messages?.map((item,index)=>(
                    item.sender.id !=auth.user?.id?<div className="flex gap-2 mb-2 justify-start" key={item}>
                        <Avatar>
                           <AvatarFallback className="bg-slate-700">{item.sender.fullName[0]}</AvatarFallback>
                        </Avatar> 
                         <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl text-left bg-slate-800">
                            <p>{item.sender.fullName}</p>
                            <p className="text-gray-300">{item.content}</p>
                         </div>
                       
                    </div>:
                    <div className="flex gap-2 mb-2 justify-end" key={item}>
                        
                         <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl text-left bg-slate-800 ">
                            <p>{item.sender.fullName}</p>
                            <p className="text-gray-300">{item.content}</p>
                         </div>
                         <Avatar>
                           <AvatarFallback className='bg-slate-800'>{item.sender.fullName[0]}</AvatarFallback>
                         </Avatar> 
                       
                    </div>
                    )
                )}
                <div ref={scrollRef} />
                </ScrollArea>
                <div className="relative p-0">
                    <Input
                    placeholder="type a message"
                    className="py-7 border-t outline-none focus:outline-none 
                    focus:ring-0 rounded-none border-b-0 border-x-0"
                     value={message}
                     onChange={handleMessageChange}
                     />
                     <Button onClick={handleSendMessage} 
                     className="absolute right-2 top-3 rounded-full"
                     size="icon"
                     variant="ghost">
                        <PaperPlaneIcon/>
                     </Button>
                </div>
            </div>
        </div>
    )
}
export default ChatBox