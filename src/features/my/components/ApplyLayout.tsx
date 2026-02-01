interface ApplyLayoutProps {
  children: React.ReactNode;
}

function ApplyLayout({ children }: ApplyLayoutProps) {
  return <div className="flex flex-col gap-10">{children}</div>;
}

export default ApplyLayout;
