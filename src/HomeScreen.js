import React from 'react'
import Navv from './Navv';
import Banner from './Banner';
import Bottom from './Bottom';
import requests from './Request';
function HomeScreen() {
  return (
    <div>
       <Navv/>
    <Banner/>
   <Bottom title={'Action'} fetchurl={requests.Action}/>
   <Bottom title={'Comedy'} fetchurl={requests.Comedy}/>
   <Bottom title={'Documentries'} fetchurl={requests.Documentries}/>
   <Bottom title={'Horror'} fetchurl={requests.Horror}/>
   <Bottom title={'Netflix-Orginals'} fetchurl={requests.Originals}/>
   <Bottom title={'Romance'} fetchurl={requests.Romance}/>
   <Bottom title={'Top-rated'} fetchurl={requests.TopRated}/>
   <Bottom title={'Trending'} fetchurl={requests.Trending}/>
    </div>
  )
}

export default HomeScreen;
