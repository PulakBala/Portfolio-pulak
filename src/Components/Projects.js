import React from 'react';
import dexo1 from "../assests/images/dexo1.png"
import dexo2 from "../assests/images/dexo2.png"

const Projects = () => {
    return (
        
            <section className='z-40'>
                <h2 className='text-4xl font-semibold'>Projects</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols  p-28 gap-10'>
                    <div className='grd col-span-1'>
                        <img src={dexo1}/>
                        <img src={dexo2}/>
                    </div>
                    <div className='grid lg:col-span-2 col-span-1 justify-items-start'>
                        {/* <h2 className='d-inline'>DeXo Mart</h2> */}
                        <p className='text-lg'> 
                        <span className='justify-content-start text-2xl mb-5 block text-cyan-600'>DeXo Mart</span> <br></br>
                            Dexo is an online shop. Ordering, checking the order list, products can be removed from the order list.If the user is logged in, you can make the payment.</p>
                        <p>
                            <span className='font-semibold'>Technology : </span>
                            HTML || CSS || TAILWIND || JAVASCRIPT || REACT || FIREBASE || NODE.JS || STRIPE || VS CODE
                        </p>
                        <button className='btn btn-primary w-32 justify-content-center'>
                            <a href='https://dexo-mart.netlify.app/'>Live Site</a>
                        </button>
                    </div>
                </div>
                <div>
                    dexo 1
                </div>
            </section>
    );
};

export default Projects;