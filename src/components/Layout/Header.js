import React, {Fragment} from 'react'

import mealsImage from '../../assets/meals.jpg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      {/*<button className={''}>Cart</button>*/}
      <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt={'A table full of Delicious FOODS'} />
    </div>
  </Fragment>
}

export default Header;
