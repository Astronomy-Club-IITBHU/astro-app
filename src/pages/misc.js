import React from "react";
import Layout from "../components/layout";
import Equipment from "../components/equipment";
import Resources from "../components/resources";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// const members = [
// 	{
// 		year: "2020-21",
// 		names: ["Vaibhav Krishna Singh Raghav", "Aditya Keshari", "Abhishek Upadhyay"]
// 	},
// 	{
// 		year: "2019-20",
// 		names: ["Satyam Tyagi", "Govindswaroop Rahangdale", "Ayush Kumar Singh"]
// 	},
// 	{
// 		year: "2018-19",
// 		names: ["Yash Agarwal", "Sambhav Jain", "V S V Surya Prakash"]
// 	},
// 	{
// 		year: "2017-18",
// 		names: ["Archisha Patki", "Tarush Tiwari", "Vineesha Srivastava"]
// 	},
// 	{
// 		year: "2016-17",
// 		names: ["Soumyadeep Das", "Asmita Mekala", "Gaurav Somani"]
// 	},
// ];

const Members = () => {
  return (
    <Layout>
      <div className="my-10 mx-auto w-full md:w-7/12  text-white text">
        <Accordion allowZeroExpanded>
          {/* Equipment */}
          <AccordionItem className="mt-5 bg-gray-900">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="text-2xl px-1 py-1   "> &gt; Equipments</h1>
                <p className="px-5 py-1">
                  Partial inventory of Astronomy Club equipment
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Equipment />
            </AccordionItemPanel>
          </AccordionItem>
          {/*  */}
          <AccordionItem className="mt-5 bg-gray-900">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="text-2xl px-1 py-1   "> &gt; Resources</h1>
                <p className="px-5 py-1">
                  List of all the resources for the students to start exploring
                  Astronomy.
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Resources />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default Members;
