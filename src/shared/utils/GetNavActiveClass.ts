export const GetNavActiveClass = (isActive: boolean) => {
  return isActive
    ? "text-blue cursor-pointer"
    : "hover:text-blue cursor-pointer";
};
