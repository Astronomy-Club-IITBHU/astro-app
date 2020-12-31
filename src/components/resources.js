import React from "react";

const books = [
  {
    name: "Cosmology",
    path:
      "https://drive.google.com/file/d/0BxKy_-H3AlSkUkQ0c2ZpUmhhbk0/view?usp=drivesdk",
  },
  {
    name: "Introduction to astronomy",
    path:
      "https://drive.google.com/file/d/0BxKy_-H3AlSkUm1fR1JRQVhKWVk/view?usp=drivesdk",
  },
  {
    name: "Radio Astronomy",
    path:
      "https://drive.google.com/file/d/1OrC5WLk3jh67BrxOY9j-NF9Zb_SklW39/view?usp=drivesdk",
  },
  {
    name: "Hyperspace",
    path:
      "https://drive.google.com/file/d/0BxKy_-H3AlSkc3I2Y3lhbXZLWHc/view?usp=drivesdk",
  },
  {
    name: "Quantum Mechanics",
    path:
      "https://drive.google.com/file/d/0ByngxFTGX5xgT3JRY1ltWHA0cVk/view?usp=drivesdk",
  },
  {
    name: "General Relativity",
    path:
      "https://drive.google.com/file/d/0BxKy_-H3AlSkWXlZMU0yeEVBbVU/view?usp=drivesdk",
  },
  {
    name: "Physics of the impossible",
    path:
      "https://drive.google.com/file/d/0BxKy_-H3AlSkcVBQQ2h1cWtFN1E/view?usp=drivesdk",
  },
];

const playlist = [
  {
    name: "Crash Course Astronomy",
    link: "https://youtu.be/sViAwfeMjV0",
  },
  {
    name: "Astronomy/Astrophysics (Proffesor Dave)",
    link: "https://youtu.be/i8U9ZjRXClI",
  },
];
const Magazines = [
  {
    name: "Corona(latest)",
    path:
      "https://drive.google.com/file/d/19uPWFiL4JiW83NmDBeQe57-z15I3YQgf/view?usp=drivesdk",
  },
];
const Resources = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-4 pt-4">
        <div className="uppercase text-2xl text-gray-100 border-b-2 border-green-200 border-opacity-50 border-dotted">
          books:
        </div>
        <ul className="list-disc list-inside">
          {books.map(book => (
            <li className="text-green-900 hover:text-green-400">
              <a href={book.path}>{book.name}</a>
            </li>
          ))}
        </ul>
        <div className="uppercase text-2xl text-gray-100 border-b-2 border-green-200 border-opacity-50 border-dotted">
          Videos:
        </div>
        <ul className="list-disc list-inside">
          {playlist.map(vedio => (
            <li className="text-green-900 hover:text-green-400">
              <a href={vedio.link}>{vedio.name}</a>
            </li>
          ))}
        </ul>
        <div className="uppercase text-2xl text-gray-100 border-b-2 border-green-200 border-opacity-50 border-dotted">
          Magazines:
        </div>
        <ul className="list-disc list-inside">
          {Magazines.map(Magazine => (
            <li className="text-green-900 hover:text-green-400">
              <a href={Magazine.path}>{Magazine.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
