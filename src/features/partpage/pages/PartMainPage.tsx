import { useNavigate, useParams } from "react-router-dom";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
// 파트 이미지
import pmImg from "../assets/pm.png";
import deImg from "../assets/de.png";
import beImg from "../assets/be.png";
import feImg from "../assets/fe.png";
// 아이콘 이미지
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import tsIcon from "../assets/ts.png";
import reactIcon from "../assets/react.png";
import type { PartType } from "@shared/types/PartType";
import Button from "@shared/components/Button";

// 타입 정의
interface PartData {
  title: string;
  description: string;
  wishes: string[];
  stacks: { name: string; icon: string }[];
  image: string;
}

// 파트별 상세 정보
const partDetails: Record<string, PartData> = {
  PM: {
    title: "Project Manager",
    description: `PM은 프로젝트의 방향과 속도를 함께 책임지는 역할이에요.\n처음에는 팀이 같은 목표를 바라보도록 문제와 가치를 정의하고, 이후에는 요구사항을 정리해 혼선 없이 구현되게 만들어요. 진행 중에는 일정·우선순위·의존성을 관리하면서 막히는 지점을 먼저 발견하고 해결 루트를 마련합니다.진행되는 프로젝트와 사람, 자원을 관리하면서 누구보다 먼저 아이디어를 도출하고, 사람들을 연결하며 프로젝트를 관리해요.`,
    wishes: [
      "번뜩이는 아이디어를 가진 사람",
      "소통을 좋아하고, 자신있는 사람",
      "문서 작업에 익숙하신 분",
      "발표에 대한 두려움이 없는 분",
    ],
    stacks: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "React", icon: reactIcon },
    ],
    image: pmImg,
  },
  DE: {
    title: "Design",
    description: `백엔드는 웹 개발의 보이지 않는 심장과도 같아요.\n백엔드 파트는 서비스의 핵심 기능을 설계하고 구현해요. API를 설계하고 구현하며 클라이언트와 서버가 원활하게 통신할 수 있게 하고, 데이터베이스를 효율적으로 관리해 서비스의 안정성을 확보할 수 있도록 지원해요. 프로젝트를 통해 실제로 동작하는 서비스를 완성해 보며 단순히 코드를 작성하는 것을 넘어 문제를 해결하는 개발자의 시각을 기르게 됩니다.`,
    wishes: [
      "번뜩이는 아이디어를 가진 사람",
      "소통을 좋아하고, 자신있는 사람",
      "문서 작업에 익숙하신 분",
      "발표에 대한 두려움이 없는 분",
    ],
    stacks: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "React", icon: reactIcon },
    ],
    image: deImg,
  },
  BE: {
    title: "Backend",
    description: `백엔드는 웹 개발의 보이지 않는 심장과도 같아요.\n백엔드 파트는 서비스의 핵심 기능을 설계하고 구현해요. API를 설계하고 구현하며 클라이언트와 서버가 원활하게 통신할 수 있게 하고, 데이터베이스를 효율적으로 관리해 서비스의 안정성을 확보할 수 있도록 지원해요. 프로젝트를 통해 실제로 동작하는 서비스를 완성해 보며 단순히 코드를 작성하는 것을 넘어 문제를 해결하는 개발자의 시각을 기르게 됩니다.`,
    wishes: [
      "논리적인 사고를 가진 사람",
      "데이터베이스에 관심 있는 분",
      "시스템 최적화를 즐기는 분",
      "문서 작업에 익숙하신 분",
    ],
    stacks: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "React", icon: reactIcon },
    ],
    image: beImg,
  },
  FE: {
    title: "Frontend",
    description: `프론트엔드는 웹 애플리케이션의 사용자 인터페이스(UI)를 설계하고 구현하는 분야입니다. 사용자가 직접 상호작용하는 화면을 개발하며, 웹 페이지의 구조와 디자인, 동작을 담당합니다.\nHTML, CSS, JavaScript를 활용해 페이지를 구현하고 사용자 경험을 최적화하는 데 중점을 둡니다. 또한 반응형 디자인과 인터랙션을 적용해 다양한 디바이스에서도 원활하게 동작하도록 합니다. 강남대학교 멋쟁이사자처럼 프론트엔드 파트에서는 HTML, CSS, JavaScript, React로 웹 서비스를 구현하고 사용자 친화적인 환경을 제공합니다.`,
    wishes: [
      `문제를 포기하지 않고\n해결 과정을 즐길 수 있는 분`,
      `실수와 부족함을\n성장으로 바꾸며 끊임없이 도전하는 분`,
      `자발적으로 문제를\n찾고 개선하려고 노력하는 분`,
      `적극적으로 소통하며\n문제를 해결하는 데 관심 있는 분`,
    ],
    stacks: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "React", icon: reactIcon },
    ],
    image: feImg,
  },
};

function PartMainPage() {
  const { part } = useParams<{ part: PartType }>(); // URL 파라미터에서 part 값 가져옴
  const navigate = useNavigate();

  const selectedPart = part?.toUpperCase() ?? "PM"; // 기본값 PM
  const data = partDetails[selectedPart];

  const validParts = Object.keys(partDetails);

  if (!validParts.includes(selectedPart)) {
    navigate("/part/PM", { replace: true }); // 유효하지 않은 파트면 PM으로 리다이렉트
    return null;
  }

  return (
    <div className="bg-black1 text-white1 flex min-h-screen w-full flex-col">
      <Header />
      <main className="w-full grow">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-6 pb-12">
          {/* <div className="mx-auto flex max-w-6xl flex-col items-center"> */}
          {/* 파트 선택 버튼 */}
          <div className="mx-auto mb-16 flex w-[414px] gap-7">
            {Object.keys(partDetails).map((part) => (
              <Button
                variant="part"
                onClick={() => navigate(`/part/${part}`)}
                className={`transition-all duration-300 ${
                  selectedPart === part
                    ? "bg-button-active text-white1 border-blue!"
                    : "hover:bg-black2 hover:border-gray2 hover:shadow-[inset_0_0_10px_rgba(93,226,255,0.4)]"
                }`}
              >
                {part}
              </Button>
            ))}
          </div>

          {/* 파트 콘텐츠 */}

          <div className="flex w-full flex-col items-center gap-15 md:flex-row md:items-start">
            <div className="w-full md:w-[35%]">
              {/* 파트 이미지 */}
              <div className="border-gray3 relative mt-10 aspect-4/5 h-[532px] w-[449px] overflow-hidden rounded-[40px] border shadow-2xl">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full pt-15 md:w-[60%]">
              {/* 파트 제목 및 설명 */}
              <h2 className="from-white1 via-blue to-blue mb-4 bg-linear-to-r bg-clip-text text-[28px] font-bold text-transparent">
                {data.title}
              </h2>
              <div className="text-gray1 mb-12 text-[22px] leading-relaxed break-keep whitespace-pre-wrap">
                {data.description}
              </div>

              <div className="mb-12">
                <h3 className="from-white1 via-blue to-blue mb-4 bg-linear-to-r bg-clip-text text-[24px] font-bold text-transparent">
                  이런 사람을 원해요
                </h3>
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  {/* 파트별 필요 역량 */}
                  {data.wishes.map((wish, idx) => (
                    <div
                      key={idx}
                      className="border-blue bg-black1 text-white2 flex h-[55px] w-[400px] items-center justify-center rounded-[15px] border text-center text-[18px] whitespace-pre-wrap transition-colors"
                    >
                      {wish}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="from-white1 via-blue to-blue mb-4 bg-linear-to-r bg-clip-text text-[24px] font-bold text-transparent">
                  Stack
                </h3>
                <div className="flex gap-2">
                  {/* 파트별 스택 */}
                  {data.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="flex items-center justify-center p-2"
                    >
                      <img
                        src={stack.icon}
                        alt={stack.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default PartMainPage;
