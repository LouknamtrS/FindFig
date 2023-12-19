import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav/Nav.jsx';
import './Home.css';
import Item from '../../components/Item.jsx';
import Filter from '../../components/Filter.js';
import ButtonMenu from '../../components/ButtonList/ButtonList.jsx';
import SearchIcon from '../../components/icon/SearchIcon.js';
import { ShopContext } from '../../components/ShopContext/ShopContext.jsx';
import { Navigate, useNavigate } from 'react-router-dom';

const filterList = [
  {
    title: 'Series',
    list: ['Elden Ring', 'Resident Evil', 'SPY x FAMILY', 'My Hero Academia', 'Harry Potter', 'Loki'],
  },
  {
    title: 'Figure Type',
    list: ['Chibi Figures', 'Nendoriod', 'Statues', 'Prize Figures', 'Scale Figures', 'Action Figures'],
  },
  {
    title: 'Manufacturer',
    list: ['Bandai', 'PureArts', 'Kotobukiya', 'Good Smile Company', 'Banpresto', 'MegaHouse', 'FuRyu'],
  },
  {
    title: 'Fandom',
    list: ['Anime', 'Marvel', 'Game', 'Harry Potter'],
  },
];





export default function () {
  const [filteredFigure, setFilteredFigure] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [filteredType, setFilteredType] = useState([]);
  const [filteredManu, setFilteredManu] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [data_products, getDataproduct] = useState([]);
  const [email, setEmail] = useState()
  useEffect(() => {
    axios
      .get('http://localhost:5000/getdata')
      .then((response) => {
        getDataproduct(response.data);
        setFilteredFigure(response.data); // Initialize filteredFigure with all data
      })
      .catch((err) => console.log(err));
  }, []);
const navigate = useNavigate()
const Logout=()=>{
  window.localStorage.removeItem("isLogedIn");
  window.localStorage.removeItem("userReceiverName");
  window.localStorage.removeItem("userTel");
  window.localStorage.removeItem("userAddress");
  
  navigate('/login')


}


  function filterHandler(isChecked, tag, title) {
    // Switch case
    switch (title) {
      case 'Fandom':
        setFilteredTags((tags) => (isChecked ? [...tags, tag] : tags.filter((e) => e !== tag)));
        break;
      case 'Figure Type':
        setFilteredType((tags) => (isChecked ? [...tags, tag] : tags.filter((e) => e !== tag)));
        break;
      case 'Manufacturer':
        setFilteredManu((tags) => (isChecked ? [...tags, tag] : tags.filter((e) => e !== tag)));
        break;
      case 'Series':
        setFilteredSeries((tags) => (isChecked ? [...tags, tag] : tags.filter((e) => e !== tag)));
        break;
    }
  }

  useEffect(() => {
    setFilteredFigure(() => {
      return data_products.filter((figure) => {
        let isTags = true;
        let isType = true;
        let isSeries = true;
        let isManu = true;
        let isSearch = true;
        if (filteredTags.length > 0) {
          isTags = filteredTags.every((tag) => figure.tags.includes(tag));
        }
        if (filteredSeries.length > 0) {
          isSeries = filteredSeries.every((tag) => figure.series === tag);
        }
        if (filteredType.length > 0) {
          isType = filteredType.every((tag) => figure.tags.includes(tag));
        }
        if (filteredManu.length > 0) {
          isManu = filteredManu.every((tag) => figure.manufacturer === tag);
        }
        if (searchItem !== '') {
          isSearch = figure.name.toLowerCase().includes(searchItem.toLowerCase());
        }
        return isManu && isSeries && isTags && isType && isSearch;
      });
    });
  }, [filteredTags, filteredSeries, filteredType, filteredManu, searchItem, data_products]);

  function textHandler(e) {
    setSearchItem(() => e.target.value);
  }
  
  return (
    <div id="wrapper">
      <header id="header-home">
        <Nav
          topic="Home"
          back="https://cdn.discordapp.com/attachments/787359617280770051/1185627079962800179/IMG_2809.png?ex=65904c43&is=657dd743&hm=6299b76964231e595e4d3be0b537324e4f2c7bccc564f1312f831521cfb925b3&"
          account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
          cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
        ></Nav>
      </header>
      <div className=" page-wrapper flex" style={{ maxWidth: '100%',minWidth: '10%' }}>

        <aside className="side-bar">
          <ButtonMenu
            home="https://cdn.discordapp.com/attachments/787359617280770051/1185561359564410890/15.png?ex=65900f0e&is=657d9a0e&hm=9a4b7cce808b350ce5697177e2a93c601486e662b2fb7f2990898858b85ccd4d&"
            showcase="https://cdn.discordapp.com/attachments/787359617280770051/1185473817343164527/Showcase_icon.png?ex=658fbd87&is=657d4887&hm=cb04ddf4ee09945cb456537e4dc6940477171066b8f86c081edfd612f4add221&"
            sell="https://cdn.discordapp.com/attachments/787359617280770051/1185561360730435634/13.png?ex=65900f0f&is=657d9a0f&hm=458beb0055830d6ccd32bf030c9806d234de580a010118712da6dda62ce2db25&"
          ></ButtonMenu>
          {filterList.map((f) => (
            <Filter key={f.title} title={f.title} list={f.list} filterHandler={filterHandler} />
          ))}
        </aside>
        <div
          style={{ justifyContent: 'center', maxWidth: '80%', minWidth: '30%', paddingBottom: '30px', paddingTop: '20px'}}
          id="content"
          className="large-12"
          role="main"
        >
          <form className="" role="search" style={{ maxWidth: '80%', minWidth: '30%', paddingBottom: '30px', paddingTop: '20px' }}>
            <input
              className="search-bar" style={{  width: '100%', justifyContent: 'center'}}
              value={searchItem}
              type="text"
              placeholder="find your favorite figure"
              aria-label="Search"
              onChange={textHandler}
            />
          </form>
            
          <div className="flex flex-col" >
            <p>All Item</p>
            <div className="flex all-figure" >
              {filteredFigure.map((e) => (
                <Item key={e.id} name={e.name} id={e.id} price={e.price} thumb={e.imgs && e.imgs.length > 0 ? e.imgs[0] : ''} />
              ))}
            </div>
          </div>
          <button onClick={()=>Logout()}>Logout</button>
        </div>
      </div>
    </div>
  );
}
