import { classNames } from "../../utils/helper";
export interface ContainerProps {
  className: string;
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`container mx-auto ${classNames(className)}`}>
      {children}
    </div>
  );
};

export default Container;
