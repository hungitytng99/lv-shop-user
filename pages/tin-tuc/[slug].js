import React from "react";
import Head from "next/head";
import Layout from "src/components/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { articleService } from "./../../src/services/articles/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import CardNews from "src/components-share/Card/CardNews/CardNews";

export default function BaiViet(props) {
    const { article, relativeArticles } = props;
    let breadcrumb = [
        {
            title: "Tin tức",
            url: "/tin-tuc",
        },
    ];
    return (
        <>
            <Head>
                <title>{breadcrumb[1]?.title || breadcrumb[0].title}</title>
            </Head>
            <Layout titlePage={breadcrumb[1]?.title || breadcrumb[0].title} breadcrumb={breadcrumb}>
                <Container className="article_detail">
                    <h4>{article.title}</h4>
                    <div style={{ color: "gray", margin: "15px 0px" }}>
                        <span style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        <span>{article.date}</span>
                    </div>
                    <div style={{ marginBottom: "20px" }}>{article.desc}</div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                    <hr />
                    <div className="share_icon" style={{ marginBottom: "20px" }}>
                        <span>Chia sẻ: </span>
                        <span className="fb" style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span className="ggplus" style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon icon={faGooglePlus} />
                        </span>
                        <span className="twist" style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </div>
                    <Row>
                        {relativeArticles.articles.map((item, index) => {
                            if (index < 3) {
                                return (
                                    <Col key={item.urlPage + index} lg={4} xs={6}>
                                        <CardNews data={item} />
                                    </Col>
                                );
                            }
                        })}
                    </Row>
                </Container>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query } = context;

    try {
        if (token == undefined) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false,
                },
            };
        }
        const id = Number(query.slug.split("-")[0]) || "";
        const response = await articleService.getArticleById(id);
        console.log({
            query,
            response,
        });
        return {
            props: {
                article: response.data.article,
                relativeArticles: response.data.relativeArticles,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
}
