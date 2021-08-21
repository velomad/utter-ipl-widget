import React from "react";

const PlayingTeam = () => {
  const data = [
    "Sam Curran has taken Virat Kohli's wicket 8 times in IPL",
    "Suresh Raina has an average of 43 against RCB",
    "Harshal Patel has taken two wickets 5 times againtst CSK",
  ];

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9 border rounded-md">
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2 p-2 space-y-4">
              <div className="">Playing XI</div>
              <div className="">
                Utter's recommedned playing 11 for the match
              </div>

              <div className="rounded-md">
                <div
                  className="text-center text-white"
                  style={{ backgroundColor: "#283574" }}
                >
                  Wildcard
                </div>
                <div className="bg-gray-100 py-4 space-y-4">
                  <div>
                    <img
                      src="/static/images/wildcard.png"
                      className="mx-auto"
                    />
                  </div>

                  <div className="px-4">
                    <p>
                      "An exceptional bowler with great line and length. He
                      could be the joker everyone wants in their deck of the
                      playing XI. "
                    </p>
                    <div className="py-2 float-right px-2">-Utter.Ai</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 py-8">
                <div className="grid grid-cols-4 place-items-center gap-6">
                    {[...new Array(11)].map((e, index)=> (
                        <div><img src={`/static/images/${index+1}.png`} className="w-24"/></div>
                    ))}
                </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-100 border rounded-md space-y-8 p-4">
          <div>
            <img src="/static/images/cricket.png" className="mx-auto" />
          </div>

          <div>
            UtterAI Interesting <br />
            Insights
          </div>

          <div>
            {data.map((el, index) => (
              <div className="flex space-x-2">
                <div>
                  {index + 1}
                  <span>.</span>
                </div>
                <div>{el}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingTeam;
