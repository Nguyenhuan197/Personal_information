



"use client"

import { JSX, useEffect, useState } from "react";
import { FaFacebookSquare, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SiZalo } from "react-icons/si";

const data = [
    { icon: <MdOutlineMarkEmailRead />, content: 'huannguyendinh14@gmail.com', url: 'mailto:huannguyendinh14@gmail.com' },
    { icon: <FaFacebookSquare />, content: 'Nguyễn Huân', url: 'https://www.facebook.com/share/1PyRcAAUsp/' },
    { icon: <SiZalo />, content: '0369594026', url: 'https://zalo.me/0369594026' },
    { icon: <FaGithub />, content: 'Huan Coder 👨‍💻', url: 'https://github.com/Nguyenhuan197' },
    { icon: <FaTiktok />, content: 'Huan IT', url: 'https://www.tiktok.com/@f97.official' },
    { icon: <FaYoutube />, content: 'Huan IT', url: 'https://www.youtube.com/@F97Official' },
];

interface DataInformationType {
    icon: JSX.Element;
    content: string;
    url: string;
}

export default function IntroduceComponent() {
    const [dataInpomation, setDataInpomation] = useState<DataInformationType[]>([]);

    useEffect(() => {
        setDataInpomation(data);
    }, []);

    return (
        <div id="IntroduceComponent_body">
            {dataInpomation.map((value, index) => (
                <a
                    key={index}
                    href={value.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div id="IntroduceComponent_body_block">
                        <div id="IntroduceComponent_body_Icon">{value.icon}</div>
                        <div id="IntroduceComponent_body_block_textContent">
                            {value.content}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
