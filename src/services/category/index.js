// Data Flow: Step 2
import { apiListCategory } from "../../api/category/index"

// transform data to fit with UI;
export const categoryService = {
    listCategory: function (params) {
        return apiListCategory(params).then((response) => {
            response.data = response.data.map((item) => {
                return {
                    cateId: item.cateId,
                    urlPage: "/san-pham/" + item.cateId,
                    title: item.cateName,
                }
            })
            return response
        })
    },
}
