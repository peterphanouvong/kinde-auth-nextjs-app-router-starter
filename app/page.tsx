import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="px-24">
      <Card className="rounded-2xl bg-slate-950 shadow-2xl text-white text-center h-[760px]">
        <div className="mx-auto max-w-[683px] mt-[215px]">
          <h1 className="text-6xl font-bold leading-tight">
            Tools to support your online business
          </h1>
          <p className="text-3xl mt-2">Start your free trial today</p>
          <Button className="mt-12" variant={"secondary"} size={"lg"}>
            Sign up
          </Button>
        </div>
      </Card>
    </main>
  );
}
