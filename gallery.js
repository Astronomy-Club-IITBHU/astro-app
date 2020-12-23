import React from "react";
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
import Img from "gatsby-image";
import '../css/gallery.css';

const captions={
  IMG_12331:"great is great alwasy"
};

const giveCaption=()=>{
  return "LoremIpsum";
};

const Gallery = () => {
  const data=useStaticQuery(graphql`
    query Images{
      images:allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        nodes {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
    }
  `);
  
  return (
    <Layout>
    {/* <div className="contains-gallery-image">
    <img className="gallery-image" src={require('../../images/Alumni.jpg') } />
    <p>This is the first test image for website</p>
    </div> */}
    {data.images.nodes.map(image=>(
      <div className="contains-gallery-image" style={{width:"30%",display:"inline-block", padding:"3px",position:"relative"}}>
      <Img 
      className="gallery-image" 
      key={image.id} 
      fluid={image.childImageSharp.fluid}
      alt="Images for  gallery"
      imgStyle={{objectFit:'contain'}}
      
      />
      <p>{giveCaption()}</p>
      </div> 
      ))}
    </Layout>
  );
};

export default Gallery;
