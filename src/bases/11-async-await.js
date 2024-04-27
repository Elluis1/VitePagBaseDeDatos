const getImagen = async() => {

    const apiKey = '3D6K4z8O2a4rIKUE3NQbl7CBQVqXNm6u'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json()

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );

}

getImagen();


//     .then( resp => resp.json()
//     .then( ({data}) => {
//         const { url } = data.images.original;
//         console.log(url)

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//     })
// )
//     .catch(console.warn)