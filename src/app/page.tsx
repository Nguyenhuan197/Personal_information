"use client"
import React, { useState } from "react";
import ContactComponent from "../../components/contact/contact";
import IntroduceComponent from "../../components/introduce/introduce";




export default function ProfileCard() {
  const [page, setPage] = useState<string>('introduce');



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
          onClick={() => setPage('introduce')}
          style={{
            borderBottom: page === 'introduce' ? "2px solid rgb(206, 192, 189)" : "2px solid rgba(255, 255, 255, 1)",
            cursor: "pointer",
          }}
        >
          Giới thiệu
        </div>


        <div
          id="welcomeContainer_blcok3_block"
          onClick={() => setPage('contact')}
          style={{
            borderBottom: page === 'contact' ? "2px solid rgb(206, 192, 189)" : "2px solid rgba(255, 255, 255, 1)",
            cursor: "pointer",
          }}
        >
          Liên hệ
        </div>

      </div>

      <div id="welcomeContainer_blcok4">
        {
          page === 'introduce'
            ? <ContactComponent />
            : <IntroduceComponent />
        }
      </div>



    </div>

  );
}
