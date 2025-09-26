"use client"
import { JSX, useEffect, useState } from "react";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { SiShopee, SiZalo } from "react-icons/si";

const data = [
    { icon: <FaFacebookSquare />, content: 'Z Mobile', url: 'https://www.facebook.com/share/15r8HMyQ7K/' },
    { icon: <SiZalo />, content: '0369594026', url: 'https://zalo.me/0369594026' },
    { icon: <SiShopee />, content: 'Z Mobile', url: 'https://Shopee.vn/hunnguynnh030' },
    { icon: <FaTiktok />, content: 'Huan IT', url: 'https://www.tiktok.com/@zmobile98' },
];


interface DataInformationType {
    icon: JSX.Element;
    content: string;
    url: string;
}


export default function BuyAndSell() {
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
