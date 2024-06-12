import { IconCloudDemo } from "@/ui-components/cloud/CoudeIndex";

export function SkillIndex() {
  return (
    <>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-6 p-4">
        <div className="basis-full sm:basis-3/4">
          <IconCloudDemo />
        </div>
        <div className="basis-full sm:basis-1/2">
          <IconCloudDemo />
        </div>
      </div>
    </>
  );
}
