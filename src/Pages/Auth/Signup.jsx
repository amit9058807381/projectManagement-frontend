    import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { register } from "@/Redux/Auth/Action";


    const Signup=()=>{
        const dispatch=useDispatch()
        const form=useForm({
            defaultValues:{
                email:"",
                password:"",
                fullName:"",
            },
        });
        const onSubmit=(data)=>{
            dispatch(register(data))
            console.log("Signup User: ",data)
        };
        return(
            <div>
               
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <label className="block text-sm font-medium mb-1">
                         Register
                        </label>
                   {/* Project Name */}
                   <div className="py-3">
                        
                        <div>
                        <input
                           type="email"
                           {...form.register("email", {
                           required: " please enter email",
                           })}
                           className="w-full border rounded-md p-2 text-white bg-slate-900"
                           placeholder="Enter user email"
                        />
                        {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                        </p>
                        )}
                        </div>
                        <div className="py-2">
                         <input
                           type="text"
                           {...form.register("fullName", {
                           required: "please enter fullName",
                           })}
                           className="w-full border rounded-md p-2 text-white bg-slate-900"
                           placeholder="Enter Full Name"
                        />
                        {form.formState.errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.fullName.message}
                        </p>
                        )}
                        </div>

                         <input
                           type="password"
                           {...form.register("password", {
                           required: "please enter password",
                           })}
                           className="w-full border rounded-md p-2 text-white bg-slate-800"
                           placeholder="password"
                        />
                        {form.formState.errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.password.message}
                        </p>
                        )}
                    </div> 


                     {/* Submit Button */}
        
                    
                    <Button
                     type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                     >
                    Register
                   </Button>
    
                </form>
            </div>
        )
    }

    export default Signup