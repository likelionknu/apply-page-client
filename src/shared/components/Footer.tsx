import instagramIcon from "@shared/assets/insta.png";
import likeLionUnivIcon from "@shared/assets/lionuniv.png";
import githubIcon from "@shared/assets/git.png";

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

function SocialIcon({ href, src, alt }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block opacity-80 transition hover:opacity-100"
    >
      <img src={src} alt={alt} className="h-4 w-4 md:h-8 md:w-8" />
    </a>
  );
}

function Footer() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/likelion.knu/",
      src: instagramIcon,
      alt: "LIKELION KNU Instagram",
    },
    {
      href: "https://likelion.university/",
      src: likeLionUnivIcon,
      alt: "LIKELION University",
    },
    {
      href: "https://github.com/likelionknu",
      src: githubIcon,
      alt: "LIKELION KNU GitHub",
    },
  ];

  return (
    <footer className="bg-black2 text-gray4 mt-auto w-full py-4 md:py-12 md:pt-13.75">
      <div className="text-sub1 mx-auto max-w-360 space-y-4 px-12 text-[6px] md:text-[16px]">
        <p className="mb-1 md:mb-5">
          © 2026 LIKELION KNU. All rights reserved.
        </p>

        <p className="text-sub2 mb-2 text-[6px] whitespace-pre-line md:mb-5 md:text-[16px] md:leading-8">
          {`실습실 : 경기도 용인시 기흥구 강남로 40 강남대학교 후생관 104호
동아리실 : 경기도 용인시 기흥구 강남로 40 강남대학교 인사관 5층 멋쟁이사자처럼
POSSIBILITY TO REALITY`}
        </p>

        <div className="flex gap-2 md:gap-5">
          {socialLinks.map((item) => (
            <SocialIcon
              key={item.href}
              href={item.href}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
