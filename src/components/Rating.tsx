"use client";
import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

interface IRatingProps {
  rating: number;
  vote: boolean;
  setVote: any;
  size : string
}

export default function Rating({ 
  rating, 
  vote = false, 
  setVote = null,
  size = "text-xl"
}: IRatingProps) {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const getColor = (index : number) => {
    if (hoverRating >= index) {
      return "#000000"
    } else if (!hoverRating && rating >= index) {
      return "#000000"
    }
    return "#DCDCDC"
  };

  const handleVote =(idx:number)=>{
    if(vote){
      setVote(idx)
    }
  }

  const handleHover =(idx:number)=>{
    if(vote){
      setHoverRating(idx)
    }
  }

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className={`${vote == true ? "cursor-pointer" : ""} ${size}`}
          icon={faStar}
          onClick={() => handleVote(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => handleHover(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [rating, hoverRating]);


  return (
    <div>{starRating}</div>
  );
}
