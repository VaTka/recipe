"use client";
import Link from "next/link";

export const listOfItems = (fetchedData: any) => {
    return <div className="">
        <Link href={'/'}>Clear Filter</Link>
        <div className="flex flex-wrap gap-6">
            {fetchedData.map((meal: any) => (
                <Link href={`/recipe/${meal.idMeal}`} key={meal.idMeal} className="w-full sm:w-[45%] md:w-[30%] max-w-xs shadow-lg overflow-hidden transform transition hover:scale-105 duration-300 flex gap-2">
                    <div className="w-full aspect-[4/3] max-w-48">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 key={meal.idMeal} className="font-bold">{meal.strMeal}</h2>
                        <p>{meal.strArea}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
}