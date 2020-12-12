import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Layout from "../components/layout";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const events = [{
  name: "Lorem ipsum",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 1
}, {
  name: "Lorem ipsum",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 2
}, {
  name: "Lorem ipsum",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 3
}, {
  name: "Lorem ipsum",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 4
}, {
  name: "Lorem ipsum",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 5
}];

const Event = () => {
  return <Layout>
    <div class="relative w-1/2 left-1/4">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >
        <div data-src="https://i.pinimg.com/originals/5a/8c/43/5a8c43597540271f92a37f89b064b8ec.png" />
        <div data-src="https://i.pinimg.com/originals/e4/12/1e/e4121ef2638b2e36b52c6cbed79da85d.jpg" />
        <div data-src="https://i.pinimg.com/originals/14/f7/6c/14f76c147e30210ed7b46a8cb315056a.png" />
      </AutoplaySlider>
    </div>
    <div class="container mx-auto w-full h-full mt-4">
      <div class="relative wrap overflow-hidden p-10 h-full">
        <div class="border-2-2 absolute border-opacity-20 border-gray-100 h-full border" style={{ left: "50%" }}></div>
        {
          events.map((event) => {
            let id = event.id, name = event.name, info = event.info;
            console.log(id % 2);
            if (id % 2) {
              console.log(<div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-200 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-black">{id}</h1>
                </div>
                <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 class="mb-3 font-bold text-gray-800 text-xl">{name}</h3>
                  <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{info}</p>
                </div>
              </div>);
              return (
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-200 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-black">{id}</h1>
                  </div>
                  <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">{name}</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{info}</p>
                  </div>
                </div>
              )
            } else {
              return (
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-200 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto text-black font-semibold text-lg">{id}</h1>
                  </div>
                  <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-white text-xl">{name}</h3>
                    <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{info}</p>
                  </div>
                </div>
              )
            }
          })}
      </div>
    </div>
  </Layout>
};

export default Event;