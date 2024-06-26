import axios from "axios"
async function searchImage (term) 
{
    let response = await axios.get( ( "https://api.unsplash.com/search/photos/" ), {
        headers:
        {
            Authorization: "Client-ID whQ_WFlMFhoUvgKvmIyPwRV2A4Br4Za9FeEMosrNRfo",
        },
        params:
        {
            query: term,
        }
    } );
    return response.data.results;
}
export default searchImage;