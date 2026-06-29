    import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { login } from "@/Redux/Auth/Action";


    const Login=()=>{
        const  dispatch=useDispatch()
        const form=useForm({
            defaultValues:{
                email:"",
                password:"",
                
            },
        });
        const onSubmit=(data)=>{
            dispatch(login(data))
            console.log("Login User: ",data)
        };
        return(
            <div>
               
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <label className="block text-sm font-medium mb-1">
                         Login
                        </label>
                   {/* Project Name */}
                   <div >
                        
                        <div className="py-3">
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
                    Login
                   </Button>
    
                </form>
            </div>
        )
    }

    export default Login