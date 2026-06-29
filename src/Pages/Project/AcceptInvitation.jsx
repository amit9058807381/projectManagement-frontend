import { Button } from "@/components/ui/button"
import { acceptInvitation } from "@/Redux/Project/Action"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"


const AcceptInvitation=()=>{
    const dispatch=useDispatch()
    const location=useLocation();
    const navigate=useNavigate()
    const handleAcceptInvitation=()=>{
        const urlParams=new URLSearchParams(location.search);
        const token=urlParams.get('token');
        dispatch(acceptInvitation({token,navigate}))
    }
    return(
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <h1 className="py-5 font-semibold text-xl text-gray-300">
                You are invited to join the Project.
            </h1>
            <Button onClick={handleAcceptInvitation} className="bg-red-300 text-black">
                Accept Invitation
            </Button>
        </div>
    )
}

export default AcceptInvitation