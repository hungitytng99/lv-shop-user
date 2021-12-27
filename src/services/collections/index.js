// Data Flow: Step 2
import { apiGetCollection } from "./../../api/collections/index";
import { convertURL } from "./../../share_function/index";

// transform data to fit with UI;
export const collectionService = {
    listCategory: function (params) {
        return apiGetCollection(params).then((response) => {
            response.data = response.data.map((item) => {
                return {
                    cateId: item.id,
                    urlPage: "/san-pham/" + item.id + "-" + convertURL(item.title),
                    title: item.title,
                    imageUrl: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.thumbnailId}`,
                };
            });
            return response;
        });
    },
};
