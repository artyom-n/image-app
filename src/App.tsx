import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import dog1 from './components/images/dog1.png';
import dog2 from './components/images/dog2.png';
import dog3 from './components/images/dog3.png';
import cat1 from './components/images/cat1.png';
import cat2 from './components/images/cat2.png';
import cat3 from './components/images/cat3.png';
import horse1 from './components/images/horse1.png';
import horse2 from './components/images/horse2.png';
import horse3 from './components/images/horse3.png';

interface AnimalInterface {
  id: number;
  name: string;
  type: string;
  description: string;
  img: string;
  change: boolean;
}

const AnimalArray = [
  {
    id: 1,
    name: 'Dog1',
    type: 'Dog',
    description: 'Lucky dog',
    img: dog1,
    change: true,
  },
  {
    id: 2,
    name: 'Dog2',
    type: 'Dog',
    description: 'Dog with mask',
    img: dog2,
    change: true,
  },
  {
    id: 3,
    name: 'Dog3',
    type: 'Dog',
    description: 'Nice dog',
    img: dog3,
    change: true,
  },
  {
    id: 4,
    name: 'Cat1',
    type: 'Cat',
    description: 'A lot of cats',
    img: cat1,
    change: true,
  },
  {
    id: 5,
    name: 'Cat2',
    type: 'Cat',
    description: 'Sly cat',
    img: cat2,
    change: true,
  },
  {
    id: 6,
    name: 'Cat1',
    type: 'Cat',
    description: 'Shy cat',
    img: cat3,
    change: true,
  },
  {
    id: 7,
    name: 'Horse1',
    type: 'Horse',
    description: 'White horse',
    img: horse1,
    change: true,
  },
  {
    id: 8,
    name: 'Horse2',
    type: 'Horse',
    description: 'Brown horse',
    img: horse2,
    change: true,
  },
  {
    id: 9,
    name: 'Horse3',
    type: 'Horse',
    description: 'Black horse',
    img: horse3,
    change: true,
  },
];

const AnimalMain = () => {
  
  const [animalFilter, setAnimalFilter] = useState<AnimalInterface[]>(AnimalArray);

  const showDogs = () => {
    const newArr = AnimalArray.filter((animal) => animal.type === 'Dog');
    setAnimalFilter(newArr);
  };

  const showCats = () => {
    const newArr = AnimalArray.filter((animal) => animal.type === 'Cat');
    setAnimalFilter(newArr);
  };

  const showHorses = () => {
    const newArr = AnimalArray.filter((animal) => animal.type === 'Horse');
    setAnimalFilter(newArr);
  };

  const showAll = () => {
    const newArr = [...AnimalArray];
    setAnimalFilter(newArr);
  };

  const toggleCard = (id: number) => {
    const newArr = animalFilter.map((animal) => {
      if (animal.id === id) {
        if (animal.change === true) {
          return { ...animal, change: false };        
        } else {
          return { ...animal, change: true };
        }
      }
      return animal;
    });
    setAnimalFilter(newArr);
  };

  return (    
      <div className="container">       
            <div className="card-wrapper">
              {animalFilter.map((animal) => (
            <div          
              role="button"
              tabIndex={0}
              key={animal.id}
              className="card"
              onClick={() => toggleCard(animal.id)}
            >
              {animal.change ? (
                <img src={animal.img} alt="" className="card__image" />
              ) : (
                <h2>{animal.description}</h2>
              )}
            </div>
          ))}
              <>
                <Button text="Show dogs" clickHandler={() => showDogs()} />
                <Button text="Show cats" clickHandler={() => showCats()} />
                <Button text="Show horses" clickHandler={() => showHorses()} />
                <Button text="Show all" clickHandler={() => showAll()} />
              </> 
            </div>              
      </div>   
  );
};

export default AnimalMain;
