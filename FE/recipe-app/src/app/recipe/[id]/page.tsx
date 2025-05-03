"use client";
import { getRecipeById, getRecipesByFilter } from "@/app/getData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

interface RecipePageProps {
    params: Promise<{ id: string }>
}

export default function RecipePage({ params }: RecipePageProps) {
    const { id } = use(params);
    const router = useRouter();

    const [mealData, setMealData] = useState<any>(null);
    const [categoryData, setCategoryData] = useState<any>([]);

    const makeArray = (keyString: string): Array<any> => {
        let res = []
        for (let i = 1; i <= 20; i++) {
            const key = `${keyString}${i}`;
            const value = mealData[key];
            res.push(value)
        }
        return res
    }

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getRecipeById(id);
                setMealData(data.meals[0] || []);
                // console.log(data.meals[0])
                console.log(data.meals[0])

            } catch (err) {
                console.error('Fetch error:', err);
            }


        };
        fetchRecipes();
    }, []);

    useEffect(() => {
        const fetchCategory = async () => {
            if (!mealData?.strCategory) return;
            try {
                const data = await getRecipesByFilter({ c: mealData.strCategory });
                setCategoryData(data.meals || []);
                console.log(data.meals)
            } catch (err) {
                console.error('Fetch category error:', err);
            }
        };

        fetchCategory();
    }, [mealData]);

    const handleClick = (prop: string, key: string) => {
        console.log("CLICK: ", prop, key)
        router.push(`/recipes?${key}=${encodeURIComponent(prop)}`);
    };

    return (
        <div className="flex justify-center p-8">
            {mealData ? (
                <div className="max-w-3xl">
                    <img src={mealData.strMealThumb} alt={mealData.strMeal} className="w-full max-w-lg object-cover rounded-xl mb-6" />
                    <div className="flex flex-col text-center">
                        <h1 className="text-2xl font-bold mb-4">{mealData.strMeal}</h1>
                        <div onClick={() => handleClick(mealData.strArea, "a")} className="text-center mb-4 cursor-pointer">{mealData.strArea}</div>
                    </div>
                    <div className="flex gap-3">
                        <div className="gap-3 flex flex-col">
                            <ul className="flex gap-6">
                                <div className="cursor-pointer">{makeArray('strIngredient').map((e, key) => <li key={key} onClick={() => handleClick(e, "i")}>{e}</li>)}</div>
                                <div>{makeArray('strMeasure').map((e, key) => <li key={key}>{e}</li>)}</div>
                            </ul>
                            <p className="text-gray-700">{mealData.strInstructions}</p>
                        </div>
                        <div className="min-w-[30%]">
                            <div onClick={() => handleClick(mealData.strCategory, "c")} className="text-center text-2xl cursor-pointer flex flex-col">{mealData.strCategory}</div>
                            {categoryData.map((el: any, key: number) => {
                                return <div key={el.idMeal}>
                                    <Link href={`/recipe/${el.idMeal}`} className="cursor-pointer">{el.strMeal}</Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
