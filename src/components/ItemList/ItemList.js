import React from "react";
import Item from "../Item/Item";
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ({items}) => (

  <ul>
    {items.map(item =><li key={item.value}>
      <Checkbox /><Item value={item.value} isDone={item.isDone}/>
    </li> )}
  </ul>
)

export default ItemList;

// export default function Checkboxes() {
//   const [checked, setChecked] = React.useState(true);
//
//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };
//
//   return (
//     <div>
//       <li>
//         <Checkbox
//           checked={checked}
//           onChange={handleChange}
//           inputProps={{ 'aria-label': 'primary checkbox' }}
//         />
//       </li>
//       <li>
//         <Checkbox
//           checked={checked}
//           onChange={handleChange}
//           inputProps={{ 'aria-label': 'primary checkbox' }}
//         /> Привет
//       </li>
//     </div>
//   );
// }



