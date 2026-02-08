import { Button, Modal } from "@shared/components";
import CancelImg from "@shared/assets/cancel.png";

interface EditModalProps {
  isShow: boolean;
  name: string | null | undefined;
  onClose: () => void;
}

function EditModal({ isShow, name, onClose }: EditModalProps) {
  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>{name} 님의 정보를 수정하시겠어요?</Modal.Title>
      <img
        src={CancelImg}
        alt="닫기"
        className="absolute top-6.5 right-7 w-8 cursor-pointer"
        onClick={onClose}
      />
      <form className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2">
          <label>이름</label>
          <input type="text" className="border-white1 rounded-lg border-2" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>학부(학과)</label>
          <input type="text" className="border-white1 rounded-lg border-2" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>학번</label>
          <input type="text" className="border-white1 rounded-lg border-2" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>학년</label>
          <input
            type="text"
            placeholder="1"
            className="border-white1 rounded-lg border-2"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>연락처</label>
          <input
            type="text"
            placeholder="연락처를 입력해주세요."
            className="border-white1 rounded-lg border-2"
          />
        </div>
      </form>
      <Modal.ButtonLayout>
        <Button variant="modal">변경하기</Button>
      </Modal.ButtonLayout>
    </Modal>
  );
}

export default EditModal;
