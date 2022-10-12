import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardList from '../CardList/CardList';
import SearchBar from '../SearchBar/SearchBar';
import '../Home/Home.css';

const Home = () => (
<div className='home'>
  <Header page="home"></Header>
  <SearchBar></SearchBar>
  <div className='content'>
    <CardList category="breakfast"></CardList>
    <CardList category="lunch"></CardList>
    <CardList category="dinner"></CardList>
  </div>
  <Footer></Footer>
</div>
);

export default Home;