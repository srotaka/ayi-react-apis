import React from 'react'
//import watermelon from '../images/watermelon.png';

const MyFooter = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="container">
      <footer className="py-3 my-4 border-top" id='borderFooter'>
        <div> ©Copyright 2021-{thisYear} | <strong>Silvia Otaka</strong> | Programming with ❤</div>
      </footer>
    </div>
  )
}

export default MyFooter
