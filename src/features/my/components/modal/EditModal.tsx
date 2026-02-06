import Button from "@shared/components/Button";
import Modal from "@shared/components/Modal";

interface EditModalProps {
  isShow: boolean;
  name: string | null | undefined;
}

function EditModal({ isShow, name }: EditModalProps) {
  if (!isShow) return null;

  return (
    <Modal>
      <Modal.Title>{name} 님의 정보를 수정하시겠어요?</Modal.Title>
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
