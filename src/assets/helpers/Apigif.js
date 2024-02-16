
export const ApiGif = async({props1}) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=JpjQjQNA9VzGkbOIz9W8yOv752iHScoW&q=${props1}&limit=10`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map( elementos =>({
        id:elementos.id,
        title:elementos.title,
        url:elementos.images.downsized_medium.url
    }) )

    return gifs;
}