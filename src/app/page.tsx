"use client"
import React, { useCallback, useEffect, useState } from "react";
import ContactComponent from "../../components/contact/contact";
import IntroduceComponent from "../../components/introduce/introduce";
import PurchaseInformation from "@/components/purchaseInformation";
import Loading from "@/components/loading";
import { Save, View } from "@/services/page";

export default function ProfileCard() {
    const [page, setPage] = useState<string | boolean>("loadding");
    // ban đầu không dùng window → mặc định false
    const [isMobile, setIsMobile] = useState(false);

    // Chạy sau khi component mount trên client
    useEffect(() => {
        // set giá trị ban đầu
        setIsMobile(window.innerWidth <= 480);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Load Page
    useEffect(() => {
        const checkPage = View();
        setPage(!checkPage ? "introduce" : checkPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // không phụ thuộc vào page để tránh loop

    const HandlePage = useCallback((page: string) => {
        Save(page);
        setPage(page);
    }, []);

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
                <img src="/street-fighter-logo-2560x1080-24003.jpg" alt="" />

                <div id="welcomeContainer_blcok1_avatar">
                    <img src="/unnamed.jpg" alt="/img.jpg" />
                </div>
            </div>

            <div id="welcomeContainer_blcok2">
                <div id="welcomeContainer_blcok2_text1">Nguyen Dinh Huan</div>
                <div id="welcomeContainer_blcok2_text2">Developer</div>
            </div>

            <div id="welcomeContainer_blcok3">
                <div
                    id="welcomeContainer_blcok3_block"
                    onClick={() => HandlePage("introduce")}
                    style={{
                        borderBottom:
                            page === "introduce"
                                ? "2px solid rgb(206, 192, 189)"
                                : "2px solid rgba(255, 255, 255, 1)",
                        cursor: "pointer",
                    }}
                >
                    Introduce
                </div>

                <div
                    id="welcomeContainer_blcok3_block"
                    onClick={() => HandlePage("contact")}
                    style={{
                        borderBottom:
                            page === "contact"
                                ? "2px solid rgb(206, 192, 189)"
                                : "2px solid rgba(255, 255, 255, 1)",
                        cursor: "pointer",
                    }}
                >
                    Contact
                </div>

                <div
                    id="welcomeContainer_blcok3_block"
                    onClick={() => HandlePage("buyAndSell")}
                    style={{
                        borderBottom:
                            page === "buyAndSell"
                                ? "2px solid rgb(206, 192, 189)"
                                : "2px solid rgba(255, 255, 255, 1)",
                        cursor: "pointer",
                    }}
                >
                    Business
                </div>
            </div>

            <div id="welcomeContainer_blcok4">
                <div id="welcomeContainer_blcok4">
                    {page === "introduce" && <ContactComponent />}
                    {page === "contact" && <IntroduceComponent />}
                    {page === "buyAndSell" && <PurchaseInformation />}
                    {page === "loadding" && <Loading />}
                </div>
            </div>
        </div>
    );
}
