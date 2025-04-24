"use client";

import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCourseDropdownStore } from "../../stores/useCourseDropdownStore";
import useCourseDropdown from "../../hooks/useCourseDropdown";
import StatusList from "./StatusList";

type Props = {
  isNotelist: boolean;
};

export function DropdownMenu({ isNotelist }: Props) {
  // tämä refaktorointi-idea chatgpt:n, mutta oma toteutus
  const dropdownStatus = useCourseDropdownStore((state) => state.isLocked);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { open, courses, courseId, value, toggleCourse, setOpen, setValue } =
    useCourseDropdown({ isNotelist });

  // koska rakenne on molemmissa sama, niin voidaan määritellä popover ja drawer muuttujien avulla
  const Container = isDesktop ? Popover : Drawer;
  const Trigger = isDesktop ? PopoverTrigger : DrawerTrigger;
  const Content = isDesktop ? PopoverContent : DrawerContent;
  const contentClass = isDesktop ? "w-[200px] p-0" : "mt-4 border-t";
  const buttonClass = isDesktop ? "w-[200px] justify-start" : "justify-start";

  return (
    // container = PopOver || Drawer
    <Container open={open} onOpenChange={setOpen}>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">Kurssi</p>
        {/* trigger = PopOverTrigger || DrawerTrigger */}
        <Trigger asChild>
          <Button
            variant="outline"
            role="combobox"
            autoFocus={true}
            aria-expanded={open}
            disabled={!isNotelist ? dropdownStatus : false}
            className={buttonClass}
          >
            {value
              ? courses.find((course) => course.name === value)?.name
              : isNotelist
              ? "Kaikki"
              : "Valitse kurssi..."}
          </Button>
        </Trigger>
      </div>
      {/* Content = PopoverContent || DrawerContent */}
      <Content className={contentClass} align={isDesktop ? "start" : undefined}>
        {!isDesktop && (
          <DrawerHeader>
            <DrawerTitle>Kurssivalikko</DrawerTitle>
            <DrawerDescription>
              Etsi kursseja tai valitse jokin alla olevista.
            </DrawerDescription>
          </DrawerHeader>
        )}
        <StatusList
          setOpen={setOpen}
          setValue={setValue}
          toggleCourse={toggleCourse}
          isNotelist={isNotelist}
          courseId={courseId}
          courses={courses}
          value={value}
        />
      </Content>
    </Container>
  );
}
