export const getData = async (path) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${path}`
  ).then((res) => res.json());

  return res.content ? res : { content: 'No content found' };
};
