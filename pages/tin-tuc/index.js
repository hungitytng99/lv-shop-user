import React from "react";
import Layout from "src/components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import cookies from "next-cookies";
import { articleService } from "./../../src/services/articles/index";
import CardNews from "src/components-share/Card/CardNews/CardNews";
import PaginationCustom from "src/components-share/Pagination/PaginationCustom";

export default function TinTuc(props) {
    const { article, baseUrlForPagination, page, itemsPerPage } = props;
    const breadcrumb = [
        {
            title: "Tin tức",
            url: "/tin-tuc",
        },
    ];
    return (
        <div>
            <Layout titlePage="Tin tức" breadcrumb={breadcrumb}>
                <Container style={{ marginBottom: "80px" }}>
                    <div className="box_title">
                        <h4 style={{ textAlign: "center" }}>Tin tức</h4>
                    </div>
                    <Row>
                        {article?.data.map((item, index) => {
                            return (
                                <Col key={item.urlPage + index} lg={4} xs={6}>
                                    <CardNews data={item} />
                                </Col>
                            );
                        })}
                    </Row>
                    <div style={{ float: "right" }}>
                        <PaginationCustom totalItem={article.total} baseUrl={baseUrlForPagination} activePage={parseInt(page)} itemsPerPage={itemsPerPage} />
                    </div>
                </Container>
            </Layout>
        </div>
    );
}
export async function getServerSideProps(context) {
    const { resolvedUrl, query, params } = context;

    try {
        const token = cookies(context).auth;
        if (token == undefined) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false,
                },
            };
        }
        let params_post = {
            limit: 9,
            offset: (Number(query?.page) - 1) * 9 || 0,
        };
        const baseUrlForPagination = "/tin-tuc";
        const article = await articleService.getListArticles(params_post, token);
        console.log({ query, params, params_post, article, baseUrlForPagination });
        return {
            props: {
                article,
                page: query?.page || 1,
                baseUrlForPagination,
                itemsPerPage: params_post.limit,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
}
