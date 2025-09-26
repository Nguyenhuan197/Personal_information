"use client"
import { JSX, useEffect, useState } from "react";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const data = [
    { icon: <FaFacebookSquare />, content: 'Page Z Mobile', url: 'https://www.facebook.com/share/15r8HMyQ7K/' },
    { icon: <SiShopee />, content: 'Z Mobile', url: 'https://Shopee.vn/hunnguynnh030' },
    { icon: <FaTiktok />, content: 'Z Mobile', url: 'https://www.tiktok.com/@zmobile98' },
];

interface DataInformationType {
    icon: JSX.Element;
    content: string;
    url: string;
}

export default function PurchaseInformation() {
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
