import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { productService } from "./../../src/services/product/index";
import Layout from "src/components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import CardProduct from "src/components-share/Card/CardProduct/CardProduct";
import PaginationCustom from "./../../src/components-share/Pagination/PaginationCustom";

export default function SearchResult(props) {
    console.log(props);
    const { searchResults = {}, forquery = "", baseUrlForPagination = "#", page } = props;
    const breadcrumb = [
        {
            title: "Kết quả tìm kiếm",
            url: "/ket-qua-tim-kiem",
        },
    ];
    const router = useRouter();
    const inputSearchRef = useRef();

    function search() {
        router.push(`/ket-qua-tim-kiem?forquery=${inputSearchRef.current.value}`);
    }
    function enterInput(e) {
        if (e.key === "Enter") {
            search();
        }
    }
    return (
        <div>
            <Layout titlePage={breadcrumb[0].title} breadcrumb={breadcrumb}>
                <Container className="search_result">
                    <div className="mb-3">
                        <h1>Nhập từ khoá tìm kiếm sản phẩm</h1>
                        <div className="search_box">
                            <div className="search_input">
                                <input placeholder="tìm kiếm sản phẩm..." ref={inputSearchRef} type="text" onKeyDown={enterInput} />
                                <span className="search_icon" onClick={search}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                            </div>
                        </div>
                    </div>
                    {forquery === "" ? (
                        <div style={{ textAlign: "center" }}>{"Hãy nhập từ khoá để tìm kiếm sản phẩm bạn mong muốn :))"}</div>
                    ) : (
                        <div>
                            <h1>Kết quả tìm kiếm</h1>
                            <Row>
                                <Col lg={2} className="mb-3">
                                    Có: <b style={{ color: "#f6470e" }}>{searchResults.data.total}</b> sản phẩm thoả mãn
                                </Col>
                                <Col lg={10}>
                                    <Row>
                                        {searchResults?.data?.listProduct?.map((item, index) => {
                                            return (
                                                <Col className="mb-2" key={item.urlProduct + "search" + index} lg={3} md={4} xs={6}>
                                                    <CardProduct data={item} />
                                                </Col>
                                            );
                                        }) || <></>}
                                    </Row>
                                </Col>
                            </Row>
                            <div style={{ float: "right" }}>
                                <PaginationCustom totalItem={searchResults?.data?.total} baseUrl={baseUrlForPagination} activePage={parseInt(page)} itemsPerPage={20} />
                            </div>
                        </div>
                    )}
                </Container>
            </Layout>
        </div>
    );
}

SearchResult.getInitialProps = async (context) => {
    const { query } = context;
    try {
        const { forquery = "", page = "1" } = query;
        if (forquery === "") {
            return {
                searchResults: {},
                forquery,
                baseUrlForPagination: "",
                page,
            };
        } else {
            const baseUrlForPagination = `/ket-qua-tim-kiem?forquery=${forquery}`;
            const searchResults = await productService.getListProduct({ limit: 20, offset: 0, title: forquery, status: "active", createdAt: "DESC" });
            return {
                searchResults,
                forquery,
                baseUrlForPagination,
                page,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
};
