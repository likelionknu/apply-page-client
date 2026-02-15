import CancelImg from "@shared/assets/cancel.png";

// 최상위 모달 인터페이스
interface ModalMainProps {
  children: React.ReactNode;
}

// 하위 모달 텍스트 인터페이스(혹시 모르니)
interface ModalTextProps {
  children: React.ReactNode;
  className?: string;
}

function ModalClose({ onClose }: { onClose?: () => void }) {
  return (
    <img
      src={CancelImg}
      alt="닫기"
      className="absolute top-3 right-2 w-5 cursor-pointer md:top-6.5 md:right-7 md:w-8"
      onClick={onClose}
    />
  );
}

function ModalTitle({ children }: ModalTextProps) {
  return (
    <div className="text-[16px] leading-4 font-semibold tracking-[-0.02em] md:text-[25px] md:leading-6.25 md:tracking-[-0.03em]">
      {String(children).replace(/\./g, ".\n")}
    </div>
  );
}

function ModalDescription({
  children,
  className = "max-w-70.5 md:max-w-md",
}: ModalTextProps) {
  return (
    <div
      className={`${className} flex flex-col gap-4 text-center text-[12px] leading-6 font-medium tracking-[-0.03em] break-keep text-[#C0C0C0] md:mt-2 md:text-[18px] md:leading-8`}
    >
      {children}
    </div>
  );
}

function ModalButtonLayout({ children }: ModalTextProps) {
  return <div className="mx-auto flex gap-5 md:mt-4 md:gap-20">{children}</div>;
}

function ModalMain({ children }: ModalMainProps) {
  return (
    <div className="modal-style fixed top-1/2 left-1/2 z-100 flex w-87.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] px-8 py-9 md:top-1/2 md:left-1/2 md:min-h-87.5 md:w-160 md:rounded-[30px] md:py-11">
      <div className="text-white1 flex h-full flex-col justify-between gap-5 text-center md:gap-8">
        {children}
      </div>
    </div>
  );
}

const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Description: ModalDescription,
  Close: ModalClose,
  ButtonLayout: ModalButtonLayout,
});

export default Modal;
