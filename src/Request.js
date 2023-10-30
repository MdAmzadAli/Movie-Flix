// import React from 'react'

    const baseurl='https://api.themoviedb.org/3';
    const api_key='4e44d9029b1270a757cddc766a1bcb63';
 const requests={
Trending:`/trending/all/week?api_key=${api_key}&language=en-US`,
Originals:`/discover/tv?api_key=${api_key}&with_networks=213`,
TopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
Action:`/discover/movie?api_key=${api_key}&with_genres=28`,
Comedy:`/discover/movie?api_key=${api_key}&with_genres=35`,
Horror:`/discover/movie?api_key=${api_key}&with_genres=27`,
Romance:`/discover/movie?api_key=${api_key}&with_genres=10749`,
Documentries:`/discover/movie?api_key=${api_key}&with_genres=99`,
 };
// https://api.themoviedb.org/3/discover/tv?api_key=4e44d9029b1270a757cddc766a1bcb63&with_networks=213
export {baseurl}
export default requests;
