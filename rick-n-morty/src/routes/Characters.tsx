import React, {useEffect, useState} from "react";
import Hero from "../components/Hero";
import Grid from "../Layouts/Grid";
import Card from "../components/Card";
import useGetAllCharacters from "../data-fetching/useGetAllCharacters";
import CommonButton from "../components/library/buttons/CommonButton";
import styles from "./Characters.module.css"

export interface Character {
  id: string;
  name: string;
  species: string;
  image: string;
}

const Characters = () => {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState<Character[]>([])
  const {error, data} = useGetAllCharacters(page);

  function handleClick() {
    setPage(page => page + 1)
  }

  useEffect(() => {
    if (data) {
      const temp = data.characters.results;
      console.log(temp)
      setAllData((current) => [...current, ...temp])
    }
  }, [data])

  return (
      <>
        <Hero/>
        <Grid>
          {allData.map((character: Character) => {
            return (
                <div key={character.id}>
                  <Card
                      title={character.name}
                      subTitle={character.species}
                      img={character.image}
                  />
                </div>
            );
          })}
        </Grid>
        <div className={styles.buttonDiv}>
          <CommonButton text={"Load more"} onClick={handleClick}/>
        </div>
      </>
  );
};

export default Characters;
