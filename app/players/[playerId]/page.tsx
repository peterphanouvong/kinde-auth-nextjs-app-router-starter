import { PlayerForm } from "./player-form";

export default async function Player(props: {
  params: {
    playerId: string;
  };
}) {
  const { player } = await fetch(
    `http://localhost:3000/api/player?id=${props.params.playerId}`
  ).then((res) => res.json());

  console.log(player);
  return (
    <div>
      <div className="bg-slate-950 py-24">
        <div className=" max-w-7xl w-full mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl text-white font-bold tracking-tight leading-tight">
              <span className="font-normal">{player.first_name}</span>
              <br />
              {player.last_name}
            </h2>

            <span className="text-white text-9xl font-bold">
              {player.jersey_number}
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto pt-12">
        {/* <pre>{JSON.stringify(player, null, 2)}</pre> */}
        <PlayerForm player={player} />
      </div>
    </div>
  );
}
