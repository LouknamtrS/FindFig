import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import Item from '../../components/Item.jsx'
import Filter from "../../components/Filter.js";
import ButtonMenu from "../../components/icon/ButtonMenu.js";
import SearchIcon from "../../components/icon/SearchIcon.js";
import { ShopContext } from "../../components/ShopContext/ShopContext.jsx";
const filterList = [
  {
    title: "Series",
    list: ["Elden Ring","Resident Evil","SPY X FAMILY","My Hero Academia", "Harry Potter", "Loki"] 
  },
  {
    title: "Figure Type",
    list: ["Chibi Figures", "Nendoriod", "Statues", "Prize Figures", "Scale Figures", "Action Figures"] 
  },
  {
    title: "Manufacturer",
    list: ["Bandai","PureArts","Kotobukiya","Good Smile Company", "Banpresto", "MegaHouse", "FuRyu"] 
  },
  {
    title: "Fandom",
    list: ["Anime","Marvel","Game","Harry Potter"] 
  }
]



export default function () {
  const [ filteredFigure, setFilteredFigure ] = useState([])
  const [ filteredTags, setFilteredTags ] = useState([])
  const [ filteredSeries, setFilteredSeries ] = useState([])
  const [ filteredType, setFilteredType ] = useState([])
  const [ filteredManu, setFilteredManu ] = useState([])
  const { data_product } = useContext(ShopContext)
  const [ searchItem, setSearchItem ] = useState([])
    const allFigure = data_product
  
  function filterHandler (isChecked,tag, title) {
    //switch case
    switch (title) {
      case 'Fandom':
        if (isChecked) {
          setFilteredTags(tags => [...tags , tag])
        } else {
          setFilteredTags(tags => tags.filter(e => e !== tag))
        }
        break;
      case 'Figure Type':
        if (isChecked) {
          setFilteredType(tags => [...tags , tag])
        } else {
          setFilteredType(tags => tags.filter(e => e !== tag))
        }
        break;
      case 'Manufacturer':
        if (isChecked) {
          setFilteredManu(tags => [...tags , tag])
        } else {
          setFilteredManu(tags => tags.filter(e => e !== tag))
        }
        break;
      case 'Series':
        if (isChecked) {
          setFilteredSeries(tags => [...tags , tag])
        } else {
          setFilteredSeries(tags => tags.filter(e => e !== tag))
        }
        break;  
    }
  }

  useEffect( () => {
    setFilteredFigure( () => {
      return allFigure.filter(figure => {
        let isTags = true
        let isType = true
        let isSeries = true
        let isManu = true
        let isSearch = true
        if (filteredTags.length > 0) {
          isTags = filteredTags.every(tag => figure.tags.includes(tag))
        }
        if (filteredSeries.length > 0) {
          isSeries = filteredSeries.every(tag => figure.series === tag)
        }
        if (filteredType.length > 0) {
          isType = filteredType.every(tag => figure.tags.includes(tag))
        }
        if (filteredManu.length > 0) {
          isManu = filteredManu.every(tag => figure.manufacturer === tag)
        }
        if (searchItem != '') {
          isSearch = figure.name.toLowerCase().includes(searchItem.toLowerCase())
        }
        return isManu && isSeries && isTags && isType && isSearch
      })
    })
  },[filteredTags,filteredSeries,filteredType,filteredManu,searchItem])

  function textHandler(e) {
    setSearchItem(()=> e.target.value)
  }

  return (
    <>
      <div className="HP d-flex flex-row h-100">
        <div className="side-menu d-flex flex-column flex-shrink-0 p-3" style={{ width: "240px" }}>
          <ul className="nav nav-pills flex-column">
            <li key="home"><ButtonMenu name="Home" /></li>
            <li key="showcase"><ButtonMenu name="Showcase" /></li>
            <li key="sell"><ButtonMenu name="Sell" /></li>
          </ul>
        <hr/>
          { filterList.map((f) => (<Filter key={ f.title } title={f.title} list={f.list} filterHandler={filterHandler}/>)) }
          
        </div>
        
        <div className="marketplace">
          <form className="d-flex my-3" role="search">
            <input className="form-control my-2 mx-4" value={searchItem} type="text" placeholder="find your favorite figure" aria-label="Search" onChange={textHandler}/>
          </form>

            <div className="p-4 pt-0">
              <p className="item w-100 mt-3 fw-semibold fs-4  text-left">All Item</p>
              <hr />
              <div className="item-container d-flex flex-row overflow-auto flex-wrap w-100" style={{width: "95%"}}>
                    {
                      // filteredTags.length === 0 ? allFigure.map( e => (<Item name={ e.name } id={ e.id } price={ e.price } thumb={ e.imgs[0] }/>))
                      filteredFigure.map(e => (<Item name={ e.name } id={ e.id } price={ e.price } thumb={ e.imgs[0] }/>))
                    }
              </div>
            </div>
        </div>
      </div>
    </>
  );
}