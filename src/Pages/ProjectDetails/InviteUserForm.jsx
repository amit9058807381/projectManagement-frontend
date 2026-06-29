import React from "react";
import { useForm } from "react-hook-form";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { inviteToProject } from "@/Redux/Project/Action";
import { useParams } from "react-router-dom";

const InviteUserForm=()=>{
    
  const dispatch=useDispatch()
  const {id}=useParams()
    const form=useForm({
        defaultValues:{
            email:"",
        },
    });

    const onSubmit=(data)=>{
      dispatch(inviteToProject({email:data.email,projectId:id}))
        console.log("create project data",data);
    };
    return (
        <div className=" p-2 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
      

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            User Email
          </label>
          <input
            type="email"
            {...form.register("email", {
              required: "email",
            })}
            className="w-full border rounded-md p-2 text-black"
            placeholder="Enter user email"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>   

        {/* Submit Button */}
        <DialogClose>
            {false? (<div><p>you can create only 3 project with free plan, please upgrade your plan</p></div>):(
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Invite User
        </Button>)}
        </DialogClose>
      </form>
    </div>
    )
}

export default InviteUserForm