export interface NavProps {
  isMain?: boolean | undefined;
  isLogin: boolean;
  userName?: string | null;
  isPartPage: boolean;
  onClick?: () => void;
  onLogin: () => void;
}
