"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export const PlayerSearch = () => {
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    router.push(`/players?term=${formData.get("term")}`);
  };
  return (
    <form action={onSubmit} className="w-full">
      <Input
        name="term"
        className="h-12 max-w-md"
        placeholder="Search for a player"
      />
    </form>
  );
};
