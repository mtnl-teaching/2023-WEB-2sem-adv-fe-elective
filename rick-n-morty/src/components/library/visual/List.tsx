import React from "react";
import { motion } from "framer-motion"
import ListCSS from './List.module.css'

export const List = () => {
  
   let ObjectList =[
    {
      specie: 'Human',
      type: 'Unknown',
      gender: 'Male',
      origin: 'Earth (C-137)',
      location: 'Earth (Replacement Dimension)'
  }
   ];
    
      let lists: unknown = [];

      ObjectList.forEach((item, index) => {
        lists.push(

          <div className={ListCSS.default} key={index}>
            <motion.ul whileHover={{ scale: 1.2,}}>
              <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
              <label> Specie:</label> <p>{item.specie}</p> </motion.li>
              <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
              <label>Type:</label> <p>{item.type}</p> </motion.li>
              <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
              <label> Gender:</label>  <p>{item.gender}</p></motion.li> 
              <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
              <label> Origin:</label>  <p>{item.origin}</p></motion.li> 
              <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
              <label>Location:</label> <p>{item.location}</p></motion.li>
            </motion.ul>
          </div>
        );
      });
  
      return lists;
    };
