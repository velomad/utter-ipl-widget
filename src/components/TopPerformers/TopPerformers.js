import React from "react";
import { Text } from "../../common";

export default function Topperformers(props) {
  return (
    <React.Fragment>
      <div className=" h-72 sm:border w-full p-2 rounded-md">
        <h4 className="text-sm font-semibold pb-2">
          <Text
            text="Top Performers in last 5 Matches"
            fontColor="#283574"
            fontWeight="600"
          />
        </h4>

        <div className="flex overflow-auto md:overflow-x-hidden space-x-4 w-full">
          {[
            ...new Array(
              "Virat Kohli",
              "Glenn Maxwell",
              "Suresh Raina",
              "Devdut Padikkal",
              "AB De Villiers"
            ),
          ].map((el, index) => (
            <div className=" box-container flex flex-col items-center">
              <div className="flex flex-col border-r border-t border-l border-gray-300 rounded-bl-0 rounded-br-0 w-32 rounded-tl-md rounded-tr-md">
                <img
                  class="h-20 w-20 object-cover object-center mx-auto mt-1"
                  src={`/static/images/${index + 1}.png`}
                  alt="player"
                />
                <p className="text-sm font-bold text-center">
                  <Text text={el} fontColor="#283574" fontWeight="600" />
                </p>
              </div>
              <div className="flex flex-col bg-gray-100 border border-gray-300 rounded-md w-36">
                <div className="flex flex-col items-center space-y-2 py-2">
                  <div>
                    <p
                      style={{ fontSize: "0.6rem" }}
                      className="font-semibold text-center"
                    >
                      Runs
                    </p>
                  </div>
                  <div className="flex flex-row items-center space-x-1">
                    <div className="bg-white w-5 h-5 rounded-full">
                      <p
                        style={{ fontSize: "0.7rem" }}
                        className="font-bold text-xs flex items-center justify-center"
                      >
                        <Text text="45" fontColor="#283574" fontWeight="600" />
                      </p>
                    </div>
                    <div className="bg-white w-5 h-5 rounded-full">
                      <p
                        style={{ fontSize: "0.7rem" }}
                        className="font-bold text-xs text-center"
                      >
                        <Text text="05" fontColor="#283574" fontWeight="600" />
                      </p>
                    </div>
                    <div className="bg-white w-5 h-5 rounded-full">
                      <p
                        style={{ fontSize: "0.7rem" }}
                        className="font-bold text-xs text-center"
                      >
                        <Text text="56" fontColor="#283574" fontWeight="600" />
                      </p>
                    </div>
                    <div className="bg-white w-5 h-5 rounded-full">
                      <p
                        style={{ fontSize: "0.7rem" }}
                        className="font-bold text-xs text-center"
                      >
                        <Text text="45" fontColor="#283574" fontWeight="600" />
                      </p>
                    </div>
                    <div className="bg-white w-5 h-5 rounded-full">
                      <p
                        style={{ fontSize: "0.7rem" }}
                        className="font-bold text-xs text-center"
                      >
                        <Text text="12" fontColor="#283574" fontWeight="600" />
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between space-x-3 pt-2">
                    <div>
                      <p
                        style={{ fontSize: "0.6rem" }}
                        className="font-semibold text-center"
                      >
                        Total
                      </p>
                      <p className="text-xs font-bold text-center">
                        <Text text="209" fontColor="#283574" fontWeight="600" />
                      </p>
                    </div>
                    <div>
                      <p
                        style={{ fontSize: "0.6rem" }}
                        className="font-semibold text-center"
                      >
                        Avg.
                      </p>
                      <p className="text-xs font-bold text-center">
                        <Text text="42" fontColor="#283574" fontWeight="600" />
                      </p>
                    </div>
                    <div>
                      <p
                        style={{ fontSize: "0.6rem" }}
                        className="font-semibold text-center"
                      >
                        S/R
                      </p>
                      <p className="text-xs font-bold text-center">
                        <Text
                          text="122.9"
                          fontColor="#283574"
                          fontWeight="600"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-r h-3 border-b border-l border-gray-300 rounded-bl-md rounded-br-md rounded-tl-0 rounded-tr-0 w-32"></div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
