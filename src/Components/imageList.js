 

const ImageList = ({images}) => {



    return(
        <div className="images">
             {
                images &&
                images.map((value, index)=>{
                     console.log(value.urls.small)
                    return (
                    <img key={index} src={value.urls.small} alt={value.alt_description} />
                    )
                }    
                )
             }
        </div>
    )

}

export default ImageList;