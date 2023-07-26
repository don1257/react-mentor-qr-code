import * as React from 'react';
import Card from './Card/Card'
import FontComponent from "./FontComponent";

export default function App() {
  return (
      <div>
        <FontComponent />
        <Card
            title = 'Improve your front-end skills by building projects'
            description = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
        ></Card>
      </div>
  );
}
