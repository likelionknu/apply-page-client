// part Icon
import pmImg from "@part/assets/pm.png";
import deImg from "@part/assets/de.png";
import beImg from "@part/assets/be.png";
import feImg from "@part/assets/fe.png";

// stack Icon
// pm
import notionIcon from "@part/assets/notion.png";
import figmaIcon from "@part/assets/figma.png";
import docsIcon from "@part/assets/docs.png";
// de
import adobeIcon from "@part/assets/adobe.png";
// be
import javaIcon from "@part/assets/java.png";
import springIcon from "@part/assets/spring.png";
import mariaIcon from "@part/assets/maria.png";
//fe
import htmlIcon from "@part/assets/html.png";
import cssIcon from "@part/assets/css.png";
import jsIcon from "@part/assets/js.png";
import tsIcon from "@part/assets/ts.png";
import reactIcon from "@part/assets/react.png";

export interface PartData {
  title: string;
  description: string;
  wishes: string[];
  stacks: { name: string; icon: string }[];
  image: string;
}

export const partDetails: Record<string, PartData> = {
  PM: {
    title: "Project Manager",
    description: `PM은 프로젝트의 방향과 속도를 함께 책임지는 역할이에요.\n처음에는 팀이 같은 목표를 바라보도록 문제와 가치를 정의하고, 이후에는 요구사항을 정리해 혼선 없이 구현되게 만들어요.\n진행 중에는 일정·우선순위·의존성을 관리하면서 막히는 지점을 먼저 발견하고 해결 루트를 마련합니다.\n진행되는 프로젝트와 사람, 자원을 관리하면서 누구보다 먼저 아이디어를 도출하고, 사람들을 연결하며 프로젝트를 관리해요.`,
    wishes: [
      "번뜩이는 아이디어를 가진 사람",
      "문서 작업에 익숙하신 분",
      "소통을 좋아하고, 자신있는 사람",
      "발표에 대한 두려움이 없는 분",
    ],
    stacks: [
      { name: "NOTION", icon: notionIcon },
      { name: "FIGMA", icon: figmaIcon },
      { name: "DOCS", icon: docsIcon },
    ],
    image: pmImg,
  },
  DE: {
    title: "Design",
    description: `디자인은 문제를 시각적으로 정의하고 사용자가 자연스럽게 이해하고 행동하도록 만드는 역할이에요. 프로젝트 초반에는 목표와 타깃을 바탕으로 사용자 경험을 설계하고 정보 구조와 흐름을 정리해 혼선 없이 방향을 잡아요.\n진행 과정에서는 기획,개발과 긴밀히 소통하며 제약 조건 안에서 최적의 해답을 찾고 디자인 시스템과 컴포넌트를 정리해 일관성과 완성도를 유지합니다.\n사용자의 시선과 감정을 누구보다 먼저 고민하며 아이디어를 시각 언어로 구체화하고 브랜드와 기능, 경험을 하나의 결과물로 연결해 프로젝트의 완성도를 끌어올려요.`,
    wishes: [
      "번뜩이는 아이디어를 가진 사람",
      "문서 작업에 익숙하신 분",
      "소통을 좋아하고, 자신있는 사람",
      "발표에 대한 두려움이 없는 분",
    ],
    stacks: [
      { name: "ADOBE", icon: adobeIcon },
      { name: "FIGMA", icon: figmaIcon },
    ],
    image: deImg,
  },
  BE: {
    title: "Backend",
    description: `백엔드는 웹 개발의 보이지 않는 심장과도 같아요.\n백엔드 파트는 서비스의 핵심 기능을 설계하고 구현해요. API를 설계하고 구현하며 클라이언트와 서버가 원활하게 통신할 수 있게 하고, 데이터베이스를 효율적으로 관리해 서비스의 안정성을 확보할 수 있도록 지원해요. 프로젝트를 통해 실제로 동작하는 서비스를 완성해 보며 단순히 코드를 작성하는 것을 넘어 문제를 해결하는 개발자의 시각을 기르게 됩니다.`,
    wishes: [
      "맡은 일에 몰입하여 끝까지 해결하기 위해 노력하는 분",
      "새로운 기술과 문화에 대해 도전을 두려워하지 않는 분",
      "팀원과 협력해 목표를 달성하는데 즐거움을 느끼는 분",
      "서로의 의견을 존중하며 함께 성장하고자 하는 분",
    ],
    stacks: [
      { name: "JAVA", icon: javaIcon },
      { name: "SPRING", icon: springIcon },
      { name: "MARIA", icon: mariaIcon },
    ],
    image: beImg,
  },
  FE: {
    title: "Frontend",
    description: `프론트엔드는 웹 애플리케이션의 사용자 인터페이스(UI)를 설계하고 구현하는 분야입니다. 사용자가 직접 상호작용하는 화면을 개발하며, 웹 페이지의 구조와 디자인, 동작을 담당합니다.\nHTML, CSS, JavaScript를 활용해 페이지를 구현하고 사용자 경험을 최적화하는 데 중점을 둡니다.\n또한 반응형 디자인과 인터랙션을 적용해 다양한 디바이스에서도 원활하게 동작하도록 합니다. 강남대학교 멋쟁이사자처럼 프론트엔드 파트에서는 HTML, CSS, JavaScript, React로 웹 서비스를 구현하고 사용자 친화적인 환경을 제공합니다.`,
    wishes: [
      `문제를 포기하지 않고 해결 과정을 즐길 수 있는 분`,
      `실수와 부족함을 성장으로 바꾸며 끊임없이 도전하는 분`,
      `자발적으로 문제를 찾고 개선하려고 노력하는 분`,
      `적극적으로 소통하며 문제를 해결하는 데 관심 있는 분`,
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
