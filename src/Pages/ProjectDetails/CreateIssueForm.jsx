import React from "react";
import { useForm } from "react-hook-form";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { createIssue } from "@/Redux/Issue/Action";
import { useParams } from "react-router-dom";

const CreateIssueForm=({status})=>{
  const dispatch=useDispatch();
  const {id}=useParams();
    const form=useForm({
        defaultValues:{
            issueName:"",
            description:""
        },
    });

    const onSubmit=(data)=>{
        
        
        dispatch(createIssue({
        title:data.issueName,
        description:data.description,
        projectID:id,
        status:status

        
        }))
    };
    return (
        <div className=" p-2 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
      

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Issue Name
          </label>
          <input
            type="text"
            {...form.register("issueName", {
              required: "issueName",
            })}
            className="w-full border rounded-md p-2 text-black"
            placeholder="Write Issue"
          />
          {form.formState.errors.issueName && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.issueName.message}
            </p>
          )}
        </div>  

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            {...form.register("description", {
              required: "Description is required",
            })}
            className="w-full border rounded-md p-2 text-black"
            rows={4}
            placeholder="Enter project description"
          />
          {form.formState.errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.description.message}
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
          Create Issue
        </Button>)}
        </DialogClose>
      </form>
    </div>
    )
}

export default CreateIssueForm