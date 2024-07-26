import { players } from "@/players";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;
  return Response.json({
    player: players.find((player) => player.player_id === parseInt(id)),
  });
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;
  const player = await request.json();
  const index = players.findIndex(
    (player) => player.player_id === parseInt(id)
  );
  players[index] = player;
  return Response.json({
    status: "success",
    message: "Player updated successfully",
  });
}
