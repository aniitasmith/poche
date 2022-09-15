import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardList from '../CardList/CardList';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => (
<div className='home'>
  <Header></Header>
  <SearchBar></SearchBar>
  <CardList></CardList>
  <Footer></Footer>
</div>
);

export default Home;