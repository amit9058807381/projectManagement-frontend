import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssues } from "@/Redux/Issue/Action";
import { useParams } from "react-router-dom";



const IssueList=({title,status})=>{

    const dispatch=useDispatch();
    const  {id}=useParams()
    const {issue}=useSelector(store=>store)
    console.log("Redux Issues => ", issue.issues);

    useEffect(()=>{
        dispatch(fetchIssues(id))
    },[id])
    return(
       <div>

        <Dialog>
            <Card className="w-full md:w-[150px] lg:w-[200px]">
                <CardHeader>
                    <CardTitle className="text-gray-400">{title}</CardTitle>
                </CardHeader>
                <CardContent className="px-2 text-gray-400">
                    <div className="space-y-2 text-gray-800">
                       {issue.issues.filter(issue=>issue.status==status).map((item)=>  <IssueCard projectID={id} item={item} key={item.id}/>)}
                    </div>
                </CardContent>
                <CardFooter>
                    <DialogTrigger>
                        <Button variant="outline"  className="w-full flex items-center text-gray-300 py-2 rounded-md  font-light">
                            <PlusIcon/>
                            Create Issue</Button>
                    </DialogTrigger>
                </CardFooter>
            </Card>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-gray-400'>
                        Create new Issue
                    </DialogTitle>
                </DialogHeader>
                <CreateIssueForm status={status}/>
            </DialogContent>
        </Dialog>


       </div>
    )
}

export default IssueList