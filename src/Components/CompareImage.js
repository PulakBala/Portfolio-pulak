import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import pic1 from '../assests/images/Screenshot from 2023-04-21 18-02-37.png';
import pic2 from '../assests/images/code.png';
import './All.css'
const CompareImage = () => {
    return (
        <div className='container  flex itmes-center justify-center'>
            <ReactCompareSlider
            className='rounded-3xl md:w-8/12 mt-28 '
                itemOne={<ReactCompareSliderImage src={pic2} className="w-full"/>}
                itemTwo={<ReactCompareSliderImage src={pic1} />}
            />
        </div>
    );
};

export default CompareImage;