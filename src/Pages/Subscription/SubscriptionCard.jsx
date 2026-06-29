import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";

const SubscriptionCard=({data})=>{
    return(
        <div className="rounded-xl bg-black bg-opacity-20 shadow-[#14173b] shadow-xl card p-5 space-y-5 w-[18rem]">
            <p>{data.planName}</p>
            <p>
                <span className="text-xl  font-semibold">₹{data.price}</span>
                <span>/{data.planType}</span>
            </p>
            {data.planType=="ANNUALLY" && <p className="text-green-500">30% off</p>}

            <Button className=" bg-slate-200 text-black">
                {data.buttonName}
            </Button>
            <div>
              { data.fetures.map( (item)=><div key={item} className="flex items-center gap-2">
                    <CheckCircledIcon/>
                    <p>{item}</p>
                </div>)}
            </div>
        </div>
    )
}
export default SubscriptionCard