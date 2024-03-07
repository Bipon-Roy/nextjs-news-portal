import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = async () => {
    const { data } = await getAllCategories();
    console.log(data);
    return (
        <div>
            <h1>Categories</h1>
        </div>
    );
};

export default CategoryList;
