export interface NavProps {
  isMain?: boolean | undefined;
  isLogin?: string | null;
  isPartPage: boolean;
  onClick?: () => void;
  onLogin: () => void;
}
