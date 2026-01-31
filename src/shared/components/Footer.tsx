import instagramIcon from "../assets/insta.png";

function Footer() {
  return (
    <footer className="bg-black2 text-gray4 mt-auto w-full px-10 py-12">
      <div className="mx-auto max-w-6xl space-y-4">
        <p>© 2026 LIKELION KNU. All rights reserved.</p>
        <p className="text-xs leading-5 whitespace-pre-line">
          {`실습실 : 경기도 용인시 기흥구 강남로 40 강남대학교 후생관 104호
            동아리실 : 경기도 용인시 기흥구 강남로 40 강남대학교 후생관 멋쟁이사자처럼
            프로젝트 개발 : 프로젝트 코어`}
        </p>
        {/* 인스타 아이콘 */}
        <a
          href="https://www.instagram.com/likelion.knu/" // 실제 계정으로 교체
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block opacity-80 transition hover:opacity-100"
        >
          <img
            src={instagramIcon}
            alt="LIKELION KNU Instagram"
            className="h-6 w-6"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
