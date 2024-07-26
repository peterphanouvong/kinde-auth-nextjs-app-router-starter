import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlayerSearch } from "./player-search";
import Link from "next/link";
import { players } from "@/players";

export default async function Players(props: {
  searchParams: {
    term: string;
  };
}) {
  // const { players } = await fetch("http://localhost:3000/api/players").then(
  //   (res) => res.json()
  // );
  return (
    <div className="">
      <div className="bg-slate-950 py-24">
        <div className=" max-w-7xl w-full mx-auto">
          <div className="flex items-center gap-14">
            <h2 className="text-5xl text-white font-bold tracking-tight">
              Players
            </h2>
            <PlayerSearch />
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto mt-8">
        <Table>
          <TableCaption>A list of volleyball players.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Player</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Position</TableHead>
              <TableHead className="text-right">Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players
              .filter((player: any) =>
                !!!props.searchParams.term
                  ? true
                  : JSON.stringify(player).includes(props.searchParams.term)
              )
              .map((player: any) => (
                <TableRow key={player.id}>
                  <TableCell className="font-medium">
                    <Link href={`/players/${player.player_id}`}>
                      {player.first_name} {player.last_name}
                    </Link>
                  </TableCell>
                  <TableCell>{player.team_name}</TableCell>
                  <TableCell>{player.position}</TableCell>
                  <TableCell className="text-right">{player.country}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
