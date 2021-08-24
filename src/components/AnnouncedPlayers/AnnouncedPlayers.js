import React, { useState } from "react";
import { Text } from "../../common";

const AnnouncedPlayers = (props) => {
  const [btn, setBtn] = useState(true);
  console.log(btn);
  const data = [
    { playerName: "Faf Du Plessis", isCaptain: false, playerRole: "batsmen" },
    { playerName: "Ruturaj Gaikwad", isCaptain: false, playerRole: "batsmen" },
    { playerName: "Suresh Raina", isCaptain: false, playerRole: "batsmen" },
    { playerName: "Moeen Ali", isCaptain: false, playerRole: "batsmen" },
    { playerName: "Moeen Ali", isCaptain: false, playerRole: "batsmen" },
    { playerName: "MS Dhoni", isCaptain: true, playerRole: "keeper" },
    {
      playerName: "Ravindra Jageda",
      isCaptain: false,
      playerRole: "allRounder",
    },
    { playerName: "Dwayne Brawo", isCaptain: false, playerRole: "allRounder" },
    { playerName: "Sam Curran", isCaptain: false, playerRole: "allRounder" },
    { playerName: "Deepak Chahar", isCaptain: false, playerRole: "bowler" },
    { playerName: "Shardul Thakkur", isCaptain: false, playerRole: "bowler" },
  ];

  const rcbData = [
    { playerName: "Virat Kohli", isCaptain: true, playerRole: "batsmen" },
    { playerName: "Devdutt Padikkal", isCaptain: false, playerRole: "batsmen" },
    { playerName: "Rajat Patidar", isCaptain: false, playerRole: "batsmen" },
    { playerName: "Glen Maxwell", isCaptain: false, playerRole: "batsmen" },
    { playerName: "AB De Villiers", isCaptain: false, playerRole: "keeper" },
    { playerName: "Daniel Sams", isCaptain: true, playerRole: "allRounder" },
    {
      playerName: "W. Sundar",
      isCaptain: false,
      playerRole: "allRounder",
    },
    { playerName: "K. Richardson", isCaptain: false, playerRole: "allRounder" },
    { playerName: "Y. Chahal", isCaptain: false, playerRole: "bowler" },
    { playerName: "M. Siraj", isCaptain: false, playerRole: "bowler" },
  ];

  const team = btn === true ? data : rcbData;

  return (
    <div className="p-2 sm:border rounded-md space-y-2 sm:h-72">
      {!!props.hideTitle ? (
        ""
      ) : (
        <Text
          fontFamily="Roboto Condensed"
          class="text-sm font-semibold pb-1"
          text="Announced Players"
          fontColor="#283574"
        />
      )}
      <div className="flex justify-center -space-x-2">
        <button
          onClick={() => setBtn(true)}
          className={`bg-gray-100 w-32  ${
            btn && "shadow-md border z-10 rounded-md"
          } `}
        >
          <Text
            fontFamily="Roboto Condensed"
            class="text-sm font-bold"
            text="CSK"
            fontColor="#283574"
          />
        </button>
        <button
          onClick={() => setBtn(false)}
          className={`bg-gray-100 w-32  rounded-md ${
            !btn && "shadow-md border z-10 rounded-md"
          } `}
        >
          <Text
            fontFamily="Roboto Condensed"
            class="text-sm font-bold"
            text="RCB"
            fontColor="#656666"
          />
        </button>
      </div>

      <div className="grid grid-cols-3 space-x-2 space-y-4 sm:px-4 sm:space-x-4">
        {team.map((el, index) => (
          <div
            className="flex justify-between bg-gray-100 border mt-4 ml-2 pl-2 sm:ml-4 sm:pl-4"
            key={index}
          >
            <div>
              <Text
                fontFamily="Roboto Condensed"
                class="text-xs font-medium pt-2"
                text={el.playerName}
                fontColor="#283574"
              />
            </div>
            <div className="flex items-center">
              {el.isCaptain && (
                <div className="bg-red-600 text-white rounded-full text-center text-xs w-5 h-5 ">
                  C
                </div>
              )}
              <div>
                <img
                  src={`static/images/${
                    el.playerRole === "bowler"
                      ? "ball.svg"
                      : el.playerRole === "keeper"
                      ? "keeper.svg"
                      : el.playerRole === "allRounder"
                      ? "allrounder.svg"
                      : "bat.svg"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncedPlayers;
