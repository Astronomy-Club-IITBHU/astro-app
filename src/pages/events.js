import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../css/timeline.css';
import Layout from "../components/layout";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const events = [{
  name: "Lorem ipsum",
  when: "Jan",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 1
}, {
  name: "Lorem ipsum",
  when: "Feb",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 2
}, {
  name: "Lorem ipsum",
  when: "Mar",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 3
}, {
  name: "Lorem ipsum",
  when: "Apr",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 4
}, {
  name: "Lorem ipsum",
  when: "May",
  info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  id: 5
}];

const Event = () => {
  return <Layout>
    <div class="relative lg:w-1/2 lg:left-1/4">
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
    <div class="container mt-20 mx-auto">
      <div class="row">
        <div class="col">
          <div class="main-timeline">
            {
              events.map((event) => {
                return (
                  <div class="timeline">
                    <div class="timeline-content">
                      <span class="timeline-year">{event.when}</span>
                      <div class="content">
                        <h3 class="title">{event.name}</h3>
                        <p class="description">{event.info}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  </Layout>
};

export default Event;