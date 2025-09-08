"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
export const SkillLogo = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/data.json"
            )
            .then((res) => {
                setSkills(res.data.skills || []);
            })
            .catch((err) => console.error("Error fetching skills:", err));
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                    <Image src={skill.icon} width={20} height={10} className="h-12 w-12" alt="Icon" />
                </div>
            ))}

        </div >
    )
}

