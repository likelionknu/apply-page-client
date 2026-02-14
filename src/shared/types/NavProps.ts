export interface NavProps {
  isMain?: boolean | undefined;
  isLogin?: string | null;
  isPartPage: boolean;
  onLogin: () => void;
}
