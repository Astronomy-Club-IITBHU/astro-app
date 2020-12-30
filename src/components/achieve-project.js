import React from "react";

const AchieveProject = () => {
  const achievements = [
    {
      name: "NSSC IIT KGP",
      events: [
        {
          eventName: "Case Study (on Asteroid mining)",
          result: "1st (Ayush Kumar Singh & Shristi Singh)"
        },
        {
          eventName: "Designeer",
          result: "3rd (Rahul Viswakarma, Pranjal & Yash Agrawal)"
        },
        {
          eventName: "The Science of Paper Folding",
          result: "2nd (Yash Vinod & Vaibhav Krishna)"
        }
      ]
    },
    {
      name: "Inter IIT Tech Meet",
      events: [
        {
          eventName: "Star Cluster Identifying",
          result: "3rd (Sambhav Jain, Yash Agrawal, Abhishek & Govindswaroop Rahangdale)"
        }
      ]
    }
  ]

  const projects = [
    {
      name: "SERAI (Space Exploration, Research and Analysis Initiative)",
      desc: "On November 17, 2018, our club, under the ambit of Science and Technology Council and with the help of our alumni from the batch of '93 and Student Alumni Interaction Cell, IIT BHU Varanasi (SAIC) initiated SERAI. This initiative commences the beginning of space research in our institute, and as the first step in this direction the alumni of '93 funded the institute's first very own planetarium"
    }
  ]
  return (
    <div className="lg:w-2/3 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5 mx-10 mb-5 bg-white ">
      <div className="text-2xl	text-center pb-2">Achievements</div>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      {
        achievements.map(data => {
          return (
            <div class="my-3">
              <div class="inline my-2 text-xl">{data.name}</div>
              {
                data.events.map(event => {
                  return (
                    <ul class="px-5 list-disc list-inside">
                      <li class="text-lg text-gray-200">{event.eventName}: <span class="text-md text-gray-300">{event.result}</span></li>
                    </ul>
                  )
                })
              }
            </div>
          )
        })
      }
      <div className="text-2xl text-center pb-2 mt-5">Projects</div>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      {
        projects.map(data => {
          return (
            <div class="my-3">
              <div class="inline text-xl">{data.name}</div>
              <p class="my-2 text-gray-200">{data.desc}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default AchieveProject;
