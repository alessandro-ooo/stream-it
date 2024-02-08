import Navbar from "../Components/Navbar/Navbar"
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";

const Index = () => {
    
    return (
        <Navbar>
            <GoogleButton onClick={() => signIn('google')} />
        </Navbar>
    )
} 

export default Index;