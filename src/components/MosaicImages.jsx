import img2 from '../assets/img2.avif'
import images from'../assets/images.avif'
import './gallery.css'
import img5 from '../assets/img5.avif'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";

function MosaicImages() {
    let data = [
        {
            id: 2,
            imgSrc: img2
        },
        {
            id: 4,
            imgSrc: images
        },
        {
            id: 5,
            imgSrc: img5,
        },
    ];

    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const getImg = (imgSrc) => {
        setTempImg(imgSrc);
        setModel(true);
    };

    return (
        <div>
            <div className={model ? "model open" : "model"}>
                <img src={tempImg} alt="" />
                <IoClose className='absolute top-0 right-0 h-8 w-8 cursor-pointer text-white ' onClick={() => setModel(false)} />
            </div>
            <h1 className="text-center text-3xl mb-4 pt-2 font-bold font-mono text-red">Gallery</h1>
            <div className='gallery'>
                {data.map((item, index) => (
                    <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" className="img-style" />
                    </div>
                ))}
            </div>
        // </div>
    );
}

export default MosaicImages;
