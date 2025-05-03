export const getAllRecipes = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_API + 'search');
  if (!res.ok) throw new Error('Failed to fetch recipes');
  return await res.json();
};

// not the best solution
export const getRecipesByFilter = async (filter: { i?: string, a?: string, c?: string }) => {
  console.log(filter)
  let tempFilter = ''
  if (filter.i) tempFilter = 'i=' + filter.i
  if (filter.a) tempFilter = 'a=' + filter.a
  if (filter.c) tempFilter = 'c=' + filter.c
  console.log(tempFilter)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}recipes?${tempFilter}`);
  console.log(`${process.env.NEXT_PUBLIC_BASE_API}recipes?${tempFilter}`)
  return res.json();
};

export const getRecipeById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}recipes/${id}`);
  return res.json();
};