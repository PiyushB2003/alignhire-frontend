import { BarChart3, BrainCircuit, Sparkles, Users } from 'lucide-react';
import React from 'react'

const AuthIntro = () => {
    return (
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
                        icon={<BarChart3 size={18} />}
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
    )
}

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

export default AuthIntro