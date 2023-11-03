import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { ClientComponentUser } from "./ClientComponentUser";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuthed = await isAuthenticated();

  if (!isAuthed) {
    redirect("/not-authorized");
  }

  return (
    <main className="px-24">
      <Card className="rounded-2xl bg-slate-950 shadow-2xl text-white text-center">
        <div className="mx-auto max-w-[550px] p-10">
          <p className="text-2xl mb-2">Welcome, {user?.given_name}</p>
          <h1 className="text-4xl font-bold leading-normal">
            Today is an important day. Today you start.
          </h1>
        </div>
      </Card>

      <h2 className="text-xl font-medium mt-10">Next steps for you</h2>

      <div className="grid grid-cols-4 gap-5 mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Token data access</CardTitle>
            <CardDescription>
              Get Kinde data from the server and on the client side.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="server">
              <TabsList>
                <TabsTrigger value="server">Server component</TabsTrigger>
                <TabsTrigger value="client">Client component</TabsTrigger>
              </TabsList>
              <TabsContent value="server">
                <div className="border border-slate-200 rounded-lg p-4 overflow-auto mb-4">
                  <pre className="text-sm text-slate-700">
                    <code>{JSON.stringify(user, null, 2)}</code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="client">
                <ClientComponentUser />
              </TabsContent>
            </Tabs>
            <Link href="https://kinde.notion.site/Next-js-App-Router-v2-e7a16d8ae38e45b6ad052910075e24ef?pvs=4">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Protecting routes</CardTitle>
            <CardDescription>
              Authenticate users and protect your routes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://kinde.notion.site/Next-js-App-Router-v2-e7a16d8ae38e45b6ad052910075e24ef?pvs=4">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Management API</CardTitle>
            <CardDescription>Access the Kinde Management API.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://kinde.notion.site/Next-js-App-Router-v2-e7a16d8ae38e45b6ad052910075e24ef?pvs=4">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Organizations</CardTitle>
            <CardDescription>
              Create and log into organizations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://kinde.notion.site/Next-js-App-Router-v2-e7a16d8ae38e45b6ad052910075e24ef?pvs=4">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
