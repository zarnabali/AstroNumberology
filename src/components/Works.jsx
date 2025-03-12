// First, let's create the astronomy blogs array (add this to your constants.js file)
import blog1 from '../assets/logo/blog1.png'; // Import your astronomy images
import blog2 from '../assets/logo/blog2.png';
import blog3 from '../assets/logo/blog3.png';
import BasicWrapper from '../hoc/BasicWrapper';




// Now let's modify your component to use the astronomy blogs
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';

import { fadeIn, textVariant } from '../utils/motion';




export const astronomyBlogs = [
  {
    title: "The Hidden Galaxies of the Deep Field",
    description:
      "Exploring astonishing images captured by the James Webb Space Telescope, revealing thousands of previously unseen galaxies in what appeared to be empty space.",
    tags: [
      {
        name: "galaxies",
        color: "blue-text-gradient"
      },
      {
        name: "telescope",
        color: "green-text-gradient"
      },
      {
        name: "cosmology",
        color: "pink-text-gradient"
      }
    ],
    image: blog1,
    link: "https://yourblog.com/hidden-galaxies"
  },
  {
    title: "Nebulae: The Stellar Nurseries",
    description:
      "A deep dive into how nebulae form new stars, exploring the incredible processes that transform cosmic dust and gas into the brilliant stars that populate our universe.",
    tags: [
      {
        name: "nebulae",
        color: "blue-text-gradient"
      },
      {
        name: "stellar-formation",
        color: "green-text-gradient"
      },
      {
        name: "astrophysics",
        color: "pink-text-gradient"
      }
    ],
    image: blog2,
    link: "https://yourblog.com/nebulae-stellar-nurseries"
  },
  {
    title: "Black Holes: Universe's Perfect Predators",
    description:
      "Understanding the physics behind black holes, how they form, grow, and the profound impact they have on spacetime and surrounding astronomical objects.",
    tags: [
      {
        name: "blackholes",
        color: "blue-text-gradient"
      },
      {
        name: "spacetime",
        color: "green-text-gradient"
      },
      {
        name: "relativity",
        color: "orange-text-gradient"
      }
    ],
    image: blog3,
    link: "https://yourblog.com/black-holes"
  },
];


const BlogCard = ({ index, title, description, tags, image, link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        onClick={() => window.open(link, '_blank')}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* You could add a read icon or other indicators here if desired */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <div className="relative p-10" id='blog'>
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('src/assets/logo/back2.jpg')", // Use an astronomy-themed background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.7, // Adjusted for readability with astronomy theme
        }}
      />
      
      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <p className='text-white'>My Astronomy Articles</p>
          <h2 className={styles.sectionHeadText}>Cosmic<span className="text-[#dcb483]"> Blogs.</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Explore the wonders of our universe through these astronomy blogs. From deep space objects to planetary science and future space missions, these articles offer fascinating insights into the cosmos.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {astronomyBlogs.map((blog, index) => (
            <BlogCard
              key={`blog-${index}`}
              index={index}
              title={blog.title}
              description={blog.description}
              tags={blog.tags}
              image={blog.image}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicWrapper(Blogs,'blogs');