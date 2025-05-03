"use client";
import { useEffect, useState } from "react";
import { getAllRecipes } from "./getData";
import { listOfItems } from "./listOfItems";

export default function Home() {

  const [fetchedData, setfetchedData] = useState<any>([])

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setfetchedData(data.meals || []);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchRecipes();
  }, []);


  return (
    <>
      <>No filter</>
      {listOfItems(fetchedData)}
    </>
  );
}
