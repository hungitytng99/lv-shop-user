import React from "react"
import Link from "next/dist/client/link"
export default function CardReview(props) {
    const { data } = props
    return (
        <div className="review_card">
            <div className="review_card-img">
                <img src={data.imageUrl} />
            </div>
            <p className="review_card-title">
                <Link href={data.urlPage} passHref>
                    <a>{data.title}</a>
                </Link>
            </p>
            <p>
                <Link href={data.urlPage} passHref>
                    <a>Xem tất cả</a>
                </Link>
            </p>
        </div>
    )
}
