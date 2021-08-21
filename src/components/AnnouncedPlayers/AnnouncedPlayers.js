import React from "react";
import { Text } from '../../common';

const AnnouncedPlayers = () => {
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

  return (
    <div className="p-2 border rounded-md space-y-4 h-80">
      <Text
        fontFamily='Roboto Condensed'
        class='text-sm font-semibold pb-1'
        text='Announced Players'
        fontColor='#283574'
      />
      <div className="flex justify-center -space-x-2">
        <button className="bg-gray-100 w-32 z-10 shadow-md border rounded-md">
          <Text
            fontFamily='Roboto Condensed'
            class='text-sm font-bold'
            text='CSK'
            fontColor='#283574'
          />
        </button>
        <button className="bg-gray-100 w-32 rounded-md">
          <Text
            fontFamily='Roboto Condensed'
            class='text-sm font-bold'
            text='RCB'
            fontColor='#656666'
          />
        </button>
      </div>

      <div className="grid grid-cols-3 px-4 space-x-4 space-y-4">
        {data.map((el, index) => (
          <div
            className="flex justify-between bg-gray-100 border mt-4 ml-4 pl-4"
            key={index}
          >
            <div>
              <Text
                fontFamily='Roboto Condensed'
                class='text-sm font-medium pt-2'
                text={el.playerName}
                fontColor='#283574'
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
                  src={`static/images/${el.playerRole === "bowler"
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
