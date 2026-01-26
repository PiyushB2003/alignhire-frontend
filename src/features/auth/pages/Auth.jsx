import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Chromium,
    Linkedin,
} from "lucide-react";
import AuthIntro from "./AuthIntro";
import { useState } from "react";

const Auth = () => {
    const [authType, setAuthType] = useState("login");

    const toggleAuthType = () => {
        setAuthType((prev) => (prev === "login" ? "register" : "login"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
                <AuthIntro />

                <div className="flex items-center justify-center">
                    <AuthCard
                        cardHeader={authType === "login" ? "Welcome Back" : "Create Account"}
                        cardText={
                            authType === "login"
                                ? "Sign in to your ATS dashboard"
                                : "Sign up to start analyzing resumes"
                        }
                        buttonText={authType === "login" ? "Sign In" : "Create Account"}
                        switchAuthText={
                            authType === "login"
                                ? "Don't have an account? "
                                : "Already have an account? "
                        }
                        switchActionText={authType === "login" ? "Sign Up" : "Sign In"}
                        authType={authType}
                        onSwitchAuth={toggleAuthType}
                    />
                </div>
            </div>
        </div>
    );
};


const AuthCard = ({
    cardHeader,
    cardText,
    buttonText,
    switchAuthText,
    switchActionText,
    authType,
    onSwitchAuth,
}) => (
    <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
            <CardTitle className="text-2xl">{cardHeader}</CardTitle>
            <CardDescription>{cardText}</CardDescription>
        </CardHeader>

        <CardContent>
            <form className="space-y-6">
                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                        placeholder="Enter your email"
                        className="bg-[#F3F3F5] border-none"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center">
                        <Label>Password</Label>
                        {
                            authType === "login" &&
                            <a className="ml-auto text-sm hover:underline" href="#">
                                Forgot your password?
                            </a>
                        }

                    </div>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        className="bg-[#F3F3F5] border-none"
                    />
                </div>
                {
                    authType === "register" &&
                    <div className="space-y-2">
                        <Label>Confirm password</Label>
                        <Input
                            type="password"
                            placeholder="Confirm your password"
                            className="bg-[#F3F3F5] border-none"
                        />
                    </div>
                }
            </form>
        </CardContent>

        <CardFooter className="flex-col gap-4">
            <Button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white">
                {buttonText}
            </Button>

            {/* Divider */}
            <div className="flex w-full items-center">
                <div className="grow border-t" />
                <span className="mx-3 text-xs text-gray-500 uppercase">
                    or continue with
                </span>
                <div className="grow border-t" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 w-full">
                <Button variant="outline" className="gap-2">
                    <Chromium size={16} /> Google
                </Button>
                <Button variant="outline" className="gap-2">
                    <Linkedin size={16} /> LinkedIn
                </Button>
            </div>

            <p className="text-sm">
                {switchAuthText}
                <span
                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        onSwitchAuth();
                    }}
                >
                    {switchActionText}
                </span>
            </p>
        </CardFooter>
    </Card>
)

export default Auth;
