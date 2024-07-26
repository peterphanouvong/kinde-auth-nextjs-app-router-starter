"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const PlayerForm = (props: {
  player: {
    player_id: number;
    first_name: string;
    last_name: string;
    age: number;
    height: number;
    position: string;
    team_name: string;
    country: string;
    jersey_number: number;
    experience_years: string;
  };
}) => {
  const onSubmit = async (formData: FormData) => {
    const response = await fetch(
      `http://localhost:3000/api/player?id=${props.player.player_id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          ...props.player,
          ...Object.fromEntries(formData),
        }),
      }
    );
    const { message } = await response.json();
    alert(message);
  };

  return (
    <form action={onSubmit} className="space-y-4 max-w-sm">
      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="first_name">
          First name
        </label>
        <Input
          type="text"
          id="first_name"
          name="first_name"
          defaultValue={props.player.first_name}
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="last_name">
          Last name
        </label>
        <Input
          type="text"
          id="last_name"
          name="last_name"
          defaultValue={props.player.last_name}
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="age">
          Age
        </label>
        <Input
          type="number"
          id="age"
          name="age"
          defaultValue={props.player.age}
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="height">
          Height
        </label>
        <Input
          type="number"
          id="height"
          defaultValue={props.player.height}
          name="height"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="position">
          Position
        </label>

        <Input
          type="text"
          id="position"
          defaultValue={props.player.position}
          name="position"
        />
      </div>

      <Button>Save</Button>
    </form>
  );
};
