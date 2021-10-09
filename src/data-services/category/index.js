// Data Flow: Step 2
import { apiListCategory } from "data-source/category"

// transform data to fit with UI;
export const categoryService = {
    listCategory: function (params) {
        return apiListCategory(params).then((response) => {
            return response
        })
    },
}
