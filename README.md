# LIKELION KNU Apply Page Client

멋쟁이사자처럼 강남대학교 지원/모집 페이지 프론트엔드입니다.

Google OAuth 로그인, 공고 조회, 지원서 작성/임시저장/제출, 마이페이지 지원 현황 확인, 추가 정보 입력 흐름을 제공합니다.

## 주요 기능

- Google OAuth 로그인 및 콜백 처리
- 모집 공고 목록 조회 및 진행/마감 분리
- 지원 가능 여부 확인 후 지원서 진입
- 지원서 임시 저장, 최종 제출, 제출 후 취소
- 마이페이지 프로필 조회, 지원 상태 확인
- 신규 사용자 추가 정보 입력(이름/학부/학번/연락처/학적 상태)
- 파트 소개(PM/DE/BE/FE), 프로젝트 소개(11~13기)
- 모바일/데스크톱 반응형 UI

## 기술 스택

- Runtime: React 19, TypeScript 5, Vite 7
- Styling: Tailwind CSS v4, 커스텀 CSS(`src/index.css`, `src/shared/styles/global.css`)
- Routing: React Router v7
- State/Form: Zustand, React Hook Form
- Network: Axios
- Utilities: react-responsive
- Lint/Format: ESLint 9, Prettier(+ `prettier-plugin-tailwindcss`)

## 라우트

| 경로                         | 설명                                     |
| ---------------------------- | ---------------------------------------- |
| `/`                          | Google OAuth 콜백 처리 (`code` 파라미터) |
| `/main`                      | 메인 랜딩                                |
| `/project`                   | 프로젝트 소개                            |
| `/apply`                     | 모집 공고 목록                           |
| `/part/:part`                | 파트 소개 (`PM`, `DE`, `BE`, `FE`)       |
| `/recruit/:recruitId`        | 지원서 작성/임시저장/제출                |
| `/recruit/my/:applicationId` | 제출한 지원서 상세                       |
| `/my`                        | 마이페이지                               |
| `/additional`                | 추가 정보 입력                           |
| `*`                          | 404 페이지                               |

## 인증/토큰 동작

- Google 로그인 성공 시 `accessToken`, `refreshToken`, `userName`을 `sessionStorage`에 저장합니다.
- Axios 인터셉터에서 `Authorization: Bearer <accessToken>`을 자동 주입합니다.
- 401 응답 시 `/v1/auth/reissue`로 토큰 재발급 후 기존 요청을 재시도합니다.
- 재발급 실패 시 세션을 비우고 `/main`으로 이동합니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`에 접속합니다.

## 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 타입체크 + 프로덕션 빌드
- `npm run preview`: 빌드 결과 미리보기
- `npm run lint`: ESLint 실행

## 디렉토리 구조

```text
src/
  features/
    additional/    # 추가 정보 입력
    application/   # 지원서 작성/조회
    apply/         # 공고 목록
    main/          # 메인 랜딩
    my/            # 마이페이지
    part/          # 파트 소개
    project/       # 프로젝트 소개
  shared/
    apis/          # 공통 API 클라이언트, OAuth
    components/    # 공용 UI 컴포넌트
    constants/     # 상태 텍스트 상수
    pages/         # 공통 페이지(로딩/에러 등)
    styles/        # 공통 스타일
    utils/         # 유틸리티
  routes/
    AppRouter.tsx  # 전체 라우팅
```

## 배포 참고

`vercel.json`에 SPA rewrite가 설정되어 있어 모든 경로 요청을 `/`로 리다이렉트합니다.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
