import React, {useContext} from "react";
import Image from "../components/Image"
import {Context} from "../Context";
import {getClass} from "../utils/util";

function Photos() {

    const {allPhotos} = useContext(Context);

    //console.dir(allPhotos);
    const imageEls = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    return (
        <main className="photos">
            {imageEls}
        </main>
    )
}

export default Photos