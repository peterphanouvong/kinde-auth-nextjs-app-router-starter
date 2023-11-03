"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export const ClientComponentUser = () => {
  const { user, isLoading } = useKindeBrowserClient();

  if (isLoading) return <Skeleton className="w-full h-[170px] mb-4" />;

  return (
    <div className="border border-slate-200 rounded-lg p-4 overflow-auto mb-4">
      <pre className="text-sm text-slate-700">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
};
