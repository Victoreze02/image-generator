import {useState} from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import './App.css';
import carz from './src/assets/carz.webp'

function App() {
  const [images, setImages] = useState ([]);
  const handleSubmit = async  (term) => {
   //console.log ('Do a search with', term);
   const result = await searchImages(term);

   setImages(result);

  };
  

  return (
    <>

    <div className="font-bold pb-5">Image <span className='bg-red-600'>Generator</span></div>
    <img src={carz} alt="Car image" />

      {/* props */}
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images} />
    </>
  )
}

export default App
