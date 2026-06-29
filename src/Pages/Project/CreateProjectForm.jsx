import { DialogClose } from "@/components/ui/dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { createProjectS } from "@/Redux/Project/Action";

const CreateProjectForm = () => {
  const dispatch=useDispatch();
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: ["javascript", "react", "nodejs"],
    },
  });

  const onSubmit = (data) => {
    dispatch(createProjectS(data))
    console.log("Create Project Data:", data);
  };

  return (
    <div className=" p-2 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
      

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Project Name
          </label>
          <input
            type="text"
            {...form.register("name", {
              required: "Project name is required",
            })}
            className="w-full border rounded-md p-2 text-black"
            placeholder="Enter project name"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.name.message}
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

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Category
          </label>
          <input
            type="text"
            {...form.register("category")}
            className="w-full border rounded-md p-2 text-black"
            placeholder="Web Development"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Tags (comma separated)
          </label>
          <input
            type="text"
            defaultValue="javascript,react,nodejs"
            onChange={(e) =>
              form.setValue(
                "tags",
                e.target.value.split(",").map((tag) => tag.trim())
              )
            }
            className="w-full border rounded-md p-2 text-black"
          />
        </div>

        {/* Submit Button */}
        <DialogClose>
            {false? (<div><p>you can create only 3 project with free plan, please upgrade your plan</p></div>):(
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Create Project
        </Button>)}
        </DialogClose>
      </form>
    </div>
  );
};

export default CreateProjectForm;