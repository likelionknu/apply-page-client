// 최상위 모달 인터페이스
interface ModalMainProps {
  children: React.ReactNode;
}

// 하위 모달 텍스트 인터페이스(혹시 모르니)
interface ModalTextProps {
  children: React.ReactNode;
}

function ModalTitle({ children }: ModalTextProps) {
  return (
    <div className="text-[16px] leading-4 font-semibold tracking-[-0.03em] md:mt-7 md:text-[25px] md:leading-6.25">
      {children}
    </div>
  );
}

function ModalDescription({ children }: ModalTextProps) {
  return (
    <div className="flex flex-col gap-4 text-[12px] leading-3 font-medium tracking-[-0.03em] text-[#e2e2e2] md:mt-8 md:text-[18px] md:leading-4.5">
      {children}
    </div>
  );
}

function ModalButtonLayout({ children }: ModalTextProps) {
  return <div className="mx-auto mt-4 flex gap-20">{children}</div>;
}

function ModalMain({ children }: ModalMainProps) {
  return (
    <div className="modal-style absolute top-1/3 left-1/2 z-100 flex h-fit w-80 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[44px] py-8 md:top-1/2 md:h-87.5 md:w-160 md:rounded-[55px] md:py-11">
      <div className="text-white1 flex h-full flex-col justify-between text-center md:gap-8">
        {children}
      </div>
    </div>
  );
}

const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Description: ModalDescription,
  ButtonLayout: ModalButtonLayout,
});

export default Modal;
