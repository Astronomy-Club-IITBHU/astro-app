import React from "react";

const Table = () => {
  const telescopes = [
    {
      name: "Meade LX200",
      desc: "10 aperture, 6'' dia Schmidt-Cassegrain design, in its case on TKO platform."
    },
    {
      name: "Orion SkyQuest",
      desc: "10 aperture, 12'' dia, Dobsonian design. Currently mounted in TKO, replacing the Bobich scope."
    },
    {
      name: "Meade LXD55",
      desc: "One 10 aperture, One 8 aperture, both 90mm dia, Schmidt-Newtonian design."
    },
    {
      name: "Astromaster 102AZ",
      desc: "10 aperture, 5'' dia, Schmidt-Cassegrain design, Refractor type"
    },
    {
      name: "Orion 190mm",
      desc: "10 aperture, 6'' dia, Maksutov-Newtonian design"
    }
  ];

  return (
    <div class="mx-auto px-4 sm:px-8">
      <div class="py-8 w-5/6 mx-auto">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full overflow-hidden">
            <div class="flex justify-center my-5">
              <div class="text-gray-200 text-4xl">Telescopes</div>
            </div>
            <table class="min-w-full leading-normal mb-10">
              <tbody>
                {
                  telescopes.map((data, index) => {
                    return (
                      <tr>
                        <td class={`flex items-center justify-around py-5 border-b border-gray-200 bg-gray-300 text-md ${(index === 0) ? `rounded-t-lg` : (index === telescopes.length - 1) ? `rounded-b-lg` : ``}`}>
                          <div class="w-1/2 text-center pr-2">
                            <p class="text-gray-900 font-semibold">{data.name}</p>
                          </div>
                          <div class="w-1/2 text-center">
                            <p class="relative pr-2 text-gray-800 text-sm lg:pr-5">{data.desc}</p>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Table;
