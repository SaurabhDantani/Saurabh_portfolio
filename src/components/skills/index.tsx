import { IconCloudDemo } from "@/ui-component/cloude";

export function SkillIndex() {
  return (
    <>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row m-20 gap-4 sm:gap-6 md:gap-8">
        <div className="basis-full sm:basis-3/4">
          <IconCloudDemo />
        </div>
        <div className="basis-96 sm:basis-96">
          <IconCloudDemo />
        </div>
      </div>
    </>
  );
}
