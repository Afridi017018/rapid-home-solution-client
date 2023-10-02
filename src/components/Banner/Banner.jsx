import React from 'react';

const Banner = () => {
    return (
        <div className='relative flex justify-center mb-36'>
            <div className="carousel w-full h-[480px] opacity-90">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/repairman-holds-screwdriver-suitcase-tools-kitchen-looks-camera_353017-487.jpg?size=626&ext=jpg" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176719.jpg?size=626&ext=jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/part-male-construction-worker_329181-3734.jpg?size=626&ext=jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/cheerful-asian-plumber-sitting-floor-repairing-kitchen-sink_1098-17780.jpg?size=626&ext=jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


{/* banner-category */}

<div className='bg-red-200 w-2/3 h-52 absolute -bottom-24 shadow-2xl rounded-xl'>
coming soon ...
</div>


        </div>
    );
};

export default Banner;