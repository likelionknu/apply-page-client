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
    <div className="text-[32px] leading-9.5 font-semibold tracking-[-0.03em]">
      {children}
    </div>
  );
}

function ModalDescription({ children }: ModalTextProps) {
  return (
    <div className="flex flex-col gap-4 text-[19px] leading-5.75 font-medium tracking-[-0.03em] text-[#e2e2e2]">
      {children}
    </div>
  );
}

function ModalMain({ children }: ModalMainProps) {
  return (
    <div className="modal-style absolute top-1/2 left-1/2 z-100 flex h-[483px] w-200 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      <div className="text-white1 flex flex-col gap-8 text-center">
        {children}
      </div>
    </div>
  );
}

const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Description: ModalDescription,
});

export default Modal;
