import React from "react";

const books = [
  {
    name: "Cosmology",
    path:
      "https://drive.google.com/file/d/0BxKy_-H3AlSkUkQ0c2ZpUmhhbk0/view?usp=drivesdk",
  },
  {
    name: "Introduction to Astronomy",
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
    name: "Astronomy / Astrophysics (Professor Dave)",
    link: "https://youtu.be/i8U9ZjRXClI",
  },
  {
    name: "The Theoretical Minimum (Professor Leonard Susskind)",
    link: "http://theoreticalminimum.com/courses",
  },
];
const Magazines = [
  {
    name: "Corona (latest)",
    path:
      "https://drive.google.com/file/d/19uPWFiL4JiW83NmDBeQe57-z15I3YQgf/view?usp=drivesdk",
  },
];
const Resources = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-4 pt-4">
        <div class="flex justify-center my-5">
          <div class="text-gray-200 text-4xl ">Books</div>
        </div>
        <div className="bg-gray-300 rounded-md overflow-hidden mx-8">
          {books.map(book => (
            <div className="text-center text-black py-2 border-b-2 border-gray-800 hover:text-white hover:bg-gray-800">
              <a
                href={book.path}
                className="text-lg font-bold inline-block w-full hover:text-2xl"
              >
                {book.name}
              </a>
            </div>
          ))}
        </div>
        <div class="flex justify-center my-5">
          <div class="text-gray-200 text-4xl ">Videos</div>
        </div>
        <div className="bg-gray-300 rounded-md overflow-hidden mx-8">
          {playlist.map(video => (
            <div className="text-center text-black py-2 border-b-2 border-gray-800 hover:text-white hover:bg-gray-800">
              <a
                href={video.link}
                className="text-lg font-bold inline-block w-full hover:text-2xl"
              >
                {video.name}
              </a>
            </div>
          ))}
        </div>
        <div class="flex justify-center my-5">
          <div class="text-gray-200 text-4xl ">Magazines</div>
        </div>
        <div className="bg-gray-300 rounded-md overflow-hidden mx-8">
          {Magazines.map(magazine => (
            <div className="text-center text-black py-2 border-b-2 border-gray-800 hover:text-white hover:bg-gray-800">
              <a
                href={magazine.path}
                className="text-lg font-bold inline-block w-full visited:text-brown"
              >
                {magazine.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
