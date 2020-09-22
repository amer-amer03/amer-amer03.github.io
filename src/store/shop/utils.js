export const convertCollections = (collections) => {
  const converted = collections.docs.map((doc) => {
    const { title, items, id } = doc.data();
    return {
      title,
      items,
      id,
    };
  });
  return converted.reduce((acc, collection) => {
    acc[collection.id.toLowerCase()] = collection;
    return acc;
  }, {});
};
