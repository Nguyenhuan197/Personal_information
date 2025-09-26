"use client"
import React, { useCallback, useEffect, useState } from "react";
import ContactComponent from "../../components/contact/contact";
import IntroduceComponent from "../../components/introduce/introduce";
import PurchaseInformation from "@/components/purchaseInformation";
import Loading from "@/components/loading";
import { Save, View } from "@/services/page";



export default function ProfileCard() {
    const [page, setPage] = useState<string | boolean>('loadding');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    // Loading Display Mobile - Check
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // Load Page
    useEffect(() => {
        const checkPage = View();
        setPage(!checkPage ? 'introduce' : checkPage);
    }, [page]);

    const HandlePage = useCallback((page: string) => {
        Save(page);
        setPage(page);
    }, [])



    if (!isMobile) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                }}
            >
                🚧 Phiên bản chưa phát triển 🚧
                <br />
                Vui lòng mở trên điện thoại
            </div>
        );
    }

    return (
        <div id="welcomeContainer">
            <div id="welcomeContainer_blcok1">
                <img src="/pexels-asadphoto-3601453.jpg" alt="" />

                <div id="welcomeContainer_blcok1_avatar">
                    <img src="/zzz.jpg" alt="/img.jpg" />
                </div>
            </div>

            <div id="welcomeContainer_blcok2">
                <div id="welcomeContainer_blcok2_text1">Nguyễn Đình Huân</div>
                <div id="welcomeContainer_blcok2_text2">Developer</div>
            </div>

            <div id="welcomeContainer_blcok3">
                <div
                    id="welcomeContainer_blcok3_block"
                    onClick={() => HandlePage('introduce')}
                    style={{
                        borderBottom: page === 'introduce' ? "2px solid rgb(206, 192, 189)" : "2px solid rgba(255, 255, 255, 1)",
                        cursor: "pointer",
                    }}
                >
                    Giới thiệu
                </div>


                <div
                    id="welcomeContainer_blcok3_block"
                    onClick={() => HandlePage('contact')}
                    style={{
                        borderBottom: page === 'contact' ? "2px solid rgb(206, 192, 189)" : "2px solid rgba(255, 255, 255, 1)",
                        cursor: "pointer",
                    }}
                >
                    Liên hệ
                </div>


                <div
                    id="welcomeContainer_blcok3_block"
                    onClick={() => HandlePage('buyAndSell')}
                    style={{
                        borderBottom: page === 'buyAndSell' ? "2px solid rgb(206, 192, 189)" : "2px solid rgba(255, 255, 255, 1)",
                        cursor: "pointer",
                    }}
                >
                    Kinh doanh
                </div>

            </div>

            <div id="welcomeContainer_blcok4">
                {
                    <div id="welcomeContainer_blcok4">
                        {page === 'introduce' && <ContactComponent />}
                        {page === 'contact' && <IntroduceComponent />}
                        {page === 'buyAndSell' && <PurchaseInformation />}
                        {page === 'loadding' && <Loading />}
                    </div>
                }
            </div>

        </div>

    );
}
