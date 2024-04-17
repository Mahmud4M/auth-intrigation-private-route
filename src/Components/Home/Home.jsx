import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div className="container mx-auto px-24 pt-5">
            <h1 className="text-3xl">This is Home {authInfo.name}</h1>
        </div>
    );
};

export default Home;