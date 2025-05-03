"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getRecipesByFilter } from '../getData';
import { listOfItems } from '../listOfItems';

export default function RecipeListPage() {
  const searchParams = useSearchParams();

  const i = searchParams.get('i');
  const a = searchParams.get('a');
  const c = searchParams.get('c');

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getRecipesByFilter({ i: i as string || '', a: a as string || '', c: c as string || '' });
        console.log(data)
        setRecipes(data.meals || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetch();
  }, [i, a, c]);

  return (
    <>
      <div className='flex gap-6'>
        {i ? <>ingredient: {i}</> : <></>}
        {a ? <>Country: {a}</> : <></>}
        {c ? <>Category: {c}</> : <></>}
      </div>
      {listOfItems(recipes)}
    </>
  );
}
