// pages/cv.js
import Head from 'next/head';
import Image from 'next/image';
import './cv.css';

export default function CV() {
    return (
        <div className="container">
            <Head>
                <title>CV Nguyễn Đình Huân</title>
                <meta name="description" content="Trang giới thiệu cá nhân của Nguyễn Đình Huân - Thực Tập Front End" />
            </Head>

            <header className="profileHeader">
                <div className="profilePhoto">
                    <Image
                        src="/FB_IMG_1708104390538.jpg"
                        alt="Ảnh cá nhân Nguyễn Đình Huân"
                        width={150}
                        height={150}
                        className="profileImage"
                    />
                </div>
                <div className="profileInfo">
                    <h1 className="name">Nguyễn Đình Huân</h1>
                    <p className="jobTitle">Thực Tập Front End</p>
                    <div className="contactInfo">
                        <span><i className="fas fa-phone"></i> 0369594026</span>
                        <span><i className="fas fa-envelope"></i> huannguyendinh14@gmail.com</span>
                        <span><i className="fas fa-map-marker-alt"></i> Hiệp Thành City Quận 12 - HCM</span>
                    </div>
                </div>
            </header>

            <main className="mainContent">
                <section className="section">
                    <h2 className="sectionTitle">Mục tiêu nghề nghiệp</h2>
                    <div className="subsection">
                        <h3 className="subsectionTitle">Ngắn hạn</h3>
                        <p>Thực tập sinh tại công ty KMS Technology, đạt đủ chỉ tiêu trong vòng 4 tháng.</p>
                    </div>
                    <div className="subsection">
                        <h3 className="subsectionTitle">Dài hạn</h3>
                        <p>Sau 4 tháng trở thành nhân viên chính thức. Sau 1 năm trở thành trưởng nhóm.</p>
                    </div>
                </section>

                <section className="section">
                    <h2 className="sectionTitle">Kỹ năng chuyên môn</h2>
                    <div className="subsection">
                        <ul>
                            <li>Ngôn ngữ: HTML5 & CSS3, Javascript - ES6, Typescript</li>
                            <li>Thư viện: React, Next JS, Angular, Express, Bootstrap</li>
                            <li>Công cụ: Git, Figma</li>
                        </ul>
                    </div>
                    <h2 className="sectionTitle">Kỹ năng mềm</h2>
                    <div className="subsection">
                        <ul>
                            <li>Kỹ năng làm việc nhóm</li>
                            <li>Kỹ năng thuyết trình - giao tiếp</li>
                            <li>Kỹ năng giải quyết vấn đề</li>
                            <li>Kỹ năng quản lý dự án</li>
                            <li>Kỹ năng tự học cao</li>
                        </ul>
                    </div>
                </section>

                <section className="section">
                    <h2 className="sectionTitle">Dự án</h2>
                    <div className="projectItem">
                        <h3 className="projectTitle">Website Đặt Vé Xem Phim</h3>
                        <p className="projectDate">04/2025 - hiện tại</p>
                        <ul>
                            <li>Công nghệ: HTML CSS, Javascript</li>
                            <li>Thư viện: React, Node JS, Express</li>
                            <li>Thành viên: 4</li>
                        </ul>
                    </div>
                    <div className="projectItem">
                        <h3 className="projectTitle">Website Velosa - Thời Trang</h3>
                        <p className="projectDate">11/2024 - 12/2024</p>
                        <ul>
                            <li>Công nghệ: HTML CSS, Javascript</li>
                            <li>Thư viện: Angular, Express</li>
                            <li>Thành viên: 5</li>
                            <li>Đánh giá: 8.0₫</li>
                            <li><a href="https://github.com/MVC-Velossa.git" target="_blank">Github dự án</a></li>
                        </ul>
                    </div>
                    <div className="projectItem">
                        <h3 className="projectTitle">Website Bán Loa JBL</h3>
                        <p className="projectDate">7/2024 - 2/2025</p>
                        <ul>
                            <li>Công nghệ: HTML CSS, Javascript</li>
                            <li>Thư viện: Express</li>
                            <li>Thành viên: 1</li>
                            <li>Đánh giá: 8.0₫</li>
                            <li><a href="https://githubJBL.git" target="_blank">Github dự án</a></li>
                        </ul>
                    </div>
                </section>

                <section className="section">
                    <h2 className="sectionTitle">Học vấn</h2>
                    <div className="educationItem">
                        <h3 className="educationTitle">Trường Cao Đằng FPT Polytechnic</h3>
                        <p>Chuyên ngành Lập Trình Website</p>
                        <p>Tốt nghiệp loại giỏi với điểm trung bình 8.0</p>
                    </div>
                </section>

                <section className="section">
                    <h2 className="sectionTitle">Sở thích</h2>
                    <ul>
                        <li>Đọc sách</li>
                        <li>Thiết kế UI - UX</li>
                        <li>Theo dõi tin tức Công Nghệ</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}