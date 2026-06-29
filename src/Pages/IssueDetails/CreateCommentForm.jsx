import React from "react";
import { useForm } from "react-hook-form";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch } from "react-redux";
import { createComment } from "@/Redux/Comment/Action";

 

const CreateCommentForm=({issueId})=>{
  const dispatch=useDispatch()
     const form=useForm({
        defaultValues:{
            content:"",
        },
    });

    const onSubmit=(data)=>{
        dispatch(createComment({comment:data.content,issueId}))
        console.log("create comment data",data);
    };
    return (
        <div className=" p-2 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
      

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center">
        {/* Project Name */}
        
          
            <Avatar>
              <AvatarFallback className="bg-slate-800 ">A</AvatarFallback>
            </Avatar>
          

          <input
            type="text"
            {...form.register("content", {
              
            })}
            className="w-[20rem] border rounded-md p-2 text-black bg-slate-400 "
            placeholder="your comment"
          />
          {form.formState.errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.content.message}
            </p>
          )}
          

        {/* Submit Button */}
    
            {false? (<div><p>you can create only 3 project with free plan, please upgrade your plan</p></div>):(
        <Button
          type="submit"
          className=" text-black bg-white  hover:bg-blue-600"
        >
          save
        </Button>)}
        
      </form>
    </div>
    )

}

export default CreateCommentForm