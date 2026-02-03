import type { ApplyItem } from "@my/types/ApplyItem";
import ApplyCard from "./ApplyCard";

interface ApplyGroupProps {
  title: string;
  list: ApplyItem[];
  className?: string;
}

const ApplyStatusLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="tracking-tight-custom text-[24px] leading-140 font-bold">
      {children}
    </span>
  );
};

const ApplyStatusLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

function ApplyGroup({ title, list, className }: ApplyGroupProps) {
  return (
    <div className={className}>
      <ApplyStatusLabel>{title}</ApplyStatusLabel>
      <ApplyStatusLayout>
        {list.length > 0 ? (
          list.map((item) => <ApplyCard key={item.applicationId} data={item} />)
        ) : (
          <div className="text-gray-500">지원 내역이 없습니다.</div>
        )}
      </ApplyStatusLayout>
    </div>
  );
}

export default ApplyGroup;
