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
    FileText,
    BarChart3,
    Users,
    Sparkles,
    BrainCircuit,
} from "lucide-react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
                {/* LEFT SECTION */}
                <div className="hidden lg:flex flex-col justify-center px-16">
                    <div className="max-w-md space-y-6">
                        {/* Title */}
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white">
                                <BrainCircuit size={24} />
                            </div>
                            <h1 className="text-2xl font-semibold">ATS Resume Analyzer</h1>
                        </div>

                        <p className="text-gray-600 text-xl whitespace-nowrap">
                            Streamline your hiring process with intelligent resume analysis
                        </p>

                        {/* Features */}
                        <div className="space-y-6">
                            <Feature
                                icon={<BarChart3 size={18}/>}
                                title="Advanced Analytics"
                                desc="Get detailed insights into resume quality and ATS compatibility scores"
                                color="bg-blue-100 text-blue-600"
                            />
                            <Feature
                                icon={<Users size={18} />}
                                title="Bulk Processing"
                                desc="Upload and analyze multiple resumes simultaneously for efficient screening"
                                color="bg-purple-100 text-purple-600"
                            />
                            <Feature
                                icon={<Sparkles size={18} />}
                                title="Smart Recommendations"
                                desc="Receive actionable feedback to improve resume quality and matching"
                                color="bg-green-100 text-green-600"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex items-center justify-center">
                    <Card className="w-full max-w-md shadow-2xl">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl">Welcome Back</CardTitle>
                            <CardDescription>Sign in to your ATS dashboard</CardDescription>
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
                                        <a className="ml-auto text-sm hover:underline" href="#">
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="bg-[#F3F3F5] border-none"
                                    />
                                </div>
                            </form>
                        </CardContent>

                        <CardFooter className="flex-col gap-4">
                            <Button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white">
                                Sign In
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
                                Don&apos;t have an account?{" "}
                                <a
                                    className="text-blue-600 font-semibold hover:underline"
                                    href="#"
                                >
                                    Sign Up
                                </a>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const Feature = ({ icon, title, desc, color }) => (
    <div className="flex gap-4 items-center">
        <div
            className={`h-10 w-13 flex items-center justify-center rounded-lg ${color}`}
        >
            {icon}
        </div>
        <div>
            <h3 className="font-semibold text-[18px] text-gray-600">{title}</h3>
            <p className="text-[16px] text-gray-600">{desc}</p>
        </div>
    </div>
);

export default Login;
