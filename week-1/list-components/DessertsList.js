function DessertsList(props) {

  const dessertItems = props.data.filter((item) => item.calories < 500)
                                  .sort((a, b) => a.calories - b.calories)
                                  .map(dessert => {
                                    const itemText = `${dessert.name} - ${dessert.calories} cal`;
                                    return <li>{itemText}</li>
                                  });
  // const sortedDesserts = lightDesserts.sort((a, b) => a.calories - b.calories);

  // Implement the component here.
  // const dessertItems = sortedDesserts.map(dessert => {
  //   const itemText = `${dessert.name} - ${dessert.calories} cal`;
  //   return <li>{itemText}</li>
  // });

  return (
    <div>
      <ul>
        {dessertItems}
      </ul>
   </div> 
  );
}

export default DessertsList;