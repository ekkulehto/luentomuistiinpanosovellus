import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import DesktopDropdown from "./DesktopDropdown";
import MobileDropdown from "./MobileDropdown";

type Props = {
  isNoteList: boolean;
};

export function CourseDropdown({ isNoteList }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <DesktopDropdown isNoteList={isNoteList} />;
  }

  return <MobileDropdown isNoteList={isNoteList} />;
}
