export const getData = async (path) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${path}`).then(
    (res) => res.json()
  );
};
