import type { ApplyNotice } from "@apply/types/ApplyProps";

export default function NoticeCard({
  item,
  onApplyClick,
  mobile = false,
}: {
  item: ApplyNotice;
  onApplyClick: (id: string) => void;
  mobile?: boolean;
}) {
  const isMobile = mobile;
  const isDesktop = !isMobile;
  const isOpen = item.status === "모집 중";
  const title = [item.titleLine1, item.titleLine2].filter(Boolean).join(" ");
  const cardBaseClass = isMobile
    ? "relative h-[92px] w-[359px] max-w-full rounded-[14px] border border-transparent [background-image:linear-gradient(180deg,rgba(0,0,0,0.52)_0%,rgba(12,20,28,0.92)_100%),linear-gradient(#000,#000),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(66,126,156,1),rgba(0,238,255,0.8))] [background-origin:border-box] [background-clip:padding-box,padding-box,border-box] [box-shadow:0_0_0_1px_rgba(255,255,255,0.06)_inset,_0_10px_26px_rgba(0,0,0,0.5),_0_0_28px_rgba(72,185,255,0.16)]"
    : "relative h-57.75 w-96.25 rounded-[33px] border border-transparent [background-image:linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(20,20,20,0.9)_100%),linear-gradient(#000,#000),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(66,126,156,1),rgba(0,238,255,0.8))] [background-origin:border-box] [background-clip:padding-box,padding-box,border-box] [box-shadow:0_0_0_1px_rgba(255,255,255,0.05)_inset,_0_12px_28px_rgba(0,0,0,0.55),_0_0_36px_rgba(72,185,255,0.18)]";
  const emphasisClass =
    item.emphasis && isDesktop
      ? " [background-image:linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(20,20,20,0.9)_100%),linear-gradient(#000,#000),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(0,180,255,1),rgba(0,238,255,0.95))] [box-shadow:0_0_0_1px_rgba(255,255,255,0.06)_inset,_0_12px_28px_rgba(0,0,0,0.55),_0_0_60px_rgba(0,170,255,0.28)]"
      : "";
  const desktopButtonClass = [
    "inline-flex h-9.75 w-[100.93px] items-center justify-center",
    "rounded-[55px]",
    "bg-[radial-gradient(ellipse_70.71%_70.71%_at_50%_50%,rgba(0,0,0,0.50)_50%,#0A7CFF_100%)]",
    "px-0 py-0 text-xs font-normal tracking-[-0.01em]",
    "text-[rgba(255,255,255,0.92)] outline outline-[0.40px]",
    "outline-offset-[-0.40px] outline-[rgba(255,255,255,1)]",
    "transition-transform duration-[120ms] hover:-translate-y-px focus-visible:outline-none cursor-pointer",
    !isOpen ? "opacity-40" : "",
  ].join(" ");
  const mobileOpenButtonClass =
    "relative inline-flex h-6 w-16 shrink-0 self-end items-center justify-center rounded-lg bg-[radial-gradient(ellipse_70.71%_70.71%_at_50.00%_50.00%,rgba(0,0,0,0.50)_50%,#0A7CFF_100%)] outline outline-[0.76px] outline-offset-[-0.76px] outline-orange-100";
  const mobileClosedButtonClass =
    "inline-flex h-6 w-16 shrink-0 self-end items-center justify-center rounded-lg border border-[rgba(255,255,255,0.35)] bg-[rgba(0,0,0,0.45)] text-[7px] font-medium leading-5 text-[rgba(255,255,255,0.45)]";
  const mobileButtonLabelClass =
    "inline-flex h-[19px] w-[39px] items-center justify-center text-center text-[7px] font-medium leading-[19px]";

  return (
    <article className={cardBaseClass + emphasisClass}>
      {/* 웹 */}
      {isDesktop && (
        <div className="px-8.375 relative flex h-full flex-col gap-3.25 pt-8 pb-8">
          <span
            className={`h-4.25 w-79.5 self-center text-sm font-normal tracking-[-0.01em] ${isOpen ? "text-blue" : "text-red"}`}
          >
            {item.status}
          </span>

          <h3 className="m-0 h-12.5 w-79.5 self-center text-lg leading-[1.2] font-normal tracking-[-0.02em] text-[rgba(255,255,255,0.92)]">
            {title}
          </h3>

          <div className="h-4.25 w-79.5 self-center text-sm font-normal tracking-[-0.01em] text-[rgba(255,255,255,0.55)]">
            <span>
              {item.periodFrom} ~ {item.periodTo}
            </span>
          </div>

          <div className="absolute right-9.75 bottom-7.5 m-0 block">
            <button
              type="button"
              className={desktopButtonClass}
              disabled={!isOpen}
              onClick={() => onApplyClick(item.id)}
            >
              {isOpen ? "지원하러 가기" : "모집 마감"}
            </button>
          </div>
        </div>
      )}

      {/* 모바일 */}
      {isMobile && (
        <div className="relative flex h-full flex-col px-3.75 pt-3 pb-3">
          <span
            className={`text-[11px] font-medium tracking-[-0.02em] ${isOpen ? "text-blue" : "text-red"}`}
          >
            {item.status}
          </span>
          <h3 className="mt-1.25 mb-0 text-xs leading-tight font-medium tracking-[-0.02em] text-[rgba(255,255,255,0.94)]">
            <span className="block">{item.titleLine1}</span>
            {item.titleLine2 ? (
              <span className="block">{item.titleLine2}</span>
            ) : null}
          </h3>
          <span className="mt-1.25 inline-flex h-3.25 w-48.75 items-end text-[11px] leading-3.25 tracking-[-0.01em] whitespace-nowrap text-[rgba(255,255,255,0.55)]">
            {item.periodFrom} ~ {item.periodTo}
          </span>

          <div className="absolute right-3.75 bottom-3">
            <button
              type="button"
              className={
                isOpen ? mobileOpenButtonClass : mobileClosedButtonClass
              }
              disabled={!isOpen}
              onClick={() => onApplyClick(item.id)}
            >
              <span
                className={`${mobileButtonLabelClass} ${isOpen ? "text-white" : ""}`}
              >
                지원하러 가기
              </span>
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
