import { getData } from "../context/ItemsCont";

export const getAllItems = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    // .then(async (data) => await data.json())
    // .then((data) => cont.setItems(data.categories));
    return await response.json();
}