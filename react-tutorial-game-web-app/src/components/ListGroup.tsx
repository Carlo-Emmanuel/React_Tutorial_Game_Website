//Control + M + D while clicked on class name to replace 'class' to 'className'
//Command Pallete -> format document -> configure -> Prettier set default

//Emmet to wrap all elements in div or Fragment

//import {Fragment} from "react";
//import { MouseEvent } from "react";
import { useState } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //arr[0]; //variable (selectedIndev)
  //arr[1]; //updater function

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    //use {} to render items dynamically
  );
}

export default ListGroup;

/*
{items.length === 0 ? <p>No item found</p> : null}
 alt for :{items.length === 0 && <p>No item found</p>}

Event Handler
const handleClick = (event: MouseEvent) => console.log(event);
Type annotation^^
*/
