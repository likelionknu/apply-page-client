import {
  DEFAULT_MOBILE_CARD_LAYOUT_CLASSES,
  DEFAULT_SPLIT_VARIANT_CLASSES,
  MOBILE_CARD_LAYOUT_BY_ID,
  MOBILE_DESC_BASE_CLASS,
  MOBILE_IMAGE_BASE_CLASS,
  MOBILE_SUBTITLE_BASE_CLASS,
  SPLIT_VARIANT_CLASS_BY_ID,
} from "@project/constants/projectCardConfig";
import type { ProjectCard as ProjectCardType } from "@project/types/project";

function cx(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function ProjectCard({
  item,
  imgSrc,
}: {
  item: ProjectCardType;
  imgSrc: string;
}) {
  const displayTitle = item.title === "marketBEE" ? "market\nBEE" : item.title;
  const mobileTitle = item.title === "marketBEE" ? "market BEE" : item.title;

  const splitVariant =
    SPLIT_VARIANT_CLASS_BY_ID[item.id] ?? DEFAULT_SPLIT_VARIANT_CLASSES;
  const mobileLayout =
    MOBILE_CARD_LAYOUT_BY_ID[item.id] ?? DEFAULT_MOBILE_CARD_LAYOUT_CLASSES;

  const innerClass =
    splitVariant.inner === "p-0"
      ? "relative flex h-full flex-col p-0"
      : "relative flex h-full flex-col px-[22px] pt-[22px] pb-5";

  const rowClass =
    splitVariant.row === "pt-0"
      ? "flex items-start justify-between gap-4 pt-0"
      : "flex items-start justify-between gap-4 pt-[38px]";

  return (
    <>
      {/* 웹 */}
      <article className="relative hidden h-[280px] w-[389.93px] overflow-hidden rounded-[30px] border border-transparent [background-image:linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(23,23,23,0.85)_100%),linear-gradient(#000,#000),linear-gradient(180deg,#ffffff_0%,#76cbf6_100%)] [background-clip:padding-box,padding-box,border-box] [background-origin:border-box] [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_32px_rgba(0,0,0,0.55),0_0_28px_rgba(72,185,255,0.14)] min-[701px]:block">
        <div className={innerClass}>
          {item.layout === "center" ? (
            <>
              <h2 className="m-0 mt-[2px] text-center text-[30px] leading-[1.1] font-extrabold tracking-[-0.02em]">
                {displayTitle}
              </h2>

              <div className="mt-[10px] mb-2 flex h-[110px] w-full shrink-0 items-center justify-center">
                <img
                  src={imgSrc}
                  alt={`${item.title} 미리보기`}
                  className="max-h-full max-w-full object-contain opacity-[0.95] [filter:drop-shadow(0_10px_16px_rgba(0,0,0,0.55))]"
                />
              </div>

              <p className="m-0 mt-[6px] mb-2 text-center text-[13px] font-extrabold tracking-[-0.015em] text-[rgba(255,255,255,0.92)]">
                {item.subtitle}
              </p>
            </>
          ) : (
            <>
              <div className={rowClass}>
                <h2 className={cx("m-0", splitVariant.title)}>
                  {displayTitle}
                </h2>

                <div
                  className={cx(
                    "flex shrink-0 items-center justify-center",
                    splitVariant.media,
                  )}
                >
                  <img
                    src={imgSrc}
                    alt={`${item.title} 미리보기`}
                    className="max-h-full max-w-full object-contain opacity-[0.95] [filter:drop-shadow(0_10px_16px_rgba(0,0,0,0.55))]"
                  />
                </div>
              </div>

              <p className={splitVariant.subtitle}>{item.subtitle}</p>

              <p className={splitVariant.desc}>{item.description}</p>
            </>
          )}
        </div>
      </article>

      {/* 모바일 */}
      <article className="relative h-[171px] w-[253px] overflow-hidden rounded-[34px] border border-transparent [background-image:linear-gradient(180deg,rgba(0,0,0,0.60)_0%,rgba(8,14,20,0.94)_100%),linear-gradient(#000,#000),linear-gradient(180deg,rgba(230,246,255,0.95)_0%,rgba(120,203,255,0.92)_100%)] [background-clip:padding-box,padding-box,border-box] [background-origin:border-box] [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08),0_10px_28px_rgba(0,0,0,0.56),0_0_34px_rgba(72,185,255,0.22)] min-[701px]:hidden">
        <div className="relative h-[171px] px-[15px] pt-[14px] pb-[12px]">
          <h2 className="m-0 mt-[8px] ml-[8px] bg-gradient-to-b from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-[15px] leading-[1.05] font-semibold tracking-[-0.03em] text-transparent">
            {mobileTitle}
          </h2>

          <div className={cx(MOBILE_IMAGE_BASE_CLASS, mobileLayout.imageBox)}>
            <img
              src={imgSrc}
              alt={`${item.title} 미리보기`}
              className="h-full w-full object-fill opacity-[0.95] [filter:drop-shadow(0_8px_14px_rgba(0,0,0,0.55))]"
            />
          </div>

          <p
            className={cx(MOBILE_SUBTITLE_BASE_CLASS, mobileLayout.subtitleBox)}
          >
            {item.subtitle}
          </p>

          <p className={cx(MOBILE_DESC_BASE_CLASS, mobileLayout.descBox)}>
            {item.description}
          </p>
        </div>
      </article>
    </>
  );
}
