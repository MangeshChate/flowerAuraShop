import React from 'react'

export default function () {
    return (

        <section className="container mt-4 gallery_section layout_padding">

            <div className="bg-dark m-5 p-4 rounded-4 text-light d-flex align-items-center justify-content-center shadow">
                <h6 className='fw-bold'>
                    " Flowers are like a gentle touch of nature's artistry, blooming in pots, spreading beauty and joy wherever they are planted. "
                </h6>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner p-5 ">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/premium-photo/hispanic-handsome-man-with-mouth-eyes-wide-open-hand-chin-flowers-pot-concept_1194-376335.jpg?w=2000" className="d-block w-100 img-fluid rounded-4 shadow-lg" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.hdqwalls.com/wallpapers/vintage-flower-pot.jpg" className="d-block w-100 img-fluid rounded-4 shadow-lg" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://wallpaperaccess.com/full/3627756.jpg" className="d-block w-100 img-fluid rounded-4 shadow-lg" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev text-black " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </section>

    )
}
