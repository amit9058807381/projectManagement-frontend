import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";   
import { useState } from "react"; 
import { Input } from "@/components/ui/input";
import ProjectCard from "../Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectS, searchProjectS } from "@/Redux/Project/Action";

const ProjectList = () => {

    const [keyword, setKeyword] = useState("");
    const {project}=useSelector(store=>store)
    const dispatch=useDispatch();

    const tags = ["all", "react", "node", "express", "mongodb", "sql", "docker", "kubernetes"];
    

    const handleFilterCategory = ( value) => {
        console.log(` filter:`, value);
        if(value=="all"){
            dispatch(fetchProjectS({}))
        }else
        dispatch(fetchProjectS({category:value}))
    };

    const handleFilterTags = ( value) => {
        console.log(` filter:`, value);
         if(value=="all"){
            dispatch(fetchProjectS({}))
        }else
        dispatch(fetchProjectS({tag:value}))
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        console.log(`Search value:`, value);
        setKeyword(value);
        dispatch(searchProjectS(value));
    };

  return (
   <>
    <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>

        <section className='filterSelection'>

            <Card className='p-5 sticky top-10'>
                <div className='flex justify-between lr:w-[20rem]'>
                    <p className='text-xl  -tracking-wider'>Filters</p>
                    <Button variant="ghost" size="icon">
                       <MixerHorizontalIcon />
                    </Button>

                </div>
                <CardContent className=' mt-5'>
                
                    <ScrollArea className= 'space-y-7 h-[70vh]'>

                        <div>
                            <h1 className='pb-3 text-gray-400 border-b font-medium'>
                                Category
                            </h1>
                              <div className='pt-5'>
                                <RadioGroup defaultValue="all" onValueChange={(value) => handleFilterCategory( value)}>
                                    <div className='flex items-center gap-2'>
                                        <RadioGroupItem value="all" id="r1"/>
                                        <Label htmlFor="r1">all</Label>
                                    </div>
                                     <div className='flex items-center gap-2'>
                                        <RadioGroupItem value="fullStack" id="r2"/>
                                        <Label htmlFor="r2">Full Stack</Label>
                                    </div>
                                     <div className='flex items-center gap-2'>
                                        <RadioGroupItem value="frontend" id="r3"/>
                                        <Label htmlFor="r3">Frontend</Label>
                                    </div>
                                     <div className='flex items-center gap-2'>
                                        <RadioGroupItem value="backend" id="r4"/>
                                        <Label htmlFor="r4">Backend</Label>
                                    </div>
                                    
                                </RadioGroup> 

                            </div> 
                        </div>

                        <div className="pt-9">
                            <h1 className='pb-3 text-gray-400 border-b font-medium'>
                                Tags
                            </h1>
                              <div className='pt-5'>
                                <RadioGroup  defaultValue="all" onValueChange={(value) => handleFilterTags( value)}>
                                   {tags.map((item)=> <div key={item} className='flex items-center gap-2 '>
                                        <RadioGroupItem value={item} id={`r1-${item}`}/>
                                        <Label htmlFor={`r1-${item}`}>{item}</Label>
                                    </div>)}
                                     
                                    
                                </RadioGroup> 

                            </div> 
                        </div>


                    </ScrollArea>

                </CardContent>

            </Card>


        </section>
        <section className='projectListSection w-full lg:w-[48rem]'>
            <div className='flex gap-2 items-center pb-5 justify-between'>

                <div className='relative p-0 w-full'>
                    <Input 
                    onChange={handleSearchChange}
                    placeholder='Search projects...'
                    className='40% px-9'/>

                    <MagnifyingGlassIcon className="absolute top-3 left-4"/>

                </div>
                

            </div>

            <div>

                <div className="space-y-5 min-h-[74vh]">
                 {
  project.projects
    ?.filter(Boolean)
    .filter((item) =>
      item.name?.toLowerCase().includes(keyword.toLowerCase())
    )
    .map((item) => (
      <ProjectCard key={item.id} item={item} />
    ))
}

                </div>



            </div>


        </section>

    </div>
   </>
  );
}

export default ProjectList;