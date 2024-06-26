import ImageShow from "./ImageShow";
import "./ImageList.css"

function ImageList ({images})
{
    let rendered=images.map( ( image ) =>
    {
        return <ImageShow image={ image } key={ image.id } />
    } );
    return <div className="pics">{rendered}</div>;
}
export default ImageList;