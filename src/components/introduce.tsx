"use client"

import { useEffect, useState } from "react";

const data = [
    { title: 'Name', content: 'Nguyen Dinh Huan' },
    { title: 'Birthday', content: '28/04/2005' },
    { title: 'Address', content: 'Ho Chi Minh City' },
    { title: 'Occupation', content: 'Software Development' },
];

interface dataInpomationType {
    title: string,
    content: string
}

export default function ContactComponent() {
    const [dataInpomation, setDataInpomation] = useState<dataInpomationType[]>([]);
    useEffect(() => {
        setDataInpomation(data);
    }, []);

    return (
        <div id="ContactComponent_body">
            {
                dataInpomation.map((value, index) => {
                    return (
                        <div id="ContactComponent_body_block" key={index}>
                            <div id="ContactComponent_body_block_Title">{value.title}</div>
                            <div id="ContactComponent_body_block_textContent">{value.content}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
