import { convertURL } from "./../../share_function/index";
import { apiGetArticles, apiGetArticlesById } from "./../../api/articles/index";

// transform data to fit with UI;
export const articleService = {
    getListArticles: function (params, token) {
        return apiGetArticles(params, token).then((response) => {
            response.data = response.data.map((item) => {
                let date = new Date(item.updatedAt);
                return {
                    id: item.id,
                    urlPage: "/tin-tuc/" + item.id + "-" + convertURL(item.title),
                    title: item.title,
                    imageUrl: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.avatar}`,
                    author: item.user?.name || "Không rõ",
                    day: date.getDay(),
                    month: date.getMonth(),
                    content: item.content,
                    desc: item.description,
                };
            });
            return response;
        });
    },
    getArticleById: function (id, token) {
        return apiGetArticlesById(id, token).then((response) => {
            response.data.article = {
                id: response.data.article.id,
                urlPage: "/tin-tuc/" + response.data.article.id + "-" + convertURL(response.data.article.title),
                title: response.data.article.title,
                imageUrl: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${response.data.article.avatar}`,
                author: "Không biết",
                date: new Date(response.data.article.updatedAt).toDateString(),
                content: response.data.article.content,
                desc: response.data.article.description,
            };
            response.data.relativeArticles.articles = response.data.relativeArticles.articles.map((item) => {
                let date = new Date(item.updatedAt);
                return {
                    id: item.id,
                    urlPage: "/tin-tuc/" + item.id + "-" + convertURL(item.title),
                    title: item.title,
                    imageUrl: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.avatar}`,
                    author: "Không biết",
                    day: date.getDay(),
                    month: date.getMonth(),
                    content: item.content,
                    desc: item.description,
                };
            });
            return response;
        });
    },
};
