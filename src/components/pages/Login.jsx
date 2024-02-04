import Header from "../Login/Header"
import Login from "../Login/Login"
export default function LoginPage(){
    return(
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </div>
        </div>
    )
}
