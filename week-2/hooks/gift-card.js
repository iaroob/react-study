/* Simple example to change text on button click */

import {useState} from 'react';

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function updateGiftCard() {
    setGiftCard(prevState => {
      return {
        ...prevState,
        text: "You just used your gift card",
        valid: false,
        instructions: "Card expired, you need to renew it again."
      }
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>Gift Card Page</h1>
      <h2>Customer: {giftCard.firstName} {giftCard.lastName}</h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {
        giftCard.valid && (<button onClick={updateGiftCard}>Spend Gift Card</button>)
      }
    </div>
  );
}