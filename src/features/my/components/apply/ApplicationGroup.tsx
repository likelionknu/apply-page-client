import type { ApplicationItem } from "@my/types/ApplicationItem";
import ApplicationCard from "./ApplicationCard";

interface ApplicationGroupProps {
  title: string;
  list: ApplicationItem[];
  className?: string;
}

const ApplicationStatusLabel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className="tracking-tight-custom text-[24px] leading-140 font-bold">
      {children}
    </span>
  );
};

const ApplicationStatusLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

function ApplicationGroup({ title, list, className }: ApplicationGroupProps) {
  return (
    <div className={className}>
      <ApplicationStatusLabel>{title}</ApplicationStatusLabel>
      <ApplicationStatusLayout>
        {list.length > 0 ? (
          list.map((item) => (
            <ApplicationCard key={item.applicationId} data={item} />
          ))
        ) : (
          <div className="text-gray-500">지원 내역이 없습니다.</div>
        )}
      </ApplicationStatusLayout>
    </div>
  );
}

export default ApplicationGroup;
