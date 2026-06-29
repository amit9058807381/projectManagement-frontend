import React from "react";
import SubscriptionCard from "./SubscriptionCard";




const Subscription=()=>{
    
const paidPlane=[
    "Add unlimited Project",
    "Access to live chat",
    "Advance Reporting"
];
const annualPlan=[
    "Add unlimited Project",
    "Access to live chat",
    "Advance Reporting"
]
const freePlan=[
    "Add only 3 project",
    "Basic Task Mnagement",
]
    
    return (
        <div className="p-10">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center text-white">Pricing</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-9 text-white">
                <SubscriptionCard 
                data={
                    {planName:"Free",
                    fetures:freePlan,
                    planType:"FREE",
                    price:0,
                    buttonName:true?"Current Plan":"Get Started"}}/>
                <SubscriptionCard
                data={
                    {planName:"Monthly Paid Plan",
                    fetures:paidPlane,
                    planType:"MONTHLY",
                    price:799,
                    buttonName:true?"Current Plan":"Get Started"}}/>
                <SubscriptionCard
                data={
                    {planName:"Annual Paid Plan",
                    fetures:annualPlan,
                    planType:"ANNUALLY",
                    price:6711,
                    buttonName:true?"Current Plan":"Get Started"}}/>
            </div>
        </div>
    )
}
export default Subscription