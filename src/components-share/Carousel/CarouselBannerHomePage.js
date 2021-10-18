import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { ImagesPath } from "src/constants/ImagesPath"
import Image from "next/dist/client/image"
export default function CarouselBannerHomePage() {
    return (
        <Carousel autoPlay={true} interval={5000} showArrows={false} infiniteLoop={true} showThumbs={false} emulateTouch={true}>
            <div>
                <Image src={ImagesPath.banner1} />
            </div>
            <div>
                <Image src={ImagesPath.banner2} />
            </div>
            <div>
                <Image src={ImagesPath.banner3} />
            </div>
        </Carousel>
    )
}
