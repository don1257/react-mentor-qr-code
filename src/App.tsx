import * as React from 'react';
import Card from './Card/Card'
import './App.css'

export default function App() {
  return (
      <div className='App-background'>
        <Card
            title = 'Improve your front-end skills by building projects'
            description = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
        ></Card>
      </div>
  );
}
